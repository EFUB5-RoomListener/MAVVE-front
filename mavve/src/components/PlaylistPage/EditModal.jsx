import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../PlaylistPage/EditModal.style'
import close from '../../assets/PlaylistPage/close.svg'
import photo from '../../assets/PlaylistPage/photo.svg'
import { patchPlaylistSetting } from '../../api/playlist'
import { postPlaylist } from '../../api/playlist'
import { uploadImage } from '../../api/image'

export default function EditModal({ onClose, playlist }) {
    const [name, setName] = useState(playlist.name || '');
    const [imageUrl, setImageUrl] = useState(playlist.playImageUrl || '');
    const [file, setFile] = useState(null);

    const nav = useNavigate();

    const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

        setFile(selectedFile);
        const previewUrl = URL.createObjectURL(selectedFile);
        setImageUrl(previewUrl);

        try {
        const uploadedUrl = await uploadImage(selectedFile, "playlist");
        setImageUrl(uploadedUrl);
        } catch (err) {
            alert("이미지 업로드에 실패했습니다.");
            console.error(err);
        }
    };

    const handleSave = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
        let result;

        if (playlist.playlistId === 'n') {
        result = await postPlaylist({ name, playImageUrl: imageUrl }, accessToken);
        console.log('플레이리스트 생성 성공:', result);
        nav(`/playlist/${result.playlistId}`, {
            state: { isNew:true, tempImageUrl: imageUrl }
        });
        }

        else {
        result = await patchPlaylistSetting(
            playlist.playlistId,
            {
            name,
            coverImageUrl: imageUrl,
            },
            accessToken
        );
        alert('플레이리스트 정보 수정 완료!');
        window.location.reload();
        }

        onClose();
    } catch (e) {
        alert('플레이리스트 저장 실패');
    }
    };

    return (
        <S.Container>
            <S.Modal>
                <S.Top>
                    <S.Text>플레이리스트 설정</S.Text>
                    <S.CloseBtn onClick={onClose}>
                        <img src={close} alt='닫기 버튼'/>
                    </S.CloseBtn>
                </S.Top>
                <S.Photo onClick={() => document.getElementById('imageUpload').click()}>
                    {imageUrl ? (
                        <img src={imageUrl} alt="선택된 이미지" />
                    ) : (
                        <S.ImgIcon>
                            <img src={photo} alt="사진 추가 아이콘" />
                        </S.ImgIcon>
                    )}
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </S.Photo>
                <S.TitleContainer>
                    <S.Title>제목</S.Title>
                    <S.InputContainer>
                        <S.Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="플레이리스트 제목 입력해주세요!"
                        />
                        <S.SaveBtn onClick={handleSave}>저장하기</S.SaveBtn>
                    </S.InputContainer>
                </S.TitleContainer>
            </S.Modal>
        </S.Container>
    )
}

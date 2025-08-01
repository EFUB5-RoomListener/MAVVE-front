import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Edit from "../../assets/RoomPage/createpencil.svg";
import * as S from '../PlaylistPage/PlaylistHeader.style'
import EditModal from './EditModal';
import { deletePlaylist } from '../../api/playlist';

export default function PlaylistHeader({ playlist, showDeleteButton = false }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const nav = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDelete = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            await deletePlaylist(playlist.playlistId, accessToken);
            alert('플레이리스트가 삭제되었습니다.');
            nav('/playlist');
        } catch (e) {
            alert('삭제 실패');
            console.error(e);
        }
    };


    return (
        <>
            <S.Container>
                <S.Thumbnail>
                    {playlist.playImageUrl ? (
                        <img src={playlist.playImageUrl} alt="썸네일" />
                    ) : (
                        <S.EmptyThumbnail />
                    )}
                </S.Thumbnail>

                <S.Info>
                    <S.Subtitle>플레이리스트 #{playlist.playlistId}</S.Subtitle>
                    <S.Title>
                        <S.PlaylistTitle>{playlist.name}</S.PlaylistTitle>
                        <S.EditButton onClick={openModal}>
                            <img src={Edit} alt='편집 버튼'/>
                        </S.EditButton>
                    </S.Title>
                    <S.BottomContainer>
                        <S.User>작성자 이름으로 바꾸기: {playlist.userId}</S.User>
                        {showDeleteButton && (
                            <S.DeleteButton onClick={handleDelete}>
                                이 플레이리스트 삭제하기
                            </S.DeleteButton>)}
                    </S.BottomContainer>
                </S.Info>
            </S.Container>

            {isModalOpen && <EditModal onClose={closeModal} playlist={playlist} />}
        </>
    );
}

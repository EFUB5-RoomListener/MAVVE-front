import React, { useState } from 'react'
import Edit from "../../assets/RoomPage/createpencil.svg";
import * as S from '../PlaylistPage/PlaylistHeader.style'
import EditModal from './EditModal';

export default function PlaylistHeader({ playlist }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <S.User>작성자 이름으로 바꾸기: {playlist.userId}</S.User>
                </S.Info>
            </S.Container>

            {isModalOpen && <EditModal onClose={closeModal} />}
        </>
    );
}

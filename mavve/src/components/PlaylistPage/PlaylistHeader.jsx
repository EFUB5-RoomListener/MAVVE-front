import React, { useState } from 'react'
import Edit from "../../assets/RoomPage/createpencil.svg";
import * as S from '../PlaylistPage/PlaylistHeader.style'
import EditModal from './EditModal';

export default function PlaylistHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <S.Container>
                <S.Thumbnail>
                    <S.EmptyThumbnail />
                </S.Thumbnail>

                <S.Info>
                    <S.Subtitle>플레이리스트 #1</S.Subtitle>
                    <S.Title>
                        <S.PlaylistTitle>플레이리스트 #1</S.PlaylistTitle>
                        <S.EditButton onClick={openModal}>
                            <img src={Edit} alt='편집 버튼'/>
                        </S.EditButton>
                    </S.Title>
                    <S.User>홍길동</S.User>
                </S.Info>
            </S.Container>

            {isModalOpen && <EditModal onClose={closeModal} />}
        </>
    );
}

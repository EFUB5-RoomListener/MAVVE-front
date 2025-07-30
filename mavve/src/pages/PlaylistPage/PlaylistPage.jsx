import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../PlaylistPage/PlaylistPage.style'
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';
import music from '../../assets/Common/icn_music.svg'
import PlaylistComponent from '../../components/PlaylistPage/PlaylistComponent';

export default function PlaylistPage() {
    const nav = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaylistClick = () => {
        nav('/playlist/1'); // 임시 고정
    };

    const handleCreateClick = () => {
        setIsModalOpen(true);
        console.log("모달 오픈");
    };

    return (
        <S.Container>
            <TopBar />
            <S.Contents>
                <SideBar />
                <S.MainContents>
                    <S.Header>
                        <S.Title>내 플레이리스트</S.Title>
                        <S.CreateButton onClick={handleCreateClick}>
                            <img src={music} alt="music" />
                            새로운 플레이리스트 추가
                        </S.CreateButton>
                    </S.Header>
                    <S.Playlists>
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <PlaylistComponent key={idx} onClick={handlePlaylistClick} />
                        ))}
                    </S.Playlists>
                </S.MainContents>
            </S.Contents>
        </S.Container>
    )
}
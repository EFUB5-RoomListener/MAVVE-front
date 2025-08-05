import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../PlaylistPage/PlaylistPage.style'
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';
import music from '../../assets/Common/icn_music.svg'
import PlaylistComponent from '../../components/PlaylistPage/PlaylistComponent';
import { getMyPlaylists } from '../../api/playlist';

export default function PlaylistPage() {
    const nav = useNavigate();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) return;

        try {
            const data = await getMyPlaylists(accessToken);
            setPlaylists(data);
        } catch (error) {
            console.error('플레이리스트 불러오기 실패:', error);
        }
        };

        fetchData();
    }, []);

    const handlePlaylistClick = (playlistId) => {
        nav(`/playlist/${playlistId}`);
    };

    const handleCreateClick = () => {
        nav('/playlist/new');
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
                        {playlists.map((playlist) => (
                        <PlaylistComponent
                            key={playlist.playlistId}
                            id={playlist.playlistId}
                            name={playlist.name}
                            imageUrl={playlist.playImageUrl}
                            onClick={() => handlePlaylistClick(playlist.playlistId)}
                        />
                        ))}
                    </S.Playlists>
                </S.MainContents>
            </S.Contents>
        </S.Container>
    )
}
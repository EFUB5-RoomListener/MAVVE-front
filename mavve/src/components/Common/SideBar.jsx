import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../Common/SideBar.style'
import music from '../../assets/Common/icn_music.svg'
import { fetchUserInfo } from '../../api/user'
import { getMyPlaylists } from '../../api/playlist'

export default function SideBar() {
    const nav = useNavigate();
    const [myPlaylists, setMyPlaylists] = useState([]);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchPlaylists = async () => {
            const token = localStorage.getItem('accessToken');
            if (!token) return;

            try {
                const [playlists, userInfo] = await Promise.all([
                    getMyPlaylists(token),
                    fetchUserInfo(token),
                ]);
                setMyPlaylists(playlists.slice(0, 4));
                setNickname(userInfo.nickname);
            } catch (error) {
                console.error('내 플레이리스트 불러오기 실패:', error);
            }
        };

        fetchPlaylists();
    }, []);

    const handleRoomClick = (roomCode) => {
        nav(`/rooms/${roomCode}`);
    };

    const handlePlaylistClick = (playlistId) => {
        nav(`/playlist/${playlistId}`);
    };

    return (
        <S.SideBarContainer>
            <S.CreateArea>
                <S.CreateButton>
                    <img src={music} alt="music" />
                    만들기
                </S.CreateButton>
            </S.CreateArea>
            <S.Title>최근 방문 기록</S.Title>
            <S.Section>
                {[...Array(5)].map((_, index) => (
                    <S.ComponentWrapper key={index}>
                        <S.Thumbnail />
                        <S.Info>
                            <S.InfoTitle>방 제목</S.InfoTitle>
                            <S.InfoSubTitle>#K-pop</S.InfoSubTitle>
                        </S.Info>
                    </S.ComponentWrapper>
                ))}
            </S.Section>
            <S.Title>내 플레이리스트</S.Title>
            <S.Section>
                {myPlaylists.map((playlist) => (
                    <S.ComponentWrapper 
                        key={playlist.playlistId}
                        onClick={() => handlePlaylistClick(playlist.playlistId)}
                    >
                        {playlist.playImageUrl ? (
                            <S.Thumbnail src={playlist.playImageUrl} />
                        ) : (
                            <S.Thumbnail />
                        )}
                        <S.Info>
                            <S.InfoTitle>{playlist.name}</S.InfoTitle>
                            <S.InfoSubTitle>{nickname}</S.InfoSubTitle>
                        </S.Info>
                    </S.ComponentWrapper>
                ))}
            </S.Section>
        </S.SideBarContainer>
    )
}

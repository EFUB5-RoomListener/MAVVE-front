import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../Common/SideBar.style'
import music from '../../assets/Common/icn_music.svg'
import { fetchUserInfo } from '../../api/user'
import { getRooms } from '../../api/room'
import { getMyPlaylists } from '../../api/playlist'

export default function SideBar() {
    const nav = useNavigate();
    const [newRooms, setNewRooms] = useState([]);
    const [myPlaylists, setMyPlaylists] = useState([]);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchPlaylists = async () => {
            const token = localStorage.getItem('accessToken');
            if (!token) return;

            try {
                const [rooms, playlists, userInfo] = await Promise.all([
                    getRooms(token),
                    getMyPlaylists(token),
                    fetchUserInfo(token),
                ]);
                setNewRooms(rooms.slice(0, 5));
                setMyPlaylists(playlists.slice(0, 4));
                setNickname(userInfo.nickname);
                console.log("🎯 rooms:", rooms)
            } catch (error) {
                console.error('내 플레이리스트 불러오기 실패:', error);
            }
        };

        fetchPlaylists();
    }, []);

    const handleRoomClick = (roomId) => {
        localStorage.setItem("fromEnterBtn", "true");
        nav(`/rooms/${roomId}/inside`);
    };

    const handlePlaylistClick = (playlistId) => {
        nav(`/playlist/${playlistId}`);
    };

    return (
        <S.SideBarContainer>
            <S.CreateArea>
                <S.CreateButton onClick={() => nav(`/playlist/new`)}>
                    <img src={music} alt="music" />
                    만들기
                </S.CreateButton>
            </S.CreateArea>
            <S.Title>새로 생긴 방</S.Title>
            <S.Section>
                {newRooms.length > 0
                ? newRooms.map((room) => (
                    <S.ComponentWrapper
                        key={room.roomId}
                        onClick={() => handleRoomClick(room.roomId)}
                    >
                        {room.imageURL ? (
                        <S.Thumbnail src={room.imageURL} />
                        ) : (
                        <S.Thumbnail />
                        )}
                        <S.Info>
                        <S.InfoTitle>{room.roomName}</S.InfoTitle>
                        <S.InfoSubTitle>#{room.tag?.[0] || '태그없음'}</S.InfoSubTitle>
                        </S.Info>
                    </S.ComponentWrapper>
                    ))
                : [...Array(5)].map((_, index) => (
                    <S.ComponentWrapper key={index}>
                        <S.Thumbnail />
                        <S.Info>
                        <S.InfoTitle>방 제목</S.InfoTitle>
                        <S.InfoSubTitle>#해시태그</S.InfoSubTitle>
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

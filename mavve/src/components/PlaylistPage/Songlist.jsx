import React, { useState } from 'react'
import * as S from '../PlaylistPage/Songlist.style'
import SongComponent2 from './SongComponent2'
import time from '../../assets/PlaylistPage/time.svg'
import { deleteSongFromPlaylist } from '../../api/playlist'

export default function Songlist({ songs, playlistId }) {
    const [selectedSongs, setSelectedSongs] = useState({});

    const toggleSelect = (id) => {
        setSelectedSongs(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const hasSelected = Object.values(selectedSongs).some(v => v);

    const handleDeleteSongs = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            for (const spotifySongId of Object.keys(selectedSongs)) {
                if (selectedSongs[spotifySongId]) {
                    await deleteSongFromPlaylist(playlistId, spotifySongId, accessToken);
                }
            }
            alert('삭제 완료!');
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert('삭제 실패');
        }
    };

    return (
        <S.Container>
            <S.ResultContainer>
                <S.Header>
                    <S.Index>#</S.Index>
                    <S.Title>제목</S.Title>
                    <S.AlbumName>앨범</S.AlbumName>
                    <S.AddDate>추가한 날짜</S.AddDate>
                    <S.Time><img src={time} alt='시간'/></S.Time>
                </S.Header>
                <S.Line />
                <S.ScrollArea>
                    {songs.map((song, index) => (
                        <SongComponent2
                            key={song.spotifySongId}
                            id={song.spotifySongId}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            coverUrl={song.coverUrl}
                            duration={song.duration}
                            createdAt={song.createdAt}
                            isSelected={selectedSongs[song.spotifySongId] || false}
                            onToggleSelect={toggleSelect}
                            index={index + 1}
                        />
                    ))}
                </S.ScrollArea>
            </S.ResultContainer>

            {hasSelected && (
                <S.DeleteSongButton onClick={handleDeleteSongs}>선택한 노래 삭제하기</S.DeleteSongButton>
            )}
        </S.Container>
    )
}
import React, { useState } from 'react'
import * as S from '../PlaylistPage/Songlist.style'
import SongComponent2 from './SongComponent2'
import time from '../../assets/PlaylistPage/time.svg'

export default function Songlist() {
    const [selectedSongs, setSelectedSongs] = useState({ 0: false });

    const toggleSelect = (id) => {
        setSelectedSongs(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const hasSelected = Object.values(selectedSongs).some(v => v);

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
                <SongComponent2
                    id={0}
                    isSelected={selectedSongs[0]}
                    onToggleSelect={toggleSelect}
                />
            </S.ResultContainer>

            {hasSelected && (
                <S.DeleteSongButton>선택한 노래 삭제하기</S.DeleteSongButton>
            )}
        </S.Container>
    )
}
import React, { useState } from 'react'
import * as S from '../PlaylistPage/SongComponent2.style'
import Unchecked from '../../assets/RoomPage/checkbox.svg';
import Checked from '../../assets/RoomPage/check-01.svg';

export default function SongComponent2({
    id,
    title,
    artist,
    album,
    coverUrl,
    duration,
    createdAt,
    isSelected,
    onToggleSelect,
    index,
}) {
    const [isHovered, setIsHovered] = useState(false);

    const formatDuration = (ms) => {
        const totalSec = Math.floor(ms / 1000);
        const min = String(Math.floor(totalSec / 60)).padStart(2, '0');
        const sec = String(totalSec % 60).padStart(2, '0');
        const ms100 = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');

        return `${min}:${sec}:${ms100}`;
    };
    
    const formatDate = (isoString) => {
        const now = new Date();
        const past = new Date(isoString);
        const diffMs = now - past;

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return '방금 전';
        if (minutes < 60) return `${minutes}분 전`;
        if (hours < 24) return `${hours}시간 전`;
        if (days < 7) return `${days}일 전`;

        // 일주일 이상
        return `${past.getFullYear()}.${String(past.getMonth() + 1).padStart(2, '0')}.${String(past.getDate()).padStart(2, '0')}`;
    };


    return (
        <S.Container
            isSelected={isSelected}
            onClick={() => onToggleSelect(id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <S.SongContainer>
            <S.CheckboxContainer>
                {isSelected ? (
                    <>
                    <S.Checkbox src={Unchecked} />
                    <S.Check src={Checked} />
                    </>
                ) : isHovered ? (
                    <S.Checkbox src={Unchecked} />
                ) : (
                    <S.Number>{index}</S.Number>
                )}
            </S.CheckboxContainer>
                <S.ThumbnailWrapper>
                    <S.Thumbnail src={coverUrl} alt='thumbnail'/>
                    <S.Circle />
                </S.ThumbnailWrapper>
                <S.SongInfo>
                    <S.SongTitle>{title}</S.SongTitle>
                    <S.Artist>{artist}</S.Artist>
                </S.SongInfo>
            </S.SongContainer>
            <S.SubContainer>
                <S.AlbumName>{album}</S.AlbumName>
                <S.AddDate>{formatDate(createdAt)}</S.AddDate>
                <S.Time>{formatDuration(duration)}</S.Time>
            </S.SubContainer>
        </S.Container>
    )
}

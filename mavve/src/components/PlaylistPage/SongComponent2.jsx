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
                <S.Thumbnail src={coverUrl} alt='thumbnail'/>
                <S.SongInfo>
                    <S.SongTitle>{title}</S.SongTitle>
                    <S.Artist>{artist}</S.Artist>
                </S.SongInfo>
            </S.SongContainer>
            <S.SubContainer>
                <S.AlbumName>{album}</S.AlbumName>
                <S.AddDate>4일전</S.AddDate>
                <S.Time>{formatDuration(duration)}</S.Time>
            </S.SubContainer>
        </S.Container>
    )
}

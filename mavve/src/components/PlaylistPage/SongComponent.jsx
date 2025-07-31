import React, { useState } from 'react'
import * as S from '../PlaylistPage/SongComponent.style'
import Unchecked from '../../assets/RoomPage/checkbox.svg';
import Checked from '../../assets/RoomPage/check-01.svg';

export default function SongComponent({ title, artist, album, coverUrl, duration }) {
    const [isSelected, setIsSelected] = useState(false);

    const formatDuration = (ms) => {
        const totalSec = Math.floor(ms / 1000);
        const min = String(Math.floor(totalSec / 60)).padStart(2, '0');
        const sec = String(totalSec % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    const toggleSelect = () => {
        setIsSelected(prev => !prev);
    };

    return (
        <S.Container isSelected={isSelected} onClick={() => toggleSelect()}>
            <S.SongContainer>
            <S.CheckboxContainer>
                <S.Checkbox src={Unchecked} />
                {isSelected && <S.Check src={Checked} />}
            </S.CheckboxContainer>
                <S.Thumbnail src={coverUrl} alt='thumbnail'/>
                <S.SongInfo>
                    <S.SongTitle>{title}</S.SongTitle>
                    <S.Artist>{artist}</S.Artist>
                </S.SongInfo>
            </S.SongContainer>
            <S.SubContainer>
                <S.SubText>{album}</S.SubText>
                <S.SubText>{formatDuration(duration)}</S.SubText>
            </S.SubContainer>
        </S.Container>
    )
}

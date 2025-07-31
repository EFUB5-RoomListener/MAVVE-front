import React, { useState } from 'react'
import * as S from '../PlaylistPage/SongComponent2.style'
import Unchecked from '../../assets/RoomPage/checkbox.svg';
import Checked from '../../assets/RoomPage/check-01.svg';
import ex from '../../assets/PlaylistPage/ex.jpg'

export default function SongComponent2({ id, isSelected, onToggleSelect }) {
    const [isHovered, setIsHovered] = useState(false);
    
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
                        <S.Number>1</S.Number>
                    )}
                </S.CheckboxContainer>
                    <S.Thumbnail src={ex} alt='thumbnail'/>
                    <S.SongInfo>
                        <S.SongTitle>노래 제목</S.SongTitle>
                        <S.Artist>가수</S.Artist>
                    </S.SongInfo>
                </S.SongContainer>
                <S.SubContainer>
                    <S.AlbumName>앨범 이름</S.AlbumName>
                    <S.AddDate>4일전</S.AddDate>
                    <S.Time>02:22:36</S.Time>
                </S.SubContainer>
            </S.Container>
        )
}

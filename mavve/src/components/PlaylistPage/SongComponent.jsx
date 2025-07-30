import React, { useState } from 'react'
import * as S from '../PlaylistPage/SongComponent.style'
import Unchecked from '../../assets/RoomPage/checkbox.svg';
import Checked from '../../assets/RoomPage/check-01.svg';
import ex from '../../assets/PlaylistPage/ex.jpg'

export default function SongComponent() {
    const [isSelected, setIsSelected] = useState(false);

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
                <S.Thumbnail src={ex} alt='thumbnail'/>
                <S.SongInfo>
                    <S.SongTitle>노래 제목</S.SongTitle>
                    <S.Artist>가수</S.Artist>
                </S.SongInfo>
            </S.SongContainer>
            <S.SubContainer>
                <S.SubText>앨범 이름</S.SubText>
                <S.SubText>02:36</S.SubText>
            </S.SubContainer>
        </S.Container>
    )
}

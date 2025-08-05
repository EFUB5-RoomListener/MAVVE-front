import React, { useState } from 'react'
import * as S from '../PlaylistPage/PlaylistComponent.style'

export default function PlaylistComponent({ id, name, imageUrl, onClick }) {

    return (
        <S.RoomContainer onClick={onClick}>
            <S.Thumbnail style={{ backgroundImage: `url(${imageUrl})` }} />
            <S.Info>
                <S.InfoText>
                    <S.InfoTitle>{name}</S.InfoTitle>
                    <S.InfoTime>01:24:34</S.InfoTime> {/*시간 나중에 바꾸기*/}
                </S.InfoText>
            </S.Info>
        </S.RoomContainer>
    )
}

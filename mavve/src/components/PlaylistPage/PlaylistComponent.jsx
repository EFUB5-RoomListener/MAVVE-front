import React, { useState } from 'react'
import * as S from '../PlaylistPage/PlaylistComponent.style'

export default function PlaylistComponent({ onClick }) {

    return (
        <S.RoomContainer onClick={onClick}>
            <S.Thumbnail>
            </S.Thumbnail>
            <S.Info>
                <S.InfoText>
                    <S.InfoTitle>플리 제목</S.InfoTitle>
                    <S.InfoTime>01:24:34</S.InfoTime>
                </S.InfoText>
            </S.Info>
        </S.RoomContainer>
    )
}

import React from 'react'
import * as S from '../Common/SideBar.style'
import music from '../../assets/Common/icn_music.svg'

export default function SideBar() {
    return (
        <S.SideBarContainer>
            <S.CreateArea>
                <S.CreateButton>
                    <img src={music} alt="music" />
                    만들기
                </S.CreateButton>
            </S.CreateArea>
            <S.Title>최근 방문 기록</S.Title>
            <S.Section>
                {[...Array(5)].map((_, index) => (
                    <S.ComponentWrapper key={index}>
                        <S.Thumbnail />
                        <S.Info>
                            <S.InfoTitle>방 제목</S.InfoTitle>
                            <S.InfoSubTitle>#K-pop</S.InfoSubTitle>
                        </S.Info>
                    </S.ComponentWrapper>
                ))}
            </S.Section>
            <S.Title>내 플레이리스트</S.Title>
            <S.Section>
                {[...Array(4)].map((_, index) => (
                    <S.ComponentWrapper key={index}>
                        <S.Thumbnail />
                        <S.Info>
                            <S.InfoTitle>플레이리스트</S.InfoTitle>
                            <S.InfoSubTitle>홍길동</S.InfoSubTitle>
                        </S.Info>
                    </S.ComponentWrapper>
                ))}
            </S.Section>
        </S.SideBarContainer>
    )
}

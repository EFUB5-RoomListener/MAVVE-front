import React from 'react'
import * as S from '../MainPage/MainPage.style';
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';

export default function MainPage() {
  return (
    <S.Container>
      <TopBar />
      <S.Contents>
        <SideBar />
      </S.Contents>
    </S.Container>
  )
}

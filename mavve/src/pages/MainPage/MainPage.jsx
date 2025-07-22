import React from 'react'
import * as S from '../MainPage/MainPage.style';
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';
import TopFiveRoom from '../../components/MainPage/TopFiveRoom';
import Diaries from '../../components/MainPage/Diaries';
import RoomComponent from '../../components/Common/RoomComponent';
import OneLineNote from '../../components/Common/OneLineNote';

export default function MainPage() {
  return (
    <S.Container>
      <TopBar />
      <S.Contents>
        <SideBar />
        <S.MainContents>
          <TopFiveRoom />
          <Diaries />
          <RoomComponent />
          <OneLineNote />
        </S.MainContents>
      </S.Contents>
    </S.Container>
  )
}

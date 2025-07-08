import React from 'react'
import * as S from '../MainPage/MainPage.style';
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';
import RoomComponent from '../../components/Common/RoomComponent';
import OneLineNote from '../../components/Common/OneLineNote';

export default function MainPage() {
  return (
    <S.Container>
      <TopBar />
      <S.Contents>
        <SideBar />
        <S.MainContents>
          <RoomComponent />
          <OneLineNote />
        </S.MainContents>
      </S.Contents>
    </S.Container>
  )
}

import React from 'react'
import * as S from '../MainPage/MainPage.style';
import TopBar from '../../components/Common/TopBar';
import SideBar from '../../components/Common/SideBar';
import TopFiveRoom from '../../components/MainPage/TopFiveRoom';
import Diaries from '../../components/MainPage/Diaries';
import wave from '../../assets/MainPage/wave.svg';

export default function MainPage() {
  return (
    <S.Container>
      <S.Wave>
            <img src={wave} alt="background_wave" />
      </S.Wave>
      <TopBar />
      <S.Contents>
        <SideBar />
        <S.MainContents>
          <TopFiveRoom />
          <Diaries />
        </S.MainContents>
      </S.Contents>
    </S.Container>
  )
}

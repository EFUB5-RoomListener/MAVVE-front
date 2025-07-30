import React from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import Stop from '../../assets/RoomInsidePage/roomin_icn_play.svg';

function NowPlaying({ currentSong }) {
    return (
      <S.NowPlayingContainer>
        <S.ShadowWrapper>
          <S.MaskedImg $src={currentSong?.coverUrl} />
          <S.InnerShadow />
        </S.ShadowWrapper>
        <S.NowPlayingBar>
          <S.StopBtn src={Stop} />
          <S.NowTitle>{currentSong?.title || "재생 중인 곡 없음"}</S.NowTitle>
          <S.NowArtist>{currentSong?.artist || "-"}</S.NowArtist>
          <S.NowDuration>
            {currentSong?.duration ? `${currentSong.duration}` : ""}
          </S.NowDuration>
        </S.NowPlayingBar>
      </S.NowPlayingContainer>
    );
  }
  


export default NowPlaying;
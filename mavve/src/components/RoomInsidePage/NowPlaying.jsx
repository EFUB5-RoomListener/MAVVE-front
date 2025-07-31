import React from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import Stop from '../../assets/RoomInsidePage/roomin_icn_play.svg';

function NowPlaying({ currentSong }) {
  // duration 밀리초를 분:초로 변환 
  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`; // 한자리 숫자를 두자리로 만들어줌 
  };
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
            {formatDuration(currentSong?.duration ? `${currentSong.duration}` : "")}
          </S.NowDuration>
        </S.NowPlayingBar>
      </S.NowPlayingContainer>
    );
  }
  


export default NowPlaying;
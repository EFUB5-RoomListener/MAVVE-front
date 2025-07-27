import React from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import {mockPlayList} from './mockPlayList';
import Stop from '../../assets/RoomInsidePage/roomin_icn_play.svg';

function NowPlaying (){
const currentPlayingId = 2;
const currentSong = mockPlayList.find(song => song.id === currentPlayingId);

    return(
        <S.NowPlayingContainer>
            <S.ShadowWrapper>
                <S.MaskedImg $src={currentSong.thumbnail} />
                <S.InnerShadow />
            </S.ShadowWrapper>
            <S.NowPlayingBar>
                <S.StopBtn src={Stop}/>
                <S.NowTitle>{currentSong.title}</S.NowTitle>
                <S.NowArtist>{currentSong.artist}</S.NowArtist>
                <S.NowDuration>{currentSong.duration}</S.NowDuration>
            </S.NowPlayingBar>
        </S.NowPlayingContainer>
    );
}


export default NowPlaying;
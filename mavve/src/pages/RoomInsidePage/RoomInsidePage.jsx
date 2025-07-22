import React, { useState } from "react";
import TopBar from '../../components/Common/TopBar';
import NowPlaying from "../../components/RoomInsidePage/NowPlaying";
import RoomPlayList from "../../components/RoomInsidePage/RoomPlayList";
import RoomChat from "../../components/RoomInsidePage/RoomChat";
import * as S from '../RoomInsidePage/RoomInsidePage.style';


function RoomInsidePage(){
    const [isChatOpen, setIsChatOpen] = useState(false);

    return(
        <S.RoomInsidePageContainer>
            <TopBar />
            <S.MainContainer>
                <NowPlaying />
                <RoomPlayList isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen}/>
                {isChatOpen && <RoomChat />}
            </S.MainContainer>
            <S.RoomLeaveBtn>방 나가기</S.RoomLeaveBtn>
        </S.RoomInsidePageContainer>
    );
}

export default RoomInsidePage;
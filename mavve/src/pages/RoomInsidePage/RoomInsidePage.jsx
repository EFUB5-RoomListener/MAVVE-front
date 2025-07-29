import React, { useState, useEffect } from "react";
import TopBar from '../../components/Common/TopBar';
import NowPlaying from "../../components/RoomInsidePage/NowPlaying";
import RoomPlayList from "../../components/RoomInsidePage/RoomPlayList";
import RoomChat from "../../components/RoomInsidePage/RoomChat";
import * as S from '../RoomInsidePage/RoomInsidePage.style';
import { useParams } from 'react-router-dom';
import { connectWebSocket, disconnectWebSocket } from "../../api/chat";

function RoomInsidePage(){
    const [isChatOpen, setIsChatOpen] = useState(false);

    // 웹소켓 연결/해제
    const { roomCode } = useParams();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (!accessToken) return;
        
        // 입장 시 웹소켓 연결
        connectWebSocket(accessToken, () => {
          console.log('WebSocket 연결 완료');
        });
    
        // 나갈 때 웹소켓 해제
        return () => {
          disconnectWebSocket();
        };
      }, []);


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
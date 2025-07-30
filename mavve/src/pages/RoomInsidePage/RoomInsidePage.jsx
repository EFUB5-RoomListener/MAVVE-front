import React, { useState, useEffect, useRef } from "react";
import TopBar from '../../components/Common/TopBar';
import NowPlaying from "../../components/RoomInsidePage/NowPlaying";
import RoomPlayList from "../../components/RoomInsidePage/RoomPlayList";
import RoomChat from "../../components/RoomInsidePage/RoomChat";
import * as S from '../RoomInsidePage/RoomInsidePage.style';
import { useParams } from 'react-router-dom';
import { connectWebSocket, disconnectWebSocket } from "../../api/chat";
import { subscribeSong } from "../../api/websocket-song";
import client from "../../api/client";
import { enterRoom } from "../../api/room";

function RoomInsidePage(){
    const [isChatOpen, setIsChatOpen] = useState(false);

    // 브로드캐스트 받은 메시지 전달용 상태 
    const [songEvent, setSongEvent] = useState(null);

    // 웹소켓 연결/해제
    const { roomCode } = useParams();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
      if (!accessToken) return;
  
      // WebSocket 연결 & 구독 등록
      connectWebSocket(accessToken, () => {
        console.log("WebSocket 연결 완료");
  
        const subscription = subscribeSong(roomCode, (data) => {
          console.log("메시지 수신됨:", data);
          setSongEvent(data); // 모든 메시지 RoomPlayList로 전달

          
          if (data.type === "SUBSCRIBE_COMPLETE") {
            console.log("구독 성공");
          }    
        });
  
        // 컴포넌트 unmount 시 구독 해제
        client.__roomSongSubscription = subscription;
      });
  
      return () => {
        if (client.__roomSongSubscription) {
          client.__roomSongSubscription.unsubscribe();
          console.log("노래 구독 해제");
        }
        disconnectWebSocket();
      };
    }, [roomCode]);  

    // 플레이리스트 초기화 
    const [playList, setPlayList] = useState([]);
    
    // 방 정보 불러오기 
    const [roomData, setRoomData] = useState(null); 
    useEffect(() => {
      const fetchRoomData = async () => {
        try {
          const data = await enterRoom(roomCode);
          console.log("📦 서버 응답 roomData:", data);
          setRoomData(data);
          setPlayList(data.songs)
        } catch (err) {
          console.error("방 정보 불러오기 실패:", err);
        }
      };

      if (roomCode) fetchRoomData();
    }, [roomCode]);

     // 현재 재생중인 곡 정의 
     const [currentSong, setCurrentSong] = useState(null);
     // 재생 시작한 시간 (동기화용)
     const [startTime, setStartTime] = useState(null);
 
     // currentSong 불러오기 
     useEffect(() => {
       if (roomData?.currentSong?.song) {
         setCurrentSong(roomData.currentSong.song);
         setStartTime(roomData.currentSong.startTime); 
       }
     }, [roomData]);
    
     
    return(
        <S.RoomInsidePageContainer>
            <TopBar />
            <S.MainContainer>
                <NowPlaying currentSong={currentSong}/>
                <RoomPlayList 
                  currentSong={currentSong} 
                  setCurrentSong={setCurrentSong}
                  startTime={startTime}
                  setStartTime={setStartTime}
                  roomCode={roomCode} 
                  songEvent={songEvent} 
                  isChatOpen={isChatOpen} 
                  setIsChatOpen={setIsChatOpen}
                  playList={playList}
                  setPlayList={setPlayList}
                  roomData={roomData}
                />
                {isChatOpen && <RoomChat />}
            </S.MainContainer>
            <S.RoomLeaveBtn>방 나가기</S.RoomLeaveBtn>
        </S.RoomInsidePageContainer>
    );
}

export default RoomInsidePage;
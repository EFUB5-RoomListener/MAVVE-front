import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../../components/Common/TopBar";
import NowPlaying from "../../components/RoomInsidePage/NowPlaying";
import RoomPlayList from "../../components/RoomInsidePage/RoomPlayList";
import RoomChat from "../../components/RoomInsidePage/RoomChat";
import * as S from "../RoomInsidePage/RoomInsidePage.style";
import { connectWebSocket, disconnectWebSocket } from "../../api/chat";
import { subscribeSong, getSpotifyAccessToken } from "../../api/websocket-song";
import client from "../../api/client";
import { enterRoom } from "../../api/room";

function RoomInsidePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [songEvent, setSongEvent] = useState(null);
  const [playList, setPlayList] = useState([]);
  const [roomData, setRoomData] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const { roomCode } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate()

  // 방 정보 및 초기 재생곡 세팅
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const data = await enterRoom(roomCode);
        console.log("📦 서버 응답 roomData:", data);
        setRoomData(data);
        setPlayList(data.songs);
      } catch (err) {
        console.error("방 정보 불러오기 실패:", err);
      }
    };

    if (roomCode) fetchRoomData();
  }, [roomCode]);


  // 현재곡 seekPosition 계산
  useEffect(() => {
    const raw = roomData?.currentSong?.startTime;
    if (!roomData?.currentSong?.song || !raw) return;

    const parsed = new Date(raw.split(".")[0] + "Z");
    const elapsedMs = new Date() - parsed;
    const seekPosition = Math.floor(elapsedMs / 1000);

    setCurrentSong({
      ...roomData.currentSong.song,
      seekPosition,
    });
    console.log("seekPosition (초):", seekPosition);
  }, [roomData]);

  // 웹소켓 연결 및 구독
  useEffect(() => {
    if (!accessToken) return;

    connectWebSocket(accessToken, () => {
      console.log("WebSocket 연결 완료");

      const subscription = subscribeSong(roomCode, (data) => {
        console.log("메시지 수신됨:", data);
        setSongEvent(data);
        if (data.type === "SUBSCRIBE_COMPLETE") {
          console.log("구독 성공");
        }
      });

      client.__roomSongSubscription = subscription;
    });

    return () => {
      client.__roomSongSubscription?.unsubscribe();
      console.log("노래 구독 해제");
      disconnectWebSocket();
    };
  }, [roomCode]);

  // spotify sdk 연결

  // 자동 재생 정책 우회
  // state 초기화 방지용 fallback
  const fromEnterBtn = location.state?.fromEnterBtn || localStorage.getItem("fromEnterBtn") === "true";

  // SDK 스크립트 로딩 
  useEffect(() => {
    if (window.Spotify) {
      setupPlayer(); // 이미 있으면 바로 실행
      return;
    }
  
    window.onSpotifyWebPlaybackSDKReady = () => {
      setupPlayer(); 
    };
  
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      // clean up
      delete window.onSpotifyWebPlaybackSDKReady;
    };
  }, []);
  
  // 토큰 불러와서 플레이어 인스턴스 만들기 
  const deviceIdRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setupPlayer = async () => {
    const token = await getSpotifyAccessToken();

    const player = new Spotify.Player({
      name: 'MAAVE Web Player ' + Math.random().toString(36).slice(2, 6),
      getOAuthToken: cb => cb(token),
      volume: 0.5
    });

    player.addListener('ready', ({ device_id }) => {
      console.log('✅ Spotify Player Ready with Device ID:', device_id);
      deviceIdRef.current = device_id;
      setIsPlayerReady(true);
    });
    player.addListener('player_state_changed', state => {
      if (!state) return;
      console.log('▶️ 트랙:', state.track_window.current_track.name);
      console.log('⏸ 재생 중인가?:', !state.paused);
    });
    
    player.connect();
    window.spotifyPlayer = player;
  };


  // 페이지 나갈 때 player disconnect 
  useEffect(() => {
    return () => {
      if (window.spotifyPlayer) {
        window.spotifyPlayer.removeListener('ready');
        window.spotifyPlayer.removeListener('player_state_changed');
        window.spotifyPlayer.disconnect();
      }
    };
  }, []);
 

  // 준비되면 재생 
  useEffect(() => {
    if  (!isPlayerReady || !fromEnterBtn|| !currentSong?.spotifyId )  {
      console.log("⛔️ 재생 조건 미충족", { isPlayerReady, currentSong });
      return;
    }
  
    const tryPlay = async () => {
      const token = await getSpotifyAccessToken();
      const seekMs = (currentSong.seekPosition || 0) * 1000;
      const uri = `spotify:track:${currentSong.spotifyId}`;
  
      console.log("🎯 재생 요청:", { uri, seekMs });
  
      const res = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceIdRef.current}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uris: [uri],
          position_ms: seekMs
        })
      });
  
      if (!res.ok) {
        const errText = await res.text();
        console.error("❌ 재생 실패 응답:", res.status, errText);
      } else {
        console.log("🎵 곡 재생 요청 성공");
      }
    };
  
    tryPlay();
  }, [currentSong, isPlayerReady]);
  
  
  return (
    <S.RoomInsidePageContainer>
      <TopBar />
      <S.MainContainer>
        <NowPlaying currentSong={currentSong} />
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
      <S.RoomLeaveBtn
      onClick={() => {
        localStorage.removeItem("fromEnterBtn");
        navigate("/");
      }} >
        방 나가기</S.RoomLeaveBtn>
    </S.RoomInsidePageContainer>
  );
}

export default RoomInsidePage;
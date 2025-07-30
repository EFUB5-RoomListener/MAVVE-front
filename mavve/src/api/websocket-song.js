import client from "./client";

// 웹소켓 노래 주제 구독 
export const subscribeSong = (roomId, onMessageCallback) => {
    if (!client.connected) {
        console.error('[WebSocket] 연결이 안 됨');
        return;
      }    
    // 서버가 브로드캐스트하는 주소에 연결 
    return client.subscribe(
        `/topic/rooms/${roomId}/songs`,
        (message) => {
            try {
              const body = JSON.parse(message.body); // 실제 채팅 메시지 데이터
              onMessageCallback(body); // 프론트에 받은 메시지 데이터 넘겨줌 
            } catch (err) {
              console.error('메시지 파싱 오류:', err);
            }
          }
    )
    
}

// 노래 추가 메시지 전송
export const sendAddSongMessage = (roomId, payload) => {
  if (!client.connected) {
    console.error('[WebSocket] 연결이 안 됨');
    return;
  }

  client.publish({
    destination: `/pub/rooms/${roomId}/add-song`,
    body: JSON.stringify({ song: payload }),
    headers: {}
  });
};

// 노래 삭제 메시지 전송 
export const sendDeleteSongMessage = (roomId, songIds) => {
  if (!client.connected) {
    console.error('[WebSocket] 연결이 안 됨');
    return;
  }

  client.publish({
    destination: `/pub/rooms/${roomId}/delete-song`,
    body: JSON.stringify({
      songIds: songIds, 
    }),
    headers: {}
  });
};


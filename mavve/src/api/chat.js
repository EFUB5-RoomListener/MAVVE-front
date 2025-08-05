import client from "./client";
import axiosInstance from "./axiosInstance";


// 웹소켓 연결 (방 입장 시)
export const connectWebSocket = (accessToken, onConnectCallback) => {
    client.connectHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    client.onConnect = onConnectCallback;
    client.activate(); 
  };

// rest로 기존 채팅 정보 전달받음 
export const fetchOriginChat = async (roomId, lastChatId) => {
  const url = (lastChatId !== undefined && lastChatId !== null)
    ? `/rooms/${roomId}/chats?lastChatId=${lastChatId}`
    : `/rooms/${roomId}/chats`;

  try {
    const response = await axiosInstance.get(url); ;

    const result = response.data?.chats ?? [];
    return result;

  } catch (err) {
    console.error("채팅 불러오기 실패", err);
    return [];
  }
};


// 웹소켓 채팅 관련 주소 구독 
export const subscribeChat = (roomId, onMessageCallback) => {
    if (!client.connected) {
        console.error('[WebSocket] 연결이 안 됨');
        return;
      }    
    // 서버가 브로드캐스트하는 주소에 연결 
    return client.subscribe(
        `/topic/rooms/${roomId}/chats`,
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

// 채팅 메시지 전송 
export const sendChatMessage = (roomId, messageData, accessToken) => {
    if (!client.connected) {
      console.error('[WebSocket] 연결 안 됐는데 보내려 함!');
      return;
    }
  
    client.publish({
      destination: `/pub/rooms/${roomId}/chats`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(messageData),
  });
};
  
// 웹소켓 연결 해제
export const disconnectWebSocket = () => {
    if (client.connected) {
      client.deactivate();
    }
  };
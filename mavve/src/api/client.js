import { Client } from '@stomp/stompjs';

const client = new Client({
  brokerURL: `${import.meta.env.VITE_API_BASE_URL.replace('http', 'ws')}/ws`,
  reconnectDelay: 5000,                  
  debug: function (str) {
    console.log('[WebSocket] Debug:', str);
  },
});


export default client;

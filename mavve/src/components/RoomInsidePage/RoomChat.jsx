import React, {useState, useEffect, useRef} from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import SendIcon from '../../assets/RoomInsidePage/chat-send.svg';
import { useParams } from 'react-router-dom';
import { fetchOriginChat, subscribeChat, sendChatMessage } from '../../api/chat.js';

function RoomChat(){
    const [isComposing, setIsComposing] = useState(false);
    const [chatList, setChatList] = useState([]);

    
    // 기존 채팅 내역 불러오기 
    const { roomCode: roomId } = useParams(); 
    const accessToken = localStorage.getItem("accessToken");
    useEffect(() => {
        const loadInitialChat = async () => {
            try {
                const chatList = await fetchOriginChat(roomId); 
                setChatList(chatList); 
            } catch (e) {
                console.error('초기 채팅 로딩 실패', e);
            }
        };
        if (roomId) loadInitialChat();
    }, [roomId]);


    // 서버에서 보내주는 메시지 구독 
    useEffect(() => {
        const subscription = subscribeChat(roomId, (message) => {
          // 서버에서 메시지 오면 chatList에 추가하는 함수 
          setChatList((prev) => [...prev, message]);
        });
        return () => subscription?.unsubscribe();
      }, [roomId]);

    // 입력한 채팅 메시지 전송 
    const [input, setInput] = useState("");
    const sendInput = () => {
        if (!input.trim()) return;

        const messageData = {
            content: input,
            nickname: "하경", 
            profileImg: "https://i.pinimg.com/736x/34/3d/a8/343da87798e1c6356b47236f21099b63.jpg",
            createdAt: new Date().toISOString(),
        }

        sendChatMessage(roomId, messageData, accessToken);
        setInput("");
    }
      
    
    // 자동 스크롤 구현
    const chatEndRef = useRef(null); // 맨 마지막 메시지를 참조할 ref
    const scrollToBottom = () => {
        if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };
    useEffect(() => {
        scrollToBottom();
    }, [chatList]);    

    return(
        <S.ChatContainer>
            <S.ChatMessageList>
                {chatList.map((chat) => {
                    return(
                    <S.ChatRow key={chat.createdAt}>
                       {chat.profileImg && (
                        <S.UserAvatar src={chat.profileImg} />
                        )}
                        <S.ChatTextInfo>
                            <S.UserNickname>{chat.nickname}</S.UserNickname>
                            <S.ChatText>{chat.content}</S.ChatText>
                        </S.ChatTextInfo>
                    </S.ChatRow>
                    )})}
            <div ref={chatEndRef} /> 
            </S.ChatMessageList>
            <S.ChatInputWrapper>
                <S.SendInput
                 type="text"
                 value={input}
                 placeholder="채팅 입력"
                 onChange={(e) => setInput(e.target.value)}
                 onCompositionStart={() => setIsComposing(true)}
                 onCompositionEnd={() => setIsComposing(false)}
                 onKeyDown={(e) => {
                   if (e.key === "Enter" && !isComposing) {
                     e.preventDefault();
                     sendInput();
                   }
                 }}
                />
                <S.SendBtn src={SendIcon} onClick={sendInput}/>
            </S.ChatInputWrapper>
        </S.ChatContainer>
    );
}

export default RoomChat;
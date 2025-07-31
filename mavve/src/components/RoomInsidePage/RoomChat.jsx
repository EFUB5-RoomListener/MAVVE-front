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
                setTimeout(() => {
                    if (scrollContainerRef.current)
                      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
                  },50); // 스크롤 맨 아래로 
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

    // 무한 스크롤 구현 

   
    const [hasMore, setHasMore] = useState(true);  // 더 불러올 채팅이 있는가
    const [isFetching, setIsFetching] = useState(false); // 더 불러와야 하는지 
    const topRef = useRef(null); // 가장 위 메시지를 감지
    const scrollContainerRef = useRef(null); // 전체 메시지 리스트 영역 

    useEffect(() => {
        if (!topRef.current || !hasMore) return;
      
        const observer = new IntersectionObserver(
          async ([entry]) => {
            if (!entry.isIntersecting || isFetching) return; // ← 콜백 맨 위에 둬

            if (entry.isIntersecting && !isFetching) { // 화면 위쪽에 닿았고, 이전 채팅 불러오는 중이 아니면 
              setIsFetching(true);
      
              const firstChatId = chatList[0]?.chatId;
              const oldScrollHeight = scrollContainerRef.current.scrollHeight; 
      
              try {
                const olderChats = await fetchOriginChat(roomId, firstChatId);// 더 예전 채팅 불러오기 
                    if (olderChats.length < 15) {
                    setHasMore(false);
                  } else {
                    setChatList(prev => {
                        const existingIds = new Set(prev.map(chat => chat.chatId));
                        const uniqueChats = olderChats.filter(chat => !existingIds.has(chat.chatId));
                        return [...uniqueChats, ...prev];
                      }); // 채팅 목록에 추가 
      
                  setTimeout(() => {
                    const newScrollHeight = scrollContainerRef.current.scrollHeight;
                    scrollContainerRef.current.scrollTop = newScrollHeight - oldScrollHeight; // 늘어난 높이만큼 스크롤을 내려줌!! 
                  }, 30); // 스크롤 위치 보정
                  
                  console.log("🔥 불러온 olderChats:", olderChats.map(c => c.createdAt));
            
                }
              } catch (err) {
                console.error("이전 채팅 불러오기 실패", err);
              } finally {
                setIsFetching(false);
              }
            }
          },
          { threshold: 1.0 }
        );
      
        observer.observe(topRef.current);
        return () => observer.disconnect();
      }, [chatList, hasMore]);
   

    return(
        <S.ChatContainer>
            <S.ChatMessageList ref={scrollContainerRef}>
            <div ref={topRef}></div> {/* 가장 위 ref – 무한스크롤 트리거 */}
                {chatList.map((chat) => {
                    return(
                    <S.ChatRow key={chat.chatId}>
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
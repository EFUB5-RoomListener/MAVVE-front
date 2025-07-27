import React, {useState} from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import SendIcon from '../../assets/RoomInsidePage/chat-send.svg';
import mockChatMessages from './mockChatMessages';

function RoomChat(){
    const [chatList, setChatList] = useState(mockChatMessages);
    const [input, setInput] = useState("");
    const sendInput = () => {
        if (!input.trim()) return;

        const newMessage = {
            id: Date.now(),
            nickname: '하경',
            avatar: 'https://i.pinimg.com/736x/34/3d/a8/343da87798e1c6356b47236f21099b63.jpg',
            text: input,
        }

        setChatList(prev => [...prev, newMessage]);
        setInput("");
    }
    return(
        <S.ChatContainer>
            <S.ChatMessageList>
                {chatList.map((chat) => {
                    return(
                    <S.ChatRow key={chat.id}>
                        <S.UserAvatar src={chat.avatar}/>
                        <S.ChatTextInfo>
                            <S.UserNickname>{chat.nickname}</S.UserNickname>
                            <S.ChatText>{chat.text}</S.ChatText>
                        </S.ChatTextInfo>
                    </S.ChatRow>
                    )})}
            </S.ChatMessageList>
            <S.ChatInputWrapper>
                <S.SendInput
                type="text" 
                value={input} 
                placeholder="채팅 입력" 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendInput()
                    };
                  }}
                />
                <S.SendBtn src={SendIcon} onClick={sendInput}/>
            </S.ChatInputWrapper>
        </S.ChatContainer>
    );
}

export default RoomChat;
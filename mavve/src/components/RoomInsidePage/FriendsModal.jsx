import React from "react";
import { mockFriends }from "./mockFriends";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';

function FriendsModal({isChatOpen}) {
    return (
      <S.ModalContainer  $isChatOpen={isChatOpen}>
        {mockFriends.map((friend) => (
          <S.FriendItem key={friend.id}>
            <S.Avatar src={friend.avatar}/>
            <S.Name>{friend.name}</S.Name>
          </S.FriendItem>
        ))}
      </S.ModalContainer>
    );
  }
  
  export default FriendsModal;
  
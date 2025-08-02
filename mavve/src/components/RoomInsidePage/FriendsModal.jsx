import React, {useState,useEffect} from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import { getRoomUsers } from "../../api/room";

function FriendsModal({$isChatOpen, roomCode}) {
    const [friends, setFriends] = useState([]);


    useEffect(() => {
      const fetchUsers = async () => {
        const users = await getRoomUsers(roomCode);
        setFriends(users);
      };
    
      if (roomCode) fetchUsers();
    }, [roomCode]);
    

    return (
      <S.ModalContainer  $isChatOpen={$isChatOpen}>
        {friends.map((friend) => (
          <S.FriendItem key={friend.nickname}>
            <S.Avatar src={friend.profileImg}/>
            <S.Name>{friend.nickname}</S.Name>
          </S.FriendItem>
        ))}
      </S.ModalContainer>
    );
  }
  
  export default FriendsModal;
  
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Common/RoomComponent.style";
import filled from "../../assets/Common/filled_heart.svg";
import unfilled from "../../assets/Common/unfilled_heart.svg";
import { toggleRoomLike } from "../../api/room";

export default function RoomComponent({ data, onLikeToggle }) {
  const navigate = useNavigate();

  const handleToggleLike = async (e) => {
    e.stopPropagation();
    try {
      const response = await toggleRoomLike(data.roomId);
      onLikeToggle({
        roomId: data.roomId,
        liked: response.liked,
        likeCount: response.likeCount,
      });
    } catch (error) {
      console.error("좋아요 API 호출 실패: ", error);
      alert("좋아요 처리 중 오류가 발생했습니다.");
    }
  };

  const handleRoomClick = () => {
    // roomId가 존재하는 경우에만 이동
    if (data.roomId) {
      navigate(`/rooms/${data.roomId}/enter`);
    } else {
      alert("방 코드가 존재하지 않습니다.");
    }
  };

  return (
    <S.RoomContainer onClick={handleRoomClick}>
      <S.Thumbnail $image={data.imageURL}>
        {Array.isArray(data.tag) && data.tag.length > 0 && (
          <S.HashtagWrapper>
            <S.Hashtag>#{data.tag[0]}</S.Hashtag>{" "}
            {/* 썸네일에는 첫 번째 태그만 표시*/}
          </S.HashtagWrapper>
        )}
      </S.Thumbnail>
      <S.Info>
        <S.InfoText>
          <S.InfoTitle>{data.roomName}</S.InfoTitle>
          <S.InfoTime></S.InfoTime>
        </S.InfoText>
        <S.Liked>
          <S.HeartIcon onClick={handleToggleLike}>
            <img src={data.liked ? filled : unfilled} alt="heart" />
          </S.HeartIcon>
          <S.LikedNum>{data.likeCount}</S.LikedNum>
        </S.Liked>
      </S.Info>
    </S.RoomContainer>
  );
}

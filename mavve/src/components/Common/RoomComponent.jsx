import React, { useState } from "react";
import * as S from "../Common/RoomComponent.style";
import filled from "../../assets/Common/filled_heart.svg";
import unfilled from "../../assets/Common/unfilled_heart.svg";

export default function RoomComponent({ data }) {
  const [liked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <S.RoomContainer>
      <S.Thumbnail $image={data.imageURL}>
        {Array.isArray(data.tag) && data.tag.length > 0 && (
          <S.HashtagWrapper>
            <S.Hashtag>#{data.tag[0]}</S.Hashtag> {/* ✅ 첫 번째 태그만 */}
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
            <img src={liked ? filled : unfilled} alt="heart" />
          </S.HeartIcon>
          <S.LikedNum>{data.likeCount}</S.LikedNum>
        </S.Liked>
      </S.Info>
    </S.RoomContainer>
  );
}

//

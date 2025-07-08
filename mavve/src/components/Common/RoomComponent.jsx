import React, { useState } from 'react'
import * as S from '../Common/RoomComponent.style'
import filled from '../../assets/Common/filled_heart.svg'
import unfilled from '../../assets/Common/unfilled_heart.svg'

export default function RoomComponent() {
    const [liked, setLiked] = useState(false);

    const handleToggleLike = () => {
        setLiked((prev) => !prev);
    };

    return (
        <S.RoomContainer>
            <S.Thumbnail>
                <S.Hashtag>#신나는</S.Hashtag>
            </S.Thumbnail>
            <S.Info>
                <S.InfoText>
                    <S.InfoTitle>방제목</S.InfoTitle>
                    <S.InfoTime>01:24:34</S.InfoTime>
                </S.InfoText>
                <S.Liked>
                    <S.HeartIcon onClick={handleToggleLike}>
                        <img src={liked ? filled : unfilled} alt="heart" />
                    </S.HeartIcon>
                    <S.LikedNum>300</S.LikedNum>
                </S.Liked>
            </S.Info>
        </S.RoomContainer>
    )
}

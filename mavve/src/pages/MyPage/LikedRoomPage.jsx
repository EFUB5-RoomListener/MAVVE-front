import React, { useState } from "react";
import * as S from "./MyPage.style";

export default function LikedRoomPage() {
  return (
    <S.Container>
      <S.Header></S.Header>
      <S.MainContainer>
        <S.Sidebar />
        <S.Main>
          <S.ViewArea>
            <S.Title>내가 좋아하는 방</S.Title>
          </S.ViewArea>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}

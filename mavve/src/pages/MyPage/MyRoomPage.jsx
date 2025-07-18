import React, { useState } from "react";
import * as S from "./MyPage.style";

export default function MyPage() {
  return (
    <S.Container>
      <S.Header></S.Header>
      <S.MainContainer>
        <S.Sidebar />
        <S.Main>
          <S.ViewArea>
            <S.Title>내가 만든 방</S.Title>
          </S.ViewArea>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}

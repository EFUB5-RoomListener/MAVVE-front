import React from 'react'
import * as S from '../MainPage/Diaries.style'
import OneLineNote from '../Common/OneLineNote'

export default function Diaries() {
  return (
    <S.Container>
        <S.Title>친구들? 한줄 일기</S.Title>
        <S.Diaries>
            {Array.from({ length: 6 }).map(() => (
                <OneLineNote />
            ))}
        </S.Diaries>
    </S.Container>
  )
import React, { useState, useEffect } from 'react'
import * as S from '../MainPage/Diaries.style'
import OneLineNote from '../Common/OneLineNote'
import { getDiaries } from '../../api/diary';

export default function Diaries() {
  const [diaries, setDiaries] = useState([]);
  const hasDiaries = diaries.length > 0;

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await getDiaries();
        setDiaries(response.diaryList.slice(0, 6));
      } catch (error) {
        console.error('일기 불러오기 실패:', error);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <S.Container>
      <S.Title>MAVVER 한줄 일기</S.Title>
      {!hasDiaries ? (
        <S.Empty>
          <S.EmptyText1>아직 친구가 없어요!</S.EmptyText1>
          <S.EmptyText2>친구를 추가하면, 친구들이 오늘 남긴 한줄일기를 여기서 확인할 수 있어요.
            <br />작은 한마디로 서로의 하루를 함께 느껴보세요.
          </S.EmptyText2>
        </S.Empty>
      ) : (
        <S.Diaries>
          {diaries.map((diary) => (
            <OneLineNote
              key={diary.diaryId}
              profileImg={''} // 프로필 URL이 응답에 없으므로 null 전달
              noteData={{
                emojiUrl: diary.emojiUrl,
                comment: diary.comment,
                songTitle: diary.songTitle,
                songArtist: diary.songArtist.join(', '),
                songImageUrl: diary.songImage,
                duration: diary.songDuration,
                roomTitle: diary.album,
                hashtag: diary.nickname,
              }}
            />
          ))}
        </S.Diaries>
      )}
    </S.Container>
  );
}

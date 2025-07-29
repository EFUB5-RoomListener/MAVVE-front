import React from "react";
import * as S from "../MainPage/Diaries.style";
import OneLineNote from "../Common/OneLineNote";

//임시
import defaultProfile from "../../assets/Common/defaultProfile.svg";

export default function Diaries() {
  //임시 더미데이터
  const dummyData = [
    {
      diaryId: 1,
      emojiUrl: "",
      nickname: "첫번째 유저",
      comment: "오늘 하루도 힘내자!",
      songTitle: "Everlong",
      songArtist: "Foo Fighters",
      songDuration: "04:10",
      songImage: "", // 일부러 비워둬도 됨
      album: "앨범이름",
      createdAt: "2022-11-20T08:02:21.347+0000",
    },
    {
      diaryId: 2,
      emojiUrl: "",
      comment: "",
      songTitle: "",
      songArtist: "",
      songDuration: "",
      songImage: "",
      album: "앨범이름",
      createdAt: "2022-11-20T08:02:21.347+0000",
    },
  ];

  //임시 수정 코드(오류 해결용..)
  return (
    <S.Container>
      <S.Title>친구들? 한줄 일기</S.Title>
      <S.Diaries>
        {dummyData.map((data, idx) => (
          <OneLineNote
            key={idx}
            profileImg={defaultProfile}
            noteData={data}
            // onEditClick은 넘기지 않아야함 → 메인페이지 일기는 읽기 전용 모드
          />
        ))}
      </S.Diaries>
    </S.Container>
  );

  //기존 코드 입니다 ^^
  //
  // return (
  //   <S.Container>
  //     <S.Title>친구들? 한줄 일기</S.Title>
  //     <S.Diaries>
  //       {Array.from({ length: 6 }).map(() => (
  //         <OneLineNote />
  //       ))}
  //     </S.Diaries>
  //   </S.Container>
  // );
}

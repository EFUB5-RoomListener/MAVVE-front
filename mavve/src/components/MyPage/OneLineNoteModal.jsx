import React, { useState } from "react";
import * as S from "./OneLineNoteModal.style";
import XIcon from "../../assets/MyPage/xIcon.svg";
import MusicSelectModal from "./MusicSelectModal";
import EmojiSelectModal from "./EmojiSelectModal";
import EmojiIcon from "../../assets/MyPage/EmojiIcon.svg";
import MusicIcon from "../../assets/MyPage/MusicIcon.svg";

export default function OneLineNoteModal({ onClose, noteData, setNoteData }) {
  const [comment, setComment] = useState(noteData?.comment || "");
  const [isFocused, setIsFocused] = useState(false);
  const [showEmojiSelectModal, setShowEmojiSelectModal] = useState(false);
  const [showMusicSelectModal, setShowMusicSelectModal] = useState(false);

  const isOverLimit = comment.length > 100;
  const isEdit = noteData?.comment?.length > 0;
  const colorState =
    !isOverLimit && !isFocused ? "g4" : isOverLimit ? "red" : "b";

  const handleSave = () => {
    if (isOverLimit) return;
    setNoteData((prev) => ({ ...prev, comment: comment }));
    onClose();
  };

  return (
    <S.OneLineNoteModalBackground>
      <S.OneLineNoteModalBox>
        <S.OneLineNoteHeader>
          오늘의 한 줄 일기
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.OneLineNoteHeader>
        <S.BtnWrapper>
          <S.SelectBtn onClick={() => setShowMusicSelectModal(true)}>
            <S.MusicIcon src={MusicIcon} alt="음악 선택 버튼" />
          </S.SelectBtn>
          <S.SelectBtn onClick={() => setShowEmojiSelectModal(true)}>
            <S.EmojiIcon src={EmojiIcon} alt="이모지 선택 버튼" />
          </S.SelectBtn>
        </S.BtnWrapper>
        <S.TextareaWrapper>
          <S.Textarea
            placeholder={
              isFocused
                ? ""
                : "오늘 나의 하루는 어땠나요? 이모티콘과 함께 기록해 보아요! :)"
            }
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            $isFocused={isFocused}
          />
          <S.CharacterCount>
            <S.CurrentCount $colorState={colorState}>
              {comment.length}
            </S.CurrentCount>
            <S.TotalCount $isFocused={isFocused}>/100</S.TotalCount>
          </S.CharacterCount>
        </S.TextareaWrapper>
        <S.SaveBtn
          onClick={handleSave}
          disabled={isOverLimit}
          $isDisabled={isOverLimit}
        >
          {isEdit ? "수정하기" : "저장하기"}
        </S.SaveBtn>
      </S.OneLineNoteModalBox>
      {showEmojiSelectModal && (
        <EmojiSelectModal
          onClose={() => setShowEmojiSelectModal(false)}
          noteData={noteData}
          setNoteData={setNoteData}
        />
      )}
      {showMusicSelectModal && (
        <MusicSelectModal
          onClose={() => setShowMusicSelectModal(false)}
          noteData={noteData}
          setNoteData={setNoteData}
        />
      )}
    </S.OneLineNoteModalBackground>
  );
}

//

import React, { useState } from "react";
import * as S from "./EmojiSelectModal.style";
import XIcon from "../../assets/MyPage/xIcon.svg";
import Emoji1_1 from "../../assets/MyPage/Emoji1_1.svg";
import Emoji1_2 from "../../assets/MyPage/Emoji1_2.svg";
import Emoji1_3 from "../../assets/MyPage/Emoji1_3.svg";
import Emoji1_4 from "../../assets/MyPage/Emoji1_4.svg";
import Emoji1_5 from "../../assets/MyPage/Emoji1_5.svg";
import Emoji2_1 from "../../assets/MyPage/Emoji2_1.svg";
import Emoji2_2 from "../../assets/MyPage/Emoji2_2.svg";
import Emoji2_3 from "../../assets/MyPage/Emoji2_3.svg";
import Emoji2_4 from "../../assets/MyPage/Emoji2_4.svg";
import Emoji2_5 from "../../assets/MyPage/Emoji2_5.svg";
import Emoji3_1 from "../../assets/MyPage/Emoji3_1.svg";
import Emoji3_2 from "../../assets/MyPage/Emoji3_2.svg";
import Emoji3_3 from "../../assets/MyPage/Emoji3_3.svg";
import Emoji3_4 from "../../assets/MyPage/Emoji3_4.svg";
import Emoji3_5 from "../../assets/MyPage/Emoji3_5.svg";

const emojis = [
  Emoji1_1,
  Emoji1_2,
  Emoji1_3,
  Emoji1_4,
  Emoji1_5,
  Emoji2_1,
  Emoji2_2,
  Emoji2_3,
  Emoji2_4,
  Emoji2_5,
  Emoji3_1,
  Emoji3_2,
  Emoji3_3,
  Emoji3_4,
  Emoji3_5,
];

export default function EmojiSelectModal({ onClose, noteData, setNoteData }) {
  const [selectedEmoji, setSelectedEmoji] = useState(noteData?.emojiUrl || "");

  const handleSave = () => {
    if (!selectedEmoji) return;
    setNoteData((prev) => ({ ...prev, emojiUrl: selectedEmoji }));
    onClose();
  };

  return (
    <S.EmojiSelectModalBackground>
      <S.EmojiSelectModalBox>
        <S.EmojiSelectHeader>
          오늘의 이모티콘
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.EmojiSelectHeader>
        <S.EmojiList>
          {emojis.map((emoji, idx) => (
            <S.EmojiItem
              key={idx}
              $active={selectedEmoji === emoji}
              onClick={() => setSelectedEmoji(emoji)}
            >
              <img src={emoji} alt={`emoji-${idx + 1}`} />
            </S.EmojiItem>
          ))}
        </S.EmojiList>

        <S.SaveBtn disabled={!selectedEmoji} onClick={handleSave}>
          선택하기
        </S.SaveBtn>
      </S.EmojiSelectModalBox>
    </S.EmojiSelectModalBackground>
  );
}

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
  { emojiId: 1, emojiUrl: Emoji1_1 },
  { emojiId: 2, emojiUrl: Emoji1_2 },
  { emojiId: 3, emojiUrl: Emoji1_3 },
  { emojiId: 4, emojiUrl: Emoji1_4 },
  { emojiId: 5, emojiUrl: Emoji1_5 },
  { emojiId: 6, emojiUrl: Emoji2_1 },
  { emojiId: 7, emojiUrl: Emoji2_2 },
  { emojiId: 8, emojiUrl: Emoji2_3 },
  { emojiId: 9, emojiUrl: Emoji2_4 },
  { emojiId: 10, emojiUrl: Emoji2_5 },
  { emojiId: 11, emojiUrl: Emoji3_1 },
  { emojiId: 12, emojiUrl: Emoji3_2 },
  { emojiId: 13, emojiUrl: Emoji3_3 },
  { emojiId: 14, emojiUrl: Emoji3_4 },
  { emojiId: 15, emojiUrl: Emoji3_5 },
];

export default function EmojiSelectModal({ onClose, noteData, setNoteData }) {
  const [selectedEmoji, setSelectedEmoji] = useState(
    emojis.find((emoji) => emoji.emojiUrl === noteData?.emojiUrl) || null
  );
  const handleSave = () => {
    if (!selectedEmoji) return;
    setNoteData((prev) => ({
      ...prev,
      emojiId: selectedEmoji.emojiId,
      emojiUrl: selectedEmoji.emojiUrl,
    }));
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
          {emojis.map((emoji) => (
            <S.EmojiItem
              key={emoji.emojiId}
              $active={selectedEmoji?.emojiId === emoji.emojiId}
              onClick={() => setSelectedEmoji(emoji)}
            >
              <img src={emoji.emojiUrl} alt={`emoji-${emoji.emojiId}`} />
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

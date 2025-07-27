import React, { useRef, useState } from "react";
import * as S from "./ProfileEditModal.style";
import ImgUploadIcon from "../../assets/MyPage/imgUploadIcon.svg";
import XIcon from "../../assets/MyPage/xIcon.svg";

export default function ProfileEditModal({
  user,
  nameInput,
  setNameInput,
  setUser,
  onClose,
  onImageUpload,
}) {
  const fileInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const isOverLimit = nameInput.length > 10;
  const colorState =
    !isOverLimit && !isFocused ? "g4" : isOverLimit ? "red" : "b";

  const handleSave = () => {
    if (isOverLimit) return;
    setUser((prev) => ({ ...prev, name: nameInput }));
    onClose();
  };

  return (
    <S.ProfileEditBackground onClick={onClose}>
      <S.ProfileEditBox onClick={(e) => e.stopPropagation()}>
        <S.ProfileEditHeader>
          프로필 편집
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.ProfileEditHeader>
        <S.ProfileEditArea>
          <S.ProfileImgContainer>
            <S.ProfileImgEdit onClick={() => fileInputRef.current?.click()}>
              {user.profileImg ? (
                <img src={user.profileImg} alt="프로필 이미지" />
              ) : (
                <img
                  src={ImgUploadIcon}
                  alt="업로드 아이콘"
                  style={{ width: "3rem", height: "3rem" }}
                />
              )}
            </S.ProfileImgEdit>
            <input
              type="file"
              id="profileImgInput"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onImageUpload}
            />
          </S.ProfileImgContainer>
          <S.ProfileNameEditArea>
            <S.ProfileNameEdit>
              이름
              <S.ProfileNameEditInput
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                $isFocused={isFocused}
              />
              <S.CharacterCount>
                <S.CurrentCount $colorState={colorState}>
                  {nameInput.length}
                </S.CurrentCount>
                <S.TotalCount $isFocused={isFocused}>/10</S.TotalCount>
              </S.CharacterCount>
            </S.ProfileNameEdit>
            <S.SaveBtn onClick={handleSave} disabled={isOverLimit}>
              저장하기
            </S.SaveBtn>
          </S.ProfileNameEditArea>
        </S.ProfileEditArea>
      </S.ProfileEditBox>
    </S.ProfileEditBackground>
  );
}

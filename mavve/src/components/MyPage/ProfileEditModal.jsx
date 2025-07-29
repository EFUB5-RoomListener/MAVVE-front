import React, { useRef, useState } from "react";
import * as S from "./ProfileEditModal.style";
import ImgUploadIcon from "../../assets/MyPage/imgUploadIcon.svg";
import XIcon from "../../assets/MyPage/xIcon.svg";
import DefaultProfile from "../../assets/Common/defaultProfile.svg";

import { updateUserInfo } from "../../api/user";
import { deleteImage } from "../../api/image";

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

  const handleSave = async () => {
    if (isOverLimit) return;

    try {
      console.log("현재 유저 프로필:", user.profile);
      const updatedUser = await updateUserInfo({
        nickname: nameInput,
        profile: user.profile || "",
      });

      setUser(updatedUser);
      onClose();
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  const handleImageDelete = async () => {
    try {
      await deleteImage(user.profile);
      setUser((prev) => ({ ...prev, profile: "" })); // 기본 이미지로 변경
    } catch (error) {
      alert("이미지 삭제에 실패했습니다.");
    }
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
              {user.profile ? (
                <img src={user.profile} alt="프로필 이미지" />
              ) : (
                <img
                  src={ImgUploadIcon}
                  alt="업로드 아이콘"
                  style={{ width: "3rem", height: "3rem" }}
                />
              )}
            </S.ProfileImgEdit>
            {user.profile && (
              <S.DeleteImgButton onClick={handleImageDelete}>
                <img src={XIcon} alt="삭제" />
              </S.DeleteImgButton>
            )}

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

//

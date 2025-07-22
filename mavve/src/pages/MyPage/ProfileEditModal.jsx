import React, { useRef } from "react";
import * as S from "./MyPage.style";
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

  return (
    <S.ProfileEditBackground onClick={onClose}>
      <S.ProfileEditBox onClick={(e) => e.stopPropagation()}>
        <S.ProfileEditHeader>
          프로필 편집
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.ProfileEditHeader>
        <S.ProfileEditArea>
          <S.ProfileImgContainer>
            <S.ProfileImgEdit>
              <label htmlFor="profileImgInput">
                {user.profileImg ? (
                  <img src={user.profileImg} alt="프로필 이미지" />
                ) : (
                  <img
                    src={ImgUploadIcon}
                    alt="업로드 아이콘"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                )}
              </label>
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
            <S.ProfileNameEditInputs>
              이름
              <input
                type="text"
                value={nameInput}
                maxLength={10}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </S.ProfileNameEditInputs>
            <S.SaveButton
              onClick={() => {
                setUser((prev) => ({ ...prev, name: nameInput }));
                onClose();
              }}
            >
              저장하기
            </S.SaveButton>
          </S.ProfileNameEditArea>
        </S.ProfileEditArea>
      </S.ProfileEditBox>
    </S.ProfileEditBackground>
  );
}

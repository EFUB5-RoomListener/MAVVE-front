import React, { useState, useEffect } from "react";
import * as S from "../Common/OneLineNote.style";
import emotion from "../../assets/Common/emotion.svg";
import defaultProfile from "../../assets/Common/defaultProfile.svg";
import defaultSongImage from "../../assets/Common/defaultSongImage.svg";
import cdOverlayImg from "../../assets/Common/cdOverlay.svg";
import EditIcon from "../../assets/Common/icn_edit.svg";

export default function OneLineNote({ profileImg, noteData, onEditClick }) {
  const isEditMode = !!noteData?.emojiUrl;

  return (
    <S.DiaryContainer>
      <S.Note>
        <S.NoteContent
          $empty={!noteData?.comment}
          onClick={onEditClick && isEditMode ? onEditClick : undefined}
          $clickable={!!onEditClick && isEditMode}
        >
          <S.UserProfile src={profileImg || defaultProfile} alt="유저 프로필" />
          <S.NoteText $empty={!noteData?.comment}>
            {noteData?.comment ? (
              noteData.comment
            ) : (
              <S.NotePlaceholder>
                오늘 나의 하루는 어땠나요? 이모티콘과 함께 기록해 보아요! :)
              </S.NotePlaceholder>
            )}
          </S.NoteText>
          {onEditClick ? (
            <S.EmotionEdit onClick={onEditClick}>
              {noteData?.emojiUrl ? (
                <S.Emoji src={noteData.emojiUrl} alt="이모지" />
              ) : (
                <S.EditIcon src={EditIcon} alt="편집 아이콘" />
              )}
            </S.EmotionEdit>
          ) : noteData?.emojiUrl ? (
            <S.EmotionEdit>
              <S.Emoji src={noteData.emojiUrl} alt="이모지" />
            </S.EmotionEdit>
          ) : null}
        </S.NoteContent>
      </S.Note>
      <S.Song>
        <S.AlbumCover src={noteData.songImageUrl || defaultSongImage} />
        <S.CdOverlay src={cdOverlayImg} alt="cd 오버레이" />
        <S.SongContent $empty={!noteData.songTitle}>
          {noteData.songTitle ? (
            <>
              <S.SongText>{noteData.songArtist}</S.SongText>
              <S.SongText>{noteData.songTitle}</S.SongText>
              <S.SongText>{noteData.duration}</S.SongText>
            </>
          ) : (
            <S.SongPlaceholder>오늘의 노래는 무엇인가요?</S.SongPlaceholder>
          )}
        </S.SongContent>
      </S.Song>
      <S.Room>
        <S.RoomCover>
          <S.RoomThumbnail />
        </S.RoomCover>
        <S.RoomInfo>
          <S.RoomText $empty={!noteData?.roomTitle}>
            {noteData?.roomTitle || "방 제목"}
          </S.RoomText>
          <S.Hashtag $empty={!noteData?.hashtag}>
            #{noteData?.hashtag || "해시태그"}
          </S.Hashtag>
        </S.RoomInfo>
      </S.Room>
    </S.DiaryContainer>
  );
}

//

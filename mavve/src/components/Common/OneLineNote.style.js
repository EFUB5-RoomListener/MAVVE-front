import styled from "styled-components";

export const DiaryContainer = styled.div`
  display: flex;
  width: 87.5rem;
  height: 6.75rem;
  gap: 1.5rem;
  padding-bottom: 0.37rem;

  font-style: normal;
`;

export const Note = styled.div`
  width: 46.5rem;
  height: 6.375rem;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const NoteContent = styled.div`
  width: 46.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background: var(--w);
  padding: 1.31rem 2.87rem 1.31rem 8.94rem;
  box-sizing: border-box;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
`;

export const NoteText = styled.div`
  display: -webkit-box;
  width: 30.9375rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #3c3e44;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;
`;

export const NotePlaceholder = styled.div`
  display: -webkit-box;
  width: 30.9375rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--g4);
  text-overflow: ellipsis;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const EmotionEdit = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  box-sizing: border-box;
`;

export const EditIcon = styled.img`
  cursor: pointer;
`;

export const Emoji = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
`;

export const UserProfile = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  aspect-ratio: 1/1;
  position: absolute;
  top: 0rem;
  left: 1.5rem;
  border-radius: 50px;
  background: lightgray;
  border: 0.38rem solid #e3f5ff;
`;

export const Song = styled.div`
  width: 27.5625rem;
  height: 6.375rem;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const SongContent = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  border-radius: 16px;
  background: var(--w);
  padding: 1rem 3rem 1rem 9.44rem;
  box-sizing: border-box;
`;

export const SongText = styled.div`
  display: -webkit-box;
  width: 3.5rem;
  height: 2rem;
  align-content: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #3c3e44;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;
`;

export const SongPlaceholder = styled.div`
  display: -webkit-box;
  width: 15.5rem;
  height: 1.5rem;
  align-content: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--g4);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const AlbumCover = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  aspect-ratio: 1/1;
  position: absolute;
  top: 0rem;
  left: 1.5rem;
  border-radius: 50px;
  background: lightgray;
  border: 0.38rem solid #e3f5ff;
`;

export const CdOverlay = styled.img`
  position: absolute;
  top: 30%;
  left: 12.5%;
  width: 1.375rem;
  height: 1.375rem;
`;

export const Room = styled.div`
  width: 10.4375rem;
  height: 6.375rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const RoomCover = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 16px;
  border: 0.5px solid #3c3e44;
  background: var(--w);
`;

export const RoomThumbnail = styled.div`
  width: 4.5rem;
  height: 3.6875rem;
  border-radius: 16px;
  border: 0.5px solid #3c3e44;
  background: lightgray;
`;

export const RoomInfo = styled.div`
  display: flex;
  height: 5.75rem;
  padding-top: 1.12rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  gap: 0.63rem;

  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: var(--b);
`;

export const RoomText = styled.div`
  display: -webkit-box;
  width: 3.9375rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
`;

export const Hashtag = styled.div`
  width: 4.2rem;
  font-size: 0.875rem;
`;

import React, { useState } from "react";
import * as S from './RoomPage.style';
import mockPlayLists from "./playlistMockData";
import ClockIcon from '../../assets/RoomPage/clock.svg';
import MoreIcon from '../../assets//RoomPage/mypage_after_btn_more.svg';
import DeleteIcon from '../../assets/RoomPage/trash-02.svg';

function ConfirmedPlaylistView({ selectedLists, setStep, mode, setSelectedLists }) {
  const selectedPlaylists = mockPlayLists.filter(p =>
    selectedLists.includes(p.id.toString())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const openModal = (id) => {
    setTargetId(id.toString());
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTargetId(null);
  };

  const handleDelete = (id) => {
    const idStr = id.toString();
    setSelectedLists(prev => prev.filter(pid => pid !== idStr));
    closeModal();
  };

  return (
    <>
      <S.TableWrapper>
        <S.TableHeader>
          <S.IndexColumn>#</S.IndexColumn>
          <S.TitleColumn>플레이리스트 제목</S.TitleColumn>
          <S.TagTopColumn>해시태그</S.TagTopColumn>
          <S.CountColumn>곡 수</S.CountColumn>
          <S.TimeColumn><img src={ClockIcon} /></S.TimeColumn>
          {mode === "done" && <S.DeleteColumn />}
        </S.TableHeader>

        <S.TableBorder />

        {selectedPlaylists.map((item, index) => (
          <S.TableRow
            key={item.id}
            selected={targetId === item.id.toString()}
          >
            <S.IndexColumn>{index + 1}</S.IndexColumn>

            <S.TitleColumn>
              <S.ThumbnailCell src={item.thumbnail} alt="썸네일" />
              <S.TitleTextCell>{item.title}</S.TitleTextCell>
            </S.TitleColumn>

            <S.TagContainer>
              <S.TagColumn selected={targetId === item.id.toString()}>
                #{item.tags[0]}
              </S.TagColumn>
            </S.TagContainer>

            <S.CountColumn>총 {item.songCount}곡</S.CountColumn>
            <S.TimeColumn>{item.totalDuration}</S.TimeColumn>

            {mode === "done" && (
              <S.DeleteColumn onClick={() => openModal(item.id)}>
                <img src={MoreIcon} />
              </S.DeleteColumn>
            )}
          </S.TableRow>
        ))}
      </S.TableWrapper>

      {isModalOpen && (
        <S.DeleteWrapper onClick={closeModal}>
          <S.DeleteContent onClick={(e) => e.stopPropagation()}>
            <img src={DeleteIcon} />
            <S.DeleteText onClick={() => handleDelete(targetId)}>
              선택된 플레이리스트 삭제하기
            </S.DeleteText>
          </S.DeleteContent>
        </S.DeleteWrapper>
      )}

      {setStep && (
        <S.CreateRoomButton onClick={() => setStep("done")}>
          방 생성하기
        </S.CreateRoomButton>
      )}
    </>
  );
}

export default ConfirmedPlaylistView;

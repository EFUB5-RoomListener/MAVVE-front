import React, { useState,  } from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import { mockPlayList } from "./mockPlayList";
import CheckBox from '../../assets/RoomInsidePage/play_frame_music.svg';
import Check from '../../assets/RoomInsidePage/check-01.svg';
import FriendsModal from './FriendsModal';
import SongAddModal from "./SongAddModal";
import Chat from '../../assets/RoomInsidePage/roomin_icn_chat.svg';

function RoomPlayList({isChatOpen, setIsChatOpen}) {
  // 수정 모드 전환 
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };
  // 삭제 시 선택된 곡 목록 
  const [selectedSongs, setSelectedSongs] = useState([]);
  const toggleSelect = (id) => {
    setSelectedSongs((prev) =>
      prev.includes(id.toString())
        ? prev.filter(i => i !== id.toString())
        : [...prev, id.toString()]
    );
  };
  // 곡 삭제를 위해 mockPlayList를 상태로 만들자
  const [playList, setPlayList] = useState(mockPlayList);
  // 삭제 토스트 모달 상태 
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [deletedCount, setDeletedCount] = useState(0); // 삭제 함수 밖에서도 접근 가능하게 
  // 곡 삭제 함수 
  const onDelete = () => {
    const count = selectedSongs.length;
    setDeletedCount(count); 

    const updatedList = playList.filter(song => !selectedSongs.includes(song.id.toString()));
    setPlayList(updatedList);
    setSelectedSongs([]); // 선택 초기화

    setIsToastVisible(true);

    // 2.5초 뒤에 알림 자동 닫힘
    setTimeout(() => {
      setIsToastVisible(false);
    }, 1500);
  }
  

  // 친구 목록 버튼 보이는 상태
  const [isActive, setIsActive] = useState(false);
  const toggleStyle = () => setIsActive(prev => !prev); 


  // 총 시간 계산 
  // 재생시간 초로 변환 
  function timeStringToSeconds(timeStr){
    const [min, sec] = timeStr.split(":").map(Number); // : 기준으로 나눠서 배열 만든 후 숫자로 바꿔줌 
    return min * 60 + sec; 
  }
  // 다시 포맷 변환
  function formatSeconds(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}분 ${sec}초`;
  }
  // 총 시간!! 
  const totalDuration = formatSeconds(
    playList.reduce(
      (acc, song) => acc + timeStringToSeconds(song.duration),
      0
    )
  );
  // 노래 추가 모달 
  const [isModalOpen, setIsModalOpen] = useState(false);
  // props로 내려줄 노래 추가 함수 
  const handleAddSongs = (newSongs) => {
    const existingIds = new Set(playList.map(song => song.id));
    const filteredNewSongs = newSongs.filter(song => !existingIds.has(song.id));
  
    if (filteredNewSongs.length > 0) {
      setPlayList(prev => [...prev, ...filteredNewSongs]);
      setAddedCount(filteredNewSongs.length);
      setIsAddToastVisible(true);
  
      setTimeout(() => {
        setIsAddToastVisible(false);
      }, 1500);
    }
  };
  
  // 노래 추가 토스트 모달 
  const [isAddToastVisible, setIsAddToastVisible] = useState(false);
  const [addedCount, setAddedCount] = useState(0);
  
  return (
    <>
    <S.PlayListAllContainer>
      <S.PlayListHeader>
        <S.PlayListTitle>방 제목</S.PlayListTitle>
        <S.EditButton onClick={toggleEditMode}>
          {isEditMode ? '수정 완료' : '플레이리스트 수정'}
        </S.EditButton>

        <S.ChatToggleBtn $isChatOpen={isChatOpen} onClick={() => setIsChatOpen((prev) => !prev)}>
           <img src={Chat}/> 채팅
        </S.ChatToggleBtn>
      </S.PlayListHeader>

      <S.PlayListInfo>
        <span>{playList.length}곡, {totalDuration}</span>
        <S.FriendsBtn $isActive={isActive} onClick={toggleStyle}>
          참여중인 친구들
        </S.FriendsBtn>
      </S.PlayListInfo>
      
        {isActive && <FriendsModal  $isChatOpen={isChatOpen} />}

        {!isEditMode && <S.CurrentPlayingBar $isShrinked={isChatOpen}/>}
      
      {isEditMode && (
        <>
          <S.SongAddBtn onClick={() => setIsModalOpen(true)} $isChatOpen={isChatOpen}>노래 추가</S.SongAddBtn>
          <S.SongDeleteBtn onClick={onDelete} $isChatOpen={isChatOpen}>선택한 노래 삭제하기</S.SongDeleteBtn>
        </>
      )}

      <S.MusicListContainer $isShrinked={isChatOpen}>
        {playList.map((song) => {
          const isSelected = selectedSongs.includes(song.id.toString());

          return (
            <S.SongRow key={song.id} $isSelected={isSelected} $isShrinked={isChatOpen}>
              {isEditMode ? (
                <S.CheckboxWrapper onClick={() => toggleSelect(song.id)} isSelected={isSelected}>
                  <S.CheckBoxIcon src={CheckBox} />
                  {isSelected && <S.CheckIcon src={Check} />}
                </S.CheckboxWrapper>
              ) : (
                <div style={{ width: '1rem', height: '1rem' }} />  // 공간 고정용
              )}

              <S.CDWrapper>
                <S.CDThumbnail src={song.thumbnail} alt={song.title} />
                <S.CDDot />
              </S.CDWrapper>

              <S.SongTextInfo>
                <div>{song.title}</div>
                <div>{song.artist}</div>
              </S.SongTextInfo>
              <S.SongAlbum $isChatOpen={isChatOpen}>{song.album}</S.SongAlbum>
              <S.SongDuration>{song.duration}</S.SongDuration>
            </S.SongRow>
          );
        })}
      {isToastVisible && (
        <S.Toast>
          선택하신 {deletedCount}곡의 노래가 삭제되었습니다.
        </S.Toast>
      )}

      {isAddToastVisible && (
        <S.Toast>
          (방 제목)에 {addedCount}곡이 추가되었습니다.
        </S.Toast>
      )}
      </S.MusicListContainer>
    </S.PlayListAllContainer>
      
     
     {isModalOpen && 
     <SongAddModal 
     onClose={() => setIsModalOpen(false)}
     onAddSongs={handleAddSongs}  />}
     </>
  );
}

export default RoomPlayList;

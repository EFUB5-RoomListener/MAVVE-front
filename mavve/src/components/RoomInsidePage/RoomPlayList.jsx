import React, { useState, useEffect, useRef } from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import CheckBox from '../../assets/RoomInsidePage/play_frame_music.svg';
import Check from '../../assets/RoomInsidePage/check-01.svg';
import FriendsModal from './FriendsModal';
import SongAddModal from "./SongAddModal";
import Chat from '../../assets/RoomInsidePage/roomin_icn_chat.svg';
import { sendAddSongMessage, sendDeleteSongMessage } from "../../api/websocket-song";


function RoomPlayList({ isChatOpen, setIsChatOpen, songEvent, roomCode, currentSong, setCurrentSong, playList, setPlayList, roomData, startTime, setStartTime  }) {

  // 브로드캐스트 받은 동작 전달 
  useEffect(() => {
    if (!songEvent) return;
    console.log("🎧 수신된 songEvent:", songEvent);

    switch (songEvent.type) {
      case "ADD_SONG":
        if (songEvent.song) {
          setPlayList(prev => [...prev, songEvent.song]);
        }
        break;
      
      case "DELETE_SONG":
        if (songEvent.songIds) {
          setPlayList(prev =>
            prev.filter(song => !songEvent.songIds.includes(song.spotifyId.toString()))
          );
        }
        break;
      
      case "NEXT":

        const currentIndex = playList.findIndex(song => song.spotifyId === currentSong?.spotifyId);

        if (currentIndex !== -1) {
          if (currentIndex < playList.length - 1) {

            // 다음 곡이 있음
            const nextSong = playList[currentIndex + 1];
            setCurrentSong(nextSong);
          } else {
            // 마지막 곡이면 처음으로 반복
            const firstSong = playList[0];
            console.log("🎵 마지막 곡 -> 첫 곡으로 반복 재생");
            setCurrentSong(firstSong);
          }
        } else {
          console.log("🎵 현재 곡을 찾을 수 없음");
        }
        break;

        
        
        
      default:
        break;
    }
  }, [songEvent]);

  
  
  // 수정 모드 전환 
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };
  // 삭제 시 선택된 곡 목록 
  const [selectedSongs, setSelectedSongs] = useState([]);
  const toggleSelect = (songId) => {
    setSelectedSongs(prev =>
      prev.includes(songId)
        ? prev.filter(id => id !== songId)
        : [...prev, songId]
    );
  };
  
  // 삭제 토스트 모달 상태 
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [deletedCount, setDeletedCount] = useState(0); // 삭제 함수 밖에서도 접근 가능하게 
  // 곡 삭제 함수 
  const onDelete = async () => {
    const count = selectedSongs.length;
    setDeletedCount(count);
  
    const songIdsToDelete = playList
      .filter(song => selectedSongs.includes(song.spotifyId.toString()))
      .map(song => song.songId)
      .filter(Boolean);
  
    sendDeleteSongMessage(roomCode, songIdsToDelete);
    
    setPlayList(prev =>
      prev.filter(song => !songIdsToDelete.includes(song.songId))
    );

    setSelectedSongs([]);
    setIsToastVisible(true);
  
    setTimeout(() => {
      setIsToastVisible(false);
    }, 1500);
  };
  

  // 친구 목록 버튼 보이는 상태
  const [isActive, setIsActive] = useState(false);
  const toggleStyle = () => setIsActive(prev => !prev); 



  // 노래 추가 모달 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 노래 추가 토스트 모달 
  const [isAddToastVisible, setIsAddToastVisible] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  // 노래 추가 함수
  const handleAddSongs = (newSongs) => {
    if (newSongs.length > 0) {
      setPlayList(prev => [...prev, ...newSongs]); 
      setAddedCount(newSongs.length);
      setIsAddToastVisible(true);
  
      // WebSocket으로 추가된 노래들 각각 전송 
      newSongs.forEach(song => {
        sendAddSongMessage(roomCode, song); 
      });
  
      setTimeout(() => {
        setIsAddToastVisible(false);
      }, 1500);
    }
  };


  // 자동 스크롤 구현
  const songRefs = useRef({});
  useEffect(() => {
    playList.forEach(song => {
      if (!songRefs.current[song.spotifyId]) {
        songRefs.current[song.spotifyId] = React.createRef();
      }
    });
  }, [playList]);
  

  const containerRef = useRef();

  const lastScrolledId = useRef(null);

  useEffect(() => {
    if (!currentSong || !containerRef.current) return;
    if (lastScrolledId.current === currentSong.spotifyId) return;

    const currentRef = songRefs.current[currentSong.spotifyId];
    if (!currentRef?.current) return;

    lastScrolledId.current = currentSong.spotifyId;

    const container = containerRef.current;
    const songElem = currentRef.current;

    const currentBarOffset = 4.5 * 1.75;
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offset = currentBarOffset * remToPx;

    const scrollTop = songElem.offsetTop - offset + songElem.clientHeight / 2;

    container.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    });
  }, [currentSong]);

  // duration 밀리초를 분:초로 변환 
  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`; // 한자리 숫자를 두자리로 만들어줌 
  };


  return (
    <>
    <S.PlayListAllContainer>
      <S.PlayListHeader>
        <S.PlayListTitle>{roomData?.roomName}</S.PlayListTitle>
        <S.EditButton onClick={toggleEditMode}>
          {isEditMode ? '수정 완료' : '플레이리스트 수정'}
        </S.EditButton>

        <S.ChatToggleBtn $isChatOpen={isChatOpen} onClick={() => setIsChatOpen((prev) => !prev)}>
           <img src={Chat}/> 채팅
        </S.ChatToggleBtn>
      </S.PlayListHeader>

      <S.PlayListInfo>
        <span>{roomData?.songCount}곡, {roomData?.totalDuration} </span>
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

      <S.MusicListContainer ref={containerRef} $isShrinked={isChatOpen}>
       {!isEditMode && <S.Spacer />}
      {playList === undefined ? (
        <S.EmptyMessage>플레이리스트가 비어 있습니다.</S.EmptyMessage>
      ) : (
         playList.map((song) => {
          const isSelected = selectedSongs.includes(song.spotifyId.toString());

          // ref 연결
          if (!songRefs.current[song.spotifyId]) {
            songRefs.current[song.spotifyId] = React.createRef();
          }

          return (
            <S.SongRow 
              ref={songRefs.current[song.spotifyId]}
              key={song.spotifyId}
              $isSelected={isSelected} $isShrinked={isChatOpen}
              >
              {isEditMode ? (
                <S.CheckboxWrapper onClick={() => toggleSelect(song.spotifyId)} isSelected={isSelected}>
                  <S.CheckBoxIcon src={CheckBox} />
                  {isSelected && <S.CheckIcon src={Check} />}
                </S.CheckboxWrapper>
              ) : (
                <div style={{ width: '1rem', height: '1rem' }} />  // 공간 고정용
              )}

              <S.CDWrapper>
                <S.CDThumbnail src={song.coverUrl} alt={song.title} />
                <S.CDDot />
              </S.CDWrapper>

              <S.SongTextInfo>
                <div>{song.title}</div>
                <div>{song.artist}</div>
              </S.SongTextInfo>
              <S.SongAlbum $isChatOpen={isChatOpen}>{song.album}</S.SongAlbum>
              <S.SongDuration>{formatDuration(song.duration)}</S.SongDuration>
            </S.SongRow>
          );
        })
        )}
        {!isEditMode && <S.Spacer />}


      {isToastVisible && (
        <S.Toast>
          선택하신 {deletedCount}곡의 노래가 삭제되었습니다.
        </S.Toast>
      )}

      {isAddToastVisible && (
        <S.Toast>
          {roomData?.roomName}에 {addedCount}곡이 추가되었습니다.
        </S.Toast>
      )}
      </S.MusicListContainer>
    </S.PlayListAllContainer>
      
     
     {isModalOpen && 
     <SongAddModal 
     onClose={() => setIsModalOpen(false)}
     onAddSongs={handleAddSongs}
     currentPlayList={playList}  />}
     </>
  );
}



export default RoomPlayList;
import React, {useState, useEffect} from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import CheckBox from '../../assets/RoomInsidePage/play_frame_music.svg';
import Check from '../../assets/RoomInsidePage/check-01.svg';
import SearchIcon from "../../assets/RoomPage/room_icn_search.svg";
import CloseIcon from "../../assets/RoomInsidePage/mypage_music_icn_X.svg";
import { searchSongs } from "../../api/song";

function SongAddModal({ onClose, onAddSongs, currentPlayList }) {
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const fetchSongs = async () => {
        if (search.trim() === "") {
          setSearchResults([]);
          return;
        }
        try {
          const songs = await searchSongs(search);
          setSearchResults(songs);
        } catch (error) {
          console.error("노래 검색 실패:", error);
        }
      };
  
      fetchSongs();
    }, [search]);

    const toggleSelect = (spotifyId) => {
      setSelectedSongs((prev) =>
        prev.includes(spotifyId)
          ? prev.filter((id) => id !== spotifyId)
          : [...prev, spotifyId]
      );
    };

    const handleChange = (e) => {
      setSearch(e.target.value);
    };
    
    // selected song들을 추가하기 
    const handleAdd = () => {
      const songsToAdd = searchResults.filter(song =>
        selectedSongs.includes(song.spotifySongId)
      );
  
      onAddSongs(songsToAdd); // 상위로 전달
      onClose(); // 모달 닫기
    };
  
    // 검색 필터링
    const filteredList = currentPlayList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    // duration 밀리초를 분:초로 변환 
    const formatDuration = (ms) => {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      return `${minutes}:${seconds.toString().padStart(2, '0')}`; // 한자리 숫자를 두자리로 만들어줌 
    };
    return (
      <S.ModalOverlay onClick={onClose}>
        <S.AddModalContainer onClick={(e) => e.stopPropagation()}>
  
          {/* 검색창 */}
          <S.SearchBarContainer>
            <S.SearchIcon src={SearchIcon} />
            <S.SearchInput
              placeholder="         노래를 검색해 보세요!"
              value={search}
              onChange={handleChange}
            />
          </S.SearchBarContainer>

          <S.ModalCloseBtn src={CloseIcon} onClick={onClose}/>

          {/* 노래 리스트 */}
          <S.SongListWrapper>
          {searchResults.map((song) => {
            const isSelected = selectedSongs.includes(song.spotifySongId);
  
            return (
              <S.ModalSongRow key={song.songId} $isSelected={isSelected}  onClick={() => toggleSelect(song.spotifySongId)}>
                <S.CheckboxWrapper
                  isSelected={isSelected}
                >
                  <S.CheckBoxIcon src={CheckBox} />
                  {isSelected && <S.CheckIcon src={Check} />}
                </S.CheckboxWrapper>
                <S.ModalThumbnail src={song.coverUrl}/>
                <S.ModalSongTextInfo>
                  <div>{song.title}</div>
                  <div>{song.artist}</div>
                </S.ModalSongTextInfo>
                <S.ModalSongAlbum>{song.album}</S.ModalSongAlbum>
                <S.ModalSongDuration>{formatDuration(song.duration)}</S.ModalSongDuration>
              </S.ModalSongRow>
            );
            
          })}
          </S.SongListWrapper>

          <S.AddButton onClick={handleAdd}>추가하기</S.AddButton>
        </S.AddModalContainer>
      </S.ModalOverlay>
    );
  }
  
export default SongAddModal;
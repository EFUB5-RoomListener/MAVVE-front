import React, {useState} from "react";
import * as S from '../../pages/RoomInsidePage/RoomInsidePage.style';
import { mockPlayList } from "./mockPlayList";
import CheckBox from '../../assets/RoomInsidePage/play_frame_music.svg';
import Check from '../../assets/RoomInsidePage/check-01.svg';
import SearchIcon from "../../assets/RoomPage/room_icn_search.svg";
import CloseIcon from "../../assets/RoomInsidePage/mypage_music_icn_X.svg";

function SongAddModal({ onClose, onAddSongs }) {
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [search, setSearch] = useState("");
  
    const toggleSelect = (id) => {
      setSelectedSongs((prev) =>
        prev.includes(id.toString())
          ? prev.filter((i) => i !== id.toString())
          : [...prev, id.toString()]
      );
    };
  
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
    
    // selected song들을 추가하기 
    const handleAdd = () => {
      const songsToAdd = mockPlayList.filter(song =>
        selectedSongs.includes(song.id.toString())
      );
  
      onAddSongs(songsToAdd); // 상위로 전달
      onClose(); // 모달 닫기
    };
  
    // 검색 필터링
    const filteredList = mockPlayList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  
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
          {filteredList.map((song) => {
            const isSelected = selectedSongs.includes(song.id.toString());
  
            return (
              <S.ModalSongRow key={song.id} isSelected={isSelected}onClick={() => toggleSelect(song.id)}>
                <S.CheckboxWrapper
                  isSelected={isSelected}
                >
                  <S.CheckBoxIcon src={CheckBox} />
                  {isSelected && <S.CheckIcon src={Check} />}
                </S.CheckboxWrapper>
                <S.ModalThumbnail src={song.thumbnail}/>
                <S.ModalSongTextInfo>
                  <div>{song.title}</div>
                  <div>{song.artist}</div>
                </S.ModalSongTextInfo>
                <S.ModalSongAlbum>{song.album}</S.ModalSongAlbum>
                <S.ModalSongDuration>{song.duration}</S.ModalSongDuration>
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
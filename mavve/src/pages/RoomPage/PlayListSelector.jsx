import React, {useState} from "react";
import MusicIcon from '../../assets/RoomPage/room_icn_music.svg'
import * as S from '../RoomPage/RoomPage.style';
import SearchIcon from "../../assets/RoomPage/room_icn_search.svg";
import playlistData from "./playlistMockData";
import UncheckedBoxIcon from '../../assets/RoomPage/checkbox.svg';
import CheckedBoxIcon from '../../assets/RoomPage/check-01.svg';

function PlayListSelector({ selectedLists, setSelectedLists, roomInfo, setStep }) {
    // 검색 상태 
    const [search, setSearch] = useState("");
    // 검색 상태  변경 
    const handleChange = (e) => {
        setSearch(e.target.value)
    } 
    
    // 검색 결과 리스트 
    const filteredList = playlistData.filter(item =>     
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    // 선택된 플레이리스트들 관리
    const toggleSelect = (id) => {
        setSelectedLists(prev =>
          prev.includes(id.toString())
            ? prev.filter(i => i !== id.toString())
            : [...prev, id.toString()]
        );
      };
    // 방 세부 정보 입력했는지 
    const isRoomInfoComplete =
        roomInfo.title.trim() !== "" &&
        typeof roomInfo.thumbnailPreview === "string" &&
        roomInfo.thumbnailPreview.trim() !== "" &&
        roomInfo.hashtags.length > 0 &&
        roomInfo.visibility !== "" && roomInfo.visibility !== null;

    // 방 모든 정보 확정 
    const handleConfirm = () => {
        if (selectedLists.length > 0) {
          setStep("confirm");
        } else {
          alert("하나 이상의 플레이리스트를 선택해주세요!");
        }
      };


    return(
        <>
        <S.SelectorContainer>
        <S.SelectorTop>
            <img src={MusicIcon}/>
            추가할 플레이리스트를 선택해보세요! 
        </S.SelectorTop>
        <S.SearchWrapper>
                <S.SearchIconStyled src={SearchIcon} alt="SearchIcon"/>
            <S.PlayListSearchBar 
                type="text" 
                value={search} 
                onChange={handleChange} 
                placeholder="원하는 플레이리스트를 검색해 보세요!"
            /> 
        </S.SearchWrapper>
        </S.SelectorContainer>
        <S.SearchedContainer>
        {search && filteredList.length === 0 && (
            <S.NoResultText>
                '{search}'과(와) 일치하는 검색결과가 없습니다.
            </S.NoResultText>
            )}
        {search && filteredList.map(item => {
        const isSelected = selectedLists.includes(item.id.toString());

        return (
            <S.PlayListRow key={item.id} selected={isSelected}>
              <S.CheckboxWrapper onClick={() => toggleSelect(item.id)}>
                <S.CheckboxBase src={UncheckedBoxIcon} />
                {isSelected && <S.CheckboxOverlay src={CheckedBoxIcon} />}
              </S.CheckboxWrapper>
        
              <S.Thumbnail src={item.thumbnail} alt="썸네일" />
              <S.PlaylistTitle>{item.title}</S.PlaylistTitle>
              <S.PlaylistTag selected={isSelected}>#{item.tags?.[0]}</S.PlaylistTag>
              <S.SongCount>총 {item.songCount}곡</S.SongCount>
              <S.TotalDuration>{item.totalDuration}</S.TotalDuration>
            </S.PlayListRow>
          );
        })}

        {search && (
            <S.PlayListAddBtn onClick={handleConfirm} disabled={!isRoomInfoComplete}>
            {isRoomInfoComplete 
              ? `플레이리스트 ${selectedLists.length}개 추가하기`
              : "방 정보 설정을 먼저 완료해주세요"
            }
          </S.PlayListAddBtn>
        )}
        </S.SearchedContainer>
        </>
    );
};

export default PlayListSelector;
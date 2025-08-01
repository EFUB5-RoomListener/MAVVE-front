import React, { useState, useEffect } from "react";
import MusicIcon from '../../assets/RoomPage/room_icn_music.svg';
import SearchIcon from "../../assets/RoomPage/room_icn_search.svg";
import UncheckedBoxIcon from '../../assets/RoomPage/checkbox.svg';
import CheckedBoxIcon from '../../assets/RoomPage/check-01.svg';
import * as S from '../../pages/RoomPage/RoomPage.style';
import { addPlayListRoom, getRoomPlaylists } from '../../api/room';
import { searchPlaylists } from "../../api/playlist";

function PlayListSelector({
  selectedLists,
  setSelectedLists,
  roomInfo,
  setStep,
  mode = "create",
  roomCode,
  onPlaylistsAdded
}) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [existingIds, setExistingIds] = useState([]);

  useEffect(() => {
    if (mode !== "edit") return;
    const fetchExisting = async () => {
      try {
        const res = await getRoomPlaylists(roomCode);
        const ids = (res.playlists || res).map(p => p.playlistId);
        setExistingIds(ids);
        setSelectedLists(prev => prev.filter(id => !ids.includes(id)));
      } catch (e) {
        console.error("기존 플레이리스트 조회 실패", e);
      }
    };
    fetchExisting();
  }, [mode, roomCode]);

  const handleChange = async (e) => {
    const keyword = e.target.value;
    setSearch(keyword);

    if (!keyword.trim()) {
      setSearchResult([]);
      return;
    }

    try {
      setIsLoading(true);
      const result = await searchPlaylists(keyword);
      setSearchResult(result);
    } catch (error) {
      console.error("플레이리스트 검색 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSelect = (id) => {
    if (existingIds.includes(id)) return;
    setSelectedLists(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleConfirm = async () => {
    if (selectedLists.length === 0) {
      alert("하나 이상의 플레이리스트를 선택해주세요!");
      return;
    }

    if (mode === "edit") {
      try {
        for (const id of selectedLists) {
          await addPlayListRoom(roomCode, id);
        }
        alert("새 플레이리스트가 추가되었습니다!");
        onPlaylistsAdded?.();
        setStep("edit-confirm");
      } catch (e) {
        console.error("플레이리스트 추가 실패:", e);
        alert("플레이리스트 추가 중 오류 발생");
      }
    } else {
      setStep("confirm");
    }
  };

  const isRoomInfoComplete =
    roomInfo?.title?.trim?.() &&
    roomInfo?.thumbnailPreview?.trim?.() &&
    roomInfo?.hashtags?.length > 0 &&
    roomInfo?.visibility;

  return (
    <>
      <S.SelectorContainer>
        <S.SelectorTop>
          <img src={MusicIcon} alt="icon" />
          추가할 플레이리스트를 선택해보세요!
        </S.SelectorTop>

        <S.SearchWrapper>
          <S.SearchIconStyled src={SearchIcon} alt="search" />
          <S.PlayListSearchBar
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="원하는 플레이리스트를 검색해 보세요!"
          />
        </S.SearchWrapper>
      </S.SelectorContainer>

      <S.SearchedContainer>
        {search && !isLoading && searchResult.length === 0 && (
          <S.NoResultText>
            '{search}'과(와) 일치하는 검색결과가 없습니다.
          </S.NoResultText>
        )}

        {search && searchResult.map((item) => {
          const isSelected = selectedLists.includes(item.playlistId);

          return (
            <S.PlayListRow key={item.playlistId} selected={isSelected}>
              <S.CheckboxWrapper onClick={() => toggleSelect(item.playlistId)}>
                <S.CheckboxBase src={UncheckedBoxIcon} />
                {isSelected && <S.CheckboxOverlay src={CheckedBoxIcon} />}
              </S.CheckboxWrapper>
              <S.Thumbnail src={item.playImageUrl} alt="썸네일" />
              <S.PlaylistTitle>{item.name}</S.PlaylistTitle>
              <S.SongCount>총곡수~</S.SongCount>
              <S.TotalDuration>총시간~</S.TotalDuration>
            </S.PlayListRow>
          );
        })}

        {search && (
          <S.PlayListAddBtn
            onClick={handleConfirm}
            disabled={mode === "create" && !isRoomInfoComplete}
          >
            {mode === "create"
              ? isRoomInfoComplete
                ? `플레이리스트 ${selectedLists.length}개 추가하기`
                : "방 정보 설정을 먼저 완료해주세요"
              : `플레이리스트 ${selectedLists.length}개 추가하기`}
          </S.PlayListAddBtn>
        )}
      </S.SearchedContainer>
    </>
  );
}

export default PlayListSelector;
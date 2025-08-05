import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RoomSearch.style";
import search from "../../assets/Common/icn_search.svg";
import { searchRooms } from "../../api/room";
import filled from "../../assets/Common/filled_heart.svg";
import unfilled from "../../assets/Common/unfilled_heart.svg";
import { toggleRoomLike } from "../../api/room";
import { useRoomStore } from "../../store/useRoomStore";

const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, "");

export default function RoomSearch() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchWrapperRef = useRef(null);

  const { fetchAndSetLikedRooms, setMyRooms } = useRoomStore();

  //방 검색
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchText.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const rooms = await searchRooms(normalizeText(searchText));
        setSearchResults(rooms);
      } catch (err) {
        console.error("방 검색 실패:", err);
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchText]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target)
      ) {
        setIsFocused(false); // 검색창 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleLike = async (e, room) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await toggleRoomLike(room.roomId);
      setSearchResults((prevResults) =>
        prevResults.map((r) =>
          r.roomId === room.roomId
            ? { ...r, liked: response.liked, likeCount: response.likeCount }
            : r
        )
      );
      await fetchAndSetLikedRooms();

      setMyRooms((prevRooms) =>
        prevRooms.map((r) =>
          r.roomId === room.roomId
            ? { ...r, liked: response.liked, likeCount: response.likeCount }
            : r
        )
      );
    } catch (error) {
      console.error("좋아요 API 호출 실패: ", error);
      alert("좋아요 처리 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.SearchWrapper ref={searchWrapperRef}>
      <S.SearchBar $isFocused={isFocused} onFocus={() => setIsFocused(true)}>
        <img src={search} alt="search" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={
            isFocused
              ? ""
              : "함께 듣고 싶은 음악이 있나요? 원하는 방을 찾아보세요!"
          }
        />
      </S.SearchBar>
      {searchText && isFocused && (
        <S.ResultContainer>
          {searchResults.length > 0 ? (
            searchResults.map((room) => (
              <S.ResultItem
                key={room.roomId}
                onClick={() => {navigate(`/rooms/${room.roomId}/inside`);
                localStorage.setItem("fromEnterBtn", "true");
              }}
              >
                <S.RoomWrapper>
                  <S.RoomCover>
                    <S.RoomThumbnail $image={room.imageURL} />
                  </S.RoomCover>
                  <S.RoomInfo>
                    <S.RoomText>{room.roomName}</S.RoomText>
                    <S.RoomText>{room.userName}</S.RoomText>
                  </S.RoomInfo>
                </S.RoomWrapper>
                <S.HashtagContainer>
                  {room.tag.slice(0, 4).map((tag, index) => (
                    <S.Hashtag key={index}>#{tag}</S.Hashtag>
                  ))}
                </S.HashtagContainer>
                <S.Playtime>{room.duration}</S.Playtime>
                <S.HeartIcon onClick={(e) => handleToggleLike(e, room)}>
                  <img src={room.liked ? filled : unfilled} alt="heart" />
                </S.HeartIcon>
              </S.ResultItem>
            ))
          ) : (
            <S.EmptyMessage>
              ‘{searchText}’과(와) 일치하는 결과가 없습니다.
            </S.EmptyMessage>
          )}
        </S.ResultContainer>
      )}
    </S.SearchWrapper>
  );
}

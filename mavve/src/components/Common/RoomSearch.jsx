import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RoomSearch.style";
import search from "../../assets/Common/icn_search.svg";
import { searchRooms } from "../../api/room";

const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, "");

export default function RoomSearch() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchWrapperRef = useRef(null);

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
          <S.ItemWrapper>
            {searchResults.length > 0 ? (
              searchResults.map((room) => (
                <S.ResultItem
                  key={room.roomId}
                  onMouseDown={() => navigate(`/rooms/${room.roomId}`)}
                >
                  <S.RoomWrapper>
                    <S.RoomCover>
                      <S.RoomThumbnail $image={room.imageURL} />
                    </S.RoomCover>
                    <S.RoomInfo>
                      <S.RoomText>{room.roomName}</S.RoomText>
                      <S.RoomText>닉네임최대닉네임최대</S.RoomText>
                    </S.RoomInfo>
                  </S.RoomWrapper>
                  <S.HashtagContainer>
                    {room.tag.slice(0, 4).map((tag, index) => (
                      <S.Hashtag key={index}>#{tag}</S.Hashtag>
                    ))}
                  </S.HashtagContainer>
                  <S.Playtime>02:48:23</S.Playtime>
                </S.ResultItem>
              ))
            ) : (
              <S.EmptyMessage>
                ‘{searchText}’과(와) 일치하는 결과가 없습니다.
              </S.EmptyMessage>
            )}
          </S.ItemWrapper>
        </S.ResultContainer>
      )}
    </S.SearchWrapper>
  );
}

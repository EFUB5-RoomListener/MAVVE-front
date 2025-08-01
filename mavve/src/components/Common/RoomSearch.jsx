import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RoomSearch.style";
import search from "../../assets/Common/icn_search.svg";

const dummyRoomResponse = {
  totalCount: 5,
  rooms: [
    {
      roomId: 1,
      userId: 101,
      roomName: "방 제목이길면이렇게된다",
      viewCount: 120,
      likeCount: 24,
      liked: true,
      tag: [
        "indie",
        "lofi공부하자!!ㅎㅎㅎ",
        "공부방",
        "같이공부할사람",
        "ㅎㅎ",
      ],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-01T12:00:00",
    },
    {
      roomId: 2,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    {
      roomId: 5,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    {
      roomId: 3,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    {
      roomId: 4,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    {
      roomId: 6,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive하는기분", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    {
      roomId: 7,
      userId: 102,
      roomName: "방 제목 노래방",
      viewCount: 250,
      likeCount: 31,
      liked: false,
      tag: ["drive", "pop"],
      imageURL: "https://via.placeholder.com/40",
      isPublic: true,
      createdAt: "2025-07-02T09:00:00",
    },
    // ...더 추가 가능
  ],
};

const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, "");

export default function RoomSearch() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchWrapperRef = useRef(null);

  //방 검색
  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = dummyRoomResponse.rooms.filter((room) =>
      normalizeText(room.roomName).includes(normalizeText(searchText))
    );

    setSearchResults(filtered);
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
                      <S.RoomThumbnail />
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
                  <S.Playtime>99:48:23</S.Playtime>
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

import React, { useState, useEffect } from "react";
import * as S from "./MusicSelectModal.style";
import XIcon from "../../assets/MyPage/xIcon.svg";
import SearchIcon from "../../assets/MyPage/searchIcon.svg";

import { searchSongs } from "../../api/song";

export default function MusicSelectModal({ onClose, noteData, setNoteData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [songs, setSongs] = useState([]);

  //검색: 노래 제목 기준, 띄어쓰기나 대소문자 무관하게 검색 가능(가수 검색 불가, 필요 시 수정 가능)
  const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, "");

  //   const filteredSongs = dummySongs.filter((song) =>
  //     normalizeText(song.songTitle).includes(normalizeText(searchTerm))
  //   );

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const result = await searchSongs(searchTerm);

        const processed = result.map((song) => ({
          ...song,
          duration: convertDuration(song.duration),
        }));

        const filtered = searchTerm.trim()
          ? processed.filter((song) =>
              normalizeText(song.title || "").includes(
                normalizeText(searchTerm)
              )
            )
          : processed;

        setSongs(filtered);
      } catch (err) {
        console.error("노래 검색 실패", err);
        setSongs([]);
      }
    };

    fetchSongs();
  }, [searchTerm]);

  const convertDuration = (durationMs) => {
    if (!durationMs || isNaN(durationMs)) return "0:00";
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSave = () => {
    const selectedSong = songs.find(
      (song) => song.spotifySongId === selectedSongId
    );
    if (selectedSong) {
      setNoteData((prev) => ({
        ...prev,
        songTitle: selectedSong.title,
        songArtist: Array.isArray(selectedSong.artist)
          ? selectedSong.artist.join(", ")
          : selectedSong.artist || "",
        songAlbum: selectedSong.album,
        duration: selectedSong.duration,
        songImage: selectedSong.coverUrl,
        spotifySongId: selectedSong.spotifySongId,
      }));
    }
    onClose();
  };

  return (
    <S.MusicSelectModalBackground>
      <S.MusicSelectModalBox>
        <S.MusicSelectHeader>
          오늘의 노래
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.MusicSelectHeader>
        <S.SearchBar>
          <img src={SearchIcon} alt="검색" />
          <input
            type="text"
            placeholder="노래를 검색해 보세요!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.SearchBar>

        <S.MusicList>
          {songs.length > 0 ? (
            songs.map((song) => (
              <S.MusicItem
                key={song.spotifySongId}
                onClick={() => setSelectedSongId(song.spotifySongId)}
                $active={selectedSongId === song.spotifySongId}
              >
                <S.SongImage src={song.coverUrl} alt="앨범 커버" />
                <S.SongInfo>
                  <S.SongTitle>{song.title}</S.SongTitle>
                  <S.SongArtist>
                    {Array.isArray(song.artist)
                      ? song.artist.join(", ")
                      : song.artist}
                  </S.SongArtist>
                </S.SongInfo>
                <S.SongAlbum>{song.album}</S.SongAlbum>
                <S.SongDuration>{song.duration}</S.SongDuration>
              </S.MusicItem>
            ))
          ) : (
            <S.EmptyMessage>
              '{searchTerm}'과(와) 일치하는 노래가 없습니다.
            </S.EmptyMessage>
          )}
        </S.MusicList>
        <S.SaveBtn onClick={handleSave} disabled={selectedSongId === null}>
          선택하기
        </S.SaveBtn>
      </S.MusicSelectModalBox>
    </S.MusicSelectModalBackground>
  );
}

//

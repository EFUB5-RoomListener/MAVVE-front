import React, { useState, useEffect } from 'react'
import * as S from '../PlaylistPage/SongSearch.style'
import MusicIcon from '../../assets/RoomPage/room_icn_music.svg'
import search from '../../assets/Common/icn_search.svg'
import SongComponent from './SongComponent'
import { searchSongs } from '../../api/song'

export default function SongSearch() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = async (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        if (newQuery.trim() === '') {
        setSearchResults([]);
        return;
        }

        try {
        setIsLoading(true);
        const songs = await searchSongs(newQuery);
        setSearchResults(songs);
        } catch (error) {
        console.error('검색 중 에러~~:', error);
        setSearchResults([]);
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <S.Container>
            <S.Title>
                <img src={MusicIcon}/>
                추가할 노래를 선택해보세요! 
            </S.Title>
            <S.SearchBar>
                <img src={search} alt="search" />
                <input 
                    placeholder="원하는 노래(가수)를 검색해 보세요!" 
                    value={query}
                    onChange={handleInputChange}
                />
            </S.SearchBar>
            {query && (
                <>
                <S.ResultContainer>
                    {isLoading ? (
                    <S.NoResult>검색 중...</S.NoResult>
                    ) : searchResults.length > 0 ? (
                    searchResults.map((song) => (
                        <SongComponent
                            key={song.songId}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            coverUrl={song.coverUrl}
                            duration={song.duration}
                        />
                    ))
                    ) : (
                    <S.NoResult>
                        '{query}'과(와) 일치하는 검색결과가 없습니다.
                    </S.NoResult>
                    )}
                </S.ResultContainer>

                <S.AddSongButton>선택한 노래 추가하기</S.AddSongButton>
                </>
            )}
        </S.Container>
    )
}

import React, { useState } from 'react'
import * as S from '../PlaylistPage/SongSearch.style'
import MusicIcon from '../../assets/RoomPage/room_icn_music.svg'
import search from '../../assets/Common/icn_search.svg'
import SongComponent from './SongComponent'

export default function SongSearch() {
    const [song, setSong] = useState("");

    const allSongs = ['아이유 - Love Poem', '뉴진스 - Super Shy', '까치산 - Convenient Love', '까치산 - 거짓말자판기', '까치산 - 주제는사랑', '까치산 - 안개', '까치산 - 가위바위보', '까치산 - 요괴인간'];
    const filteredSongs = allSongs.filter(s => s.toLowerCase().includes(song.toLowerCase()));

    const handleInputChange = (e) => {
        setSong(e.target.value);
    }

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
                    value={song}
                    onChange={handleInputChange}
                />
            </S.SearchBar>
            {song && (
                <>
                    <S.ResultContainer>
                    {filteredSongs.length > 0 ? (
                        filteredSongs.map((title, idx) => (
                        <SongComponent key={idx} title={title} />
                        ))
                    ) : (
                        <S.NoResult>
                        '{song}'과(와) 일치하는 검색결과가 없습니다.
                        </S.NoResult>
                    )}
                    </S.ResultContainer>
                    <S.AddSongButton>선택한 노래 추가하기</S.AddSongButton>
                </>
            )}
        </S.Container>
    )
}

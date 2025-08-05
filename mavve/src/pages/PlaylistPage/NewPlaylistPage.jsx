import React from 'react'
import * as S from '../PlaylistPage/NewPlaylistPage.style'
import TopBar from '../../components/Common/TopBar'
import SideBar from '../../components/Common/SideBar'
import PlaylistHeader from '../../components/PlaylistPage/PlaylistHeader'
import SongSearch from '../../components/PlaylistPage/SongSearch'

const defaultPlaylist = {
    playlistId: 'n',
    name: '새 플레이리스트',
    playImageUrl: '',
    userId: '저요', // 로그인 정보 받아서 수정하기
};


export default function NewPlaylistPage() {
    return (
        <S.Container>
            <TopBar />
            <S.Contents>
                <SideBar />
                <S.MainContents>
                    <S.Header>
                        <PlaylistHeader playlist={defaultPlaylist}/>
                    </S.Header>
                    <SongSearch />
                </S.MainContents>
            </S.Contents>
        </S.Container>
    )
}

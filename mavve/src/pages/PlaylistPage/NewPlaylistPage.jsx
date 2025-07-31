import React from 'react'
import * as S from '../PlaylistPage/NewPlaylistPage.style'
import TopBar from '../../components/Common/TopBar'
import SideBar from '../../components/Common/SideBar'
import PlaylistHeader from '../../components/PlaylistPage/PlaylistHeader'
import SongSearch from '../../components/PlaylistPage/SongSearch'


export default function NewPlaylistPage() {
    return (
        <S.Container>
            <TopBar />
            <S.Contents>
                <SideBar />
                <S.MainContents>
                    <S.Header>
                        <PlaylistHeader />
                    </S.Header>
                    <SongSearch />
                </S.MainContents>
            </S.Contents>
        </S.Container>
    )
}

import React from 'react'
import * as S from '../PlaylistPage/PlaylistDetailPage.style'
import TopBar from '../../components/Common/TopBar'
import SideBar from '../../components/Common/SideBar'
import PlaylistHeader from '../../components/PlaylistPage/PlaylistHeader'
import Songlist from '../../components/PlaylistPage/Songlist'

export default function PlaylistDetailPage() {
    return (
            <S.Container>
                <TopBar />
                <S.Contents>
                    <SideBar />
                    <S.MainContents>
                        <S.Header>
                            <PlaylistHeader />
                        </S.Header>
                        <Songlist />
                    </S.MainContents>
                </S.Contents>
            </S.Container>
        )
}

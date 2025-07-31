import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from '../PlaylistPage/PlaylistDetailPage.style'
import TopBar from '../../components/Common/TopBar'
import SideBar from '../../components/Common/SideBar'
import PlaylistHeader from '../../components/PlaylistPage/PlaylistHeader'
import Songlist from '../../components/PlaylistPage/Songlist'
import { getPlaylistDetail } from '../../api/playlist'

export default function PlaylistDetailPage() {
    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState(null);
    
    useEffect(() => {
    const fetchPlaylist = async () => {
        if (!playlistId) return;

        try {
            const data = await getPlaylistDetail(playlistId);
            setPlaylist(data);
            console.log(data);
        } catch (error) {
            console.error('플레이리스트 불러오기 실패:', error);
        }
        };

        fetchPlaylist();
    }, [playlistId]);

    if (!playlist) return <div>로딩중</div>;

    return (
            <S.Container>
                <TopBar />
                <S.Contents>
                    <SideBar />
                    <S.MainContents>
                        <S.Header>
                            <PlaylistHeader playlist={playlist}/>
                        </S.Header>
                        <Songlist songs={playlist.songs}/>
                    </S.MainContents>
                </S.Contents>
            </S.Container>
        )
}

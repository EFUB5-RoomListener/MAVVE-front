import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import * as S from '../PlaylistPage/PlaylistDetailPage.style'
import TopBar from '../../components/Common/TopBar'
import SideBar from '../../components/Common/SideBar'
import PlaylistHeader from '../../components/PlaylistPage/PlaylistHeader'
import Songlist from '../../components/PlaylistPage/Songlist'
import SongSearch from '../../components/PlaylistPage/SongSearch'
import { getPlaylistDetail } from '../../api/playlist'

export default function PlaylistDetailPage() {
    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const loc = useLocation();
    const [isNew, setIsNew] = useState(loc.state?.isNew || false);
    const tempImageUrl = loc.state?.tempImageUrl;
    
    const fetchPlaylist = async () => {
        if (!playlistId) return;
        try {
            const data = await getPlaylistDetail(playlistId);
            setPlaylist(data);
        } catch (error) {
            console.error('플레이리스트 불러오기 실패:', error);
        }
    };

    useEffect(() => {
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
                            <PlaylistHeader playlist={{
                                ...playlist,
                                playImageUrl: tempImageUrl || playlist.playImageUrl
                            }} showDeleteButton={true} />
                        </S.Header>
                        {isNew ? (
                            <SongSearch
                                onComplete={async () => {
                                    await fetchPlaylist();
                                    setIsNew(false);
                                }}
                            />
                            ) : (
                            <Songlist songs={playlist.songs} playlistId={playlistId}/>
                        )}
                    </S.MainContents>
                </S.Contents>
            </S.Container>
        )
}

import React, { useState, useEffect } from "react";
import * as S from '../../pages/RoomPage/RoomPage.style';
import ClockIcon from '../../assets/RoomPage/clock.svg';
import MoreIcon from '../../assets//RoomPage/mypage_after_btn_more.svg';
import DeleteIcon from '../../assets/RoomPage/trash-02.svg';
import { useNavigate } from "react-router-dom";
import { createRoom, addPlayListRoom, getRoomPlaylists } from "../../api/room";
import { uploadThumbnailImage } from '../../api/image';
import { getPlaylistDetail } from "../../api/playlist";

function ConfirmedPlaylistView({
  selectedLists = [],
  setSelectedLists,
  thumbnailFile,
  roomInfo,
  roomCode,
  updateTrigger,
  mode = "edit",
}) {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        if (mode === "confirm" && selectedLists.length > 0) {
          const result = await Promise.all(
            selectedLists.map(id => getPlaylistDetail(id).catch(() => null))
          );
          setPlaylists(result.filter(p => p && Array.isArray(p.songs)));
        } else {
          const roomRes = await getRoomPlaylists(roomCode);
          const roomPlaylistIds = (roomRes.playlists || roomRes).map(p => p.playlistId);
          const newIds = selectedLists.filter(id => !roomPlaylistIds.includes(id));
          const allIds = [...roomPlaylistIds, ...newIds];

          const result = await Promise.all(
            allIds.map(id => getPlaylistDetail(id).catch(() => null))
          );
          setPlaylists(result.filter(p => p && Array.isArray(p.songs)));
        }
      } catch (e) {
        console.error("플레이리스트 불러오기 실패", e);
      }
    };

    fetchPlaylists();
  }, [roomCode, updateTrigger, mode, selectedLists]);

  const handleDelete = (id) => {
    setSelectedLists(prev => prev.filter(pid => pid !== id));
    setIsModalOpen(false);
    setTargetId(null);
  };

  const handleCreateRoom = async () => {
    try {
      const imageURL = await uploadThumbnailImage(thumbnailFile, 'room');
      const isPublic = roomInfo.visibility === "전체 공개";

      const res = await createRoom({
        roomName: roomInfo.title,
        tag: roomInfo.hashtags,
        imageURL,
        isPublic,
      });

      for (const pid of selectedLists) {
        await addPlayListRoom(res.roomId, pid);
      }

      alert("방이 생성되었습니다!");
      navigate(`/rooms/${res.roomId}`, { state: { roomData: res } });
    } catch (err) {
      console.error("방 생성 실패", err);
      alert("방 생성 중 오류가 발생했어요 🥲");
    }
  };

  const formatDuration = (playlist) => {
    const totalMillis = playlist.songs.reduce((sum, song) => sum + song.duration, 0);
    const minutes = Math.floor(totalMillis / 1000 / 60);
    const seconds = Math.floor(totalMillis / 1000) % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <S.TableWrapper>
        <S.TableHeader>
          <S.IndexColumn>#</S.IndexColumn>
          <S.TitleColumn>플레이리스트 제목</S.TitleColumn>
          <S.CountColumn>곡 수</S.CountColumn>
          <S.TimeColumn><img src={ClockIcon} /></S.TimeColumn>
          {mode === "done" && <S.DeleteColumn />}
        </S.TableHeader>
        <S.TableBorder />

        {playlists.map((item, idx) => (
          <S.TableRow key={item.playlistId} selected={targetId === item.playlistId}>
            <S.IndexColumn>{idx + 1}</S.IndexColumn>
            <S.TitleColumn>
              <S.ThumbnailCell src={item.playImageUrl} alt="썸네일" />
              <S.TitleTextCell>{item.name}</S.TitleTextCell>
            </S.TitleColumn>
            <S.CountColumn>총 {item.songs.length}곡</S.CountColumn>
            <S.TimeColumn>{formatDuration(item)}</S.TimeColumn>
            {mode === "done" && (
              <S.DeleteColumn onClick={() => { setTargetId(item.playlistId); setIsModalOpen(true); }}>
                <img src={MoreIcon} />
              </S.DeleteColumn>
            )}
          </S.TableRow>
        ))}
      </S.TableWrapper>

      {isModalOpen && (
        <S.DeleteWrapper onClick={() => setIsModalOpen(false)}>
          <S.DeleteContent onClick={e => e.stopPropagation()}>
            <img src={DeleteIcon} />
            <S.DeleteText onClick={() => handleDelete(targetId)}>
              선택된 플레이리스트 삭제하기
            </S.DeleteText>
          </S.DeleteContent>
        </S.DeleteWrapper>
      )}

      {!roomCode && (
        <S.CreateRoomButton type="button" onClick={handleCreateRoom}>
          방 생성하기
        </S.CreateRoomButton>
      )}
    </>
  );
}

export default ConfirmedPlaylistView;
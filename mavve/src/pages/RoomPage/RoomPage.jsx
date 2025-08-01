import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as S from "./RoomPage.style";

import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomInfoHeader from '../../components/RoomPage/RoomInfoHeader';
import PlayListSelector from '../../components/RoomPage/PlayListSelector';
import ConfirmedPlaylistView from '../../components/RoomPage/ConfirmedPlaylistView';

export default function RoomPage() {
  const [roomInfo, setRoomInfo] = useState({
    thumbnailPreview: '',
    title: '',
    hashtags: [],
    visibility: "전체공개",
  });

  const [selectedLists, setSelectedLists] = useState([]);
  const [step, setStep] = useState("search");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const { roomCode: roomIdFromUrl } = useParams();
  const location = useLocation();
  const roomData = location.state?.roomData;
  const roomCode = roomIdFromUrl ?? roomData?.roomId;

  useEffect(() => {
    if (!roomData) return;
    setRoomInfo({
      title: roomData.roomName,
      thumbnailPreview: roomData.imageURL,
      hashtags: roomData.tag,
      visibility: roomData.isPublic ? "전체 공개" : "친구 공개",
    });
    setStep("done");
  }, [roomData]);

  const handlePlaylistsAdded = () => {
    setSelectedLists([]);
    setUpdateTrigger(prev => prev + 1);
    setStep("edit-confirm");
  };

  return (
    <S.AllContainer>
      <TopBar />
      <S.RoomPageContainer>
        <SideBar />
        <S.RoomMainContainer>
          <RoomInfoHeader
            roomInfo={roomInfo}
            setRoomInfo={setRoomInfo}
            selectedLists={selectedLists}
            step={step}
            setThumbnailFile={setThumbnailFile}
          />

          <S.PlayListContainer>
            {/* 방 생성 전: 검색 단계 */}
            {step === "search" && !roomData && (
              <PlayListSelector
                selectedLists={selectedLists}
                setSelectedLists={setSelectedLists}
                setStep={setStep}
                roomInfo={roomInfo}
                mode="create"
                roomCode={roomCode}
              />
            )}

            {/* 방 생성 전: 최종 확인 단계 */}
            {step === "confirm" && (
              <ConfirmedPlaylistView
                selectedLists={selectedLists}
                setSelectedLists={setSelectedLists}
                setStep={setStep}
                mode="confirm"
                roomInfo={roomInfo}
                thumbnailFile={thumbnailFile}
              />
            )}

            {/* 방 생성 후: 기존 + 추가 모드 */}
            {step === "done" && (
              <>
                <ConfirmedPlaylistView
                  selectedLists={selectedLists}
                  setSelectedLists={setSelectedLists}
                  mode="done"
                  roomInfo={roomInfo}
                  thumbnailFile={thumbnailFile}
                  roomCode={roomCode}
                  updateTrigger={updateTrigger}
                  setUpdateTrigger={setUpdateTrigger}
                />
                <S.TableBorder />
                <PlayListSelector
                  selectedLists={selectedLists}
                  setSelectedLists={setSelectedLists}
                  setStep={setStep}
                  roomInfo={roomInfo}
                  mode="edit"
                  roomCode={roomCode}
                  onPlaylistsAdded={handlePlaylistsAdded}
                />
              </>
            )}

            {/* 방 생성 후: 추가 완료 확인 화면 */}
            {step === "edit-confirm" && (
              <ConfirmedPlaylistView
                selectedLists={selectedLists}
                setSelectedLists={setSelectedLists}
                mode="done"
                roomInfo={roomInfo}
                thumbnailFile={thumbnailFile}
                roomCode={roomCode}
                updateTrigger={updateTrigger}
                setUpdateTrigger={setUpdateTrigger}
              />
            )}
          </S.PlayListContainer>
        </S.RoomMainContainer>
      </S.RoomPageContainer>
    </S.AllContainer>
  );
}
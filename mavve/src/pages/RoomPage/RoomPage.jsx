import React, {useState, useEffect} from 'react'
import RoomInfoHeader from '../../components/RoomPage/RoomInfoHeader';
import PlayListSelector from '../../components/RoomPage/PlayListSelector';
import * as S from "./RoomPage.style";
import SideBar from "../../components/Common/SideBar";
import TopBar from "../../components/Common/TopBar";
import ConfirmedPlaylistView from '../../components/RoomPage/ConfirmedPlaylistView';
import {useParams, useLocation} from 'react-router-dom';

export default function RoomPage() {
  

  const [roomInfo, setRoomInfo] = useState({
    thumbnailPreview: '',
    title: '',
    hashtags: [],
    visibility: "전체공개",
  });

  const [selectedLists, setSelectedLists] = useState([]);

  const [step, setStep] = useState("search"); 
  // 'search' | 'confirm' | 'done' 같은 식으로 상태 분리

  const [thumbnailFile, setThumbnailFile] = useState(null); // file 객체 (서버로 업로드)

  const { roomCode } = useParams();      // 주소창에서 roomCode 추출
  const location = useLocation();
  const roomData = location.state?.roomData;

  useEffect(() => {
    if (!roomData) return; // roomData가 없으면 아무것도 하지 않음
  
    setRoomInfo({
      title: roomData.roomName,
      thumbnailPreview: roomData.imageURL,
      hashtags: roomData.tag,
      visibility: roomData.isPublic ? "전체 공개" : "친구 공개",
    });
    setStep("done");
  }, [roomCode, roomData]);
  


  return (
  <S.AllContainer>
    <TopBar/> 
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
        {step === "search" && (
          <PlayListSelector
            selectedLists={selectedLists}
            setSelectedLists={setSelectedLists}
            setStep={setStep}
            roomInfo={roomInfo}
          />
        )}

        {step === "confirm" && (
          <ConfirmedPlaylistView
            selectedLists={selectedLists}
            setStep={setStep}
            mode = "confirm"
            roomInfo={roomInfo}
            thumbnailFile={thumbnailFile}
          />
        )}
        {step === "done" && (
          <>
            <ConfirmedPlaylistView
              selectedLists={selectedLists}
              setSelectedLists={setSelectedLists}
              mode = "done"
              roomInfo={roomInfo}
              thumbnailFile={thumbnailFile}
            />
            <S.TableBorder />

           <PlayListSelector
              selectedLists={selectedLists}
              setSelectedLists={setSelectedLists}
              setStep={setStep}
              roomInfo={roomInfo}
            />
          
          </>
        )}
        </S.PlayListContainer>
      </S.RoomMainContainer>
    </S.RoomPageContainer>
  </S.AllContainer>
  )
}

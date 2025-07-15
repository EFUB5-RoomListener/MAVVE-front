import React, {useState} from 'react'
import RoomInfoHeader from '../../components/RoomPage/RoomInfoHeader';
import PlayListSelector from '../../components/RoomPage/PlayListSelector';
import * as S from "./RoomPage.style";
import SideBar from "../../components/Common/SideBar";
import TopBar from "../../components/Common/TopBar";
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
  // 'search' | 'confirm' | 'done' 같은 식으로 상태 분리



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
          />
        )}
        {step === "done" && (
          <>
            <ConfirmedPlaylistView
              selectedLists={selectedLists}
              setSelectedLists={setSelectedLists}
              mode = "done"
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

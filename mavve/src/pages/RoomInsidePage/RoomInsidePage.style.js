import styled from "styled-components";

// NowPlaying.jsx 

export const NowPlayingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin-left: 7.5rem;
    margin-top: 5.88rem;
    margin-right: 7rem;
`;


export const ShadowWrapper = styled.div`
  width: 29.125rem;
  height: 29.125rem;
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
`;

export const MaskedImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;

  -webkit-mask-image: radial-gradient(circle at center, transparent 50px, black 51px);
  -webkit-mask-composite: destination-in;
  mask-image: radial-gradient(circle at center, transparent 50px, black 51px);
  mask-composite: intersect;

`;

export const InnerShadow = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 5;
`;


export const NowPlayingBar = styled.div`
    width:  23.875rem;
    height: 1.5rem;
    padding: 2.125rem 2.1875rem;
    border-radius: 12.5rem;
    background: var(--w, #FCFEFF);

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--b, #3C3E44);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

export const StopBtn = styled.img`
  width: 1.125rem;
`;

export const NowTitle = styled.div`

`;
export const NowArtist = styled.div`

`;
export const NowDuration = styled.div`

`;

 

// RoomInsidePage.jsx 

export const RoomInsidePageContainer = styled.div`
    background: var(--6th, #46A1DB);
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const RoomLeaveBtn = styled.button`
    display: inline-flex;
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1.875rem;
    background: var(--fth, #CFEFFF);

    color: var(--b, #3C3E44);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; 

    margin-left: 105rem;
    margin-top: 2rem;
    cursor: pointer;
    
    
    &:hover {
    background-color:#B0CDDC
    }

    &:active {
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
`;



// RoomPlayList.jsx

export const PlayListAllContainer = styled.div`

`;

export const MusicListContainer = styled.div`
    width: ${({ isShrinked }) => (isShrinked ? "40.25rem" : "59.25rem")};
    height: 31.75rem;
    border-radius: 1rem;
    border: 3px solid var(--w, #FCFEFF);
    background: rgba(252, 255, 255, 0.50);
    overflow-y: auto;
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
    }

    position: relative;

    margin-top: 1rem;
    padding-top: 1.25rem;
    padding-left: 1rem;
    padding-bottom: 1.25rem;
`; 


export const CurrentPlayingBar = styled.div`
  width: ${({ isShrinked }) => (isShrinked ? "44.25rem" : "63.5rem")};
  position: absolute;
  top: 23.35rem;          
  left: 42.25rem;

  height: 4.5rem;

  border-radius: 0.5rem;
  background: var(--trd, #E4F6FF);
  z-index: 1; 
  pointer-events: none;
`;


export const PlayListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;


export const PlayListTitle = styled.div`
  color: var(--b, #3C3E44);

  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    
  margin-top: 3.56rem;
  margin-left: 1.56rem;
  
`

export const EditButton = styled.button`
  display: inline-flex;
  padding: 0.375rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  background: var(--fth, #CFEFFF);
  
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  margin-top: 3rem;
  right: 5rem;
  position: fixed;

  &:hover {
    background-color:#B0CDDC
    }
`;


export const ChatToggleBtn = styled.button`
  display: flex;
  padding: 0.375rem 0.5rem;
  gap: 0.5rem;

  border-radius: 1rem;

  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  background: ${({ isChatOpen }) => (isChatOpen ? '#CFEFFF' : 'none')};
  border: none;

  position: fixed;
  margin-top: 9rem;
  right: 5rem;
  
  &:hover {
  background-color: ${({ isChatOpen }) =>
    isChatOpen ? '#CFEFFF' : '#B0CDDC'};
}


  
`;

export const SongAddBtn = styled.button`
  position: absolute;
  z-index: 3; 

  margin-top: 1.75rem;
  margin-left: ${({ isChatOpen }) => (isChatOpen ? '36.75rem' : '55.75rem')};
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: #000;
  border-radius: 1rem;
  background: var(--w, #FCFEFF);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #F3F4F6;
  }

  &:active {
    background-color: #D7D9DD;
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
`;


export const SongDeleteBtn = styled.button`
  position: absolute;
  margin-left: ${({ isChatOpen }) => (isChatOpen ? '29.75rem' : '48.5rem')};
  bottom: 7rem;
  z-index: 3;        
  display: inline-flex;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  color: #000;
  border-radius: 1.875rem;
  background: #FCFFFF;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;

  &:hover {
    background-color: #F3F4F6;
  }

  &:active {
    background-color: #D7D9DD;
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
`;


export const PlayListInfo = styled.div`
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 0.44rem;
  display: flex;
  justify-content: space-between;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  align-items: center;
`

export const FriendsBtn = styled.button`
  display: inline-flex;
  padding: 0.375rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--b, #3C3E44);
  border-radius: 1rem;

  background: ${({ isActive }) => (isActive ? '#CFEFFF' : 'none')};
  border: none;

  position: relative;
  &:hover {
  background-color: ${({  isActive  }) =>
     isActive  ? '#CFEFFF' : '#B0CDDC'};
  }

  
`;


export const SongRow = styled.div`
  
  height: 4.5rem;
  color: var(--b, #3C3E44);
  position: relative; 
  z-index: 2;         

  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  
  background: ${({ isSelected }) =>
  isSelected ? '#65C3FF' : 'transparent'};
  padding-left: 1rem;
  margin-right: 1rem;

    
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const CheckBoxIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
`;

export const CheckIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
`;

export const SongTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: 1.5rem;

  div:first-child {
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
  }

  div:last-child {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; 
  }
`;


export const SongAlbum = styled.div`
  width: ${({ isChatOpen }) => (isChatOpen ? '11rem' : '30rem')};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; 
`;

export const SongDuration = styled.div`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-right: 3rem;
`;


export const CDWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin-left: 1.5rem;
`;


export const CDThumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%; 
  object-fit: cover;
`;


export const CDDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.9rem;
  height: 0.9rem;
  background-color: #A1D0ED;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Toast = styled.div`
  display: inline-flex;
  padding: 0.75rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: var(--w, #FCFEFF);

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; 
  color: var(--b, #3C3E44);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

`;

// FriendsModal.jsx

export const ModalContainer = styled.div`
  display: flex;
  width: 7.375rem;
  height: 15.75rem;
  padding: 1.5rem 3rem;
  flex-direction: column;
  justify-content: flex-start; /* 위에서부터 쌓기 */
  align-items: flex-start; /* 좌측 정렬 */
  border-radius: 1rem;
  background: var(--w, #FCFEFF);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 0.75rem;
  z-index: 5;

  position: absolute;
  margin-left: ${({ isChatOpen }) => (isChatOpen ? '27.25rem' : '46.25rem')};
  margin-top: 0.5rem;
`;

export const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2rem;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
`;

export const Name  = styled.div`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 

`;


// SongAddModal.jsx

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const AddModalContainer = styled.div`
  width: 35rem;
  height: 27.8rem;
  padding-top: 2rem;
  padding-bottom: 2.88rem;
  padding-left: 5rem;
  padding-right: 4rem;
  border-radius: 3rem;
  z-index: 1001;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;
  background: var(--w, #FCFEFF);
`;

export const SearchIcon = styled.img`
  width: 1.3125rem;
  height: 1.3125rem;
`;


export const SearchBarContainer = styled.div`
  width: 30.875rem;
  height: 1.375rem;
  padding: 0.6875rem 1.5625rem;
  display: flex; 
  align-items: center;
  gap: 0.5rem;

  border-radius: 1.5rem;
  background: var(--g1, #F3F4F6);
  margin-bottom: 2.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;

  &::placeholder {
    color: var(--g4, #93959B);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ModalSongRow = styled.div`
  height: 3rem;
  width: 34rem;
  padding: 0.75rem 0rem 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ isSelected }) => isSelected ? '#65C3FF' : 'transparent'};
  cursor: pointer;
`;

export const SongListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalThumbnail = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
`

export const ModalSongTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: 1.5rem;

  div:first-child {
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
  }

  div:last-child {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; 
  }
`;


export const ModalSongAlbum = styled.div`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; 
  width: 12rem;
  text-align: center;
`;

export const ModalSongDuration = styled.div`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-right: 0.75rem;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  display: inline-flex;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1.875rem;
  background: var(--pri, #009BFF);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; 
  color: var(--w, #FCFEFF);

  &:hover{
    background: #0079D3
  }

  &:active {
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
  `;


export const ModalCloseBtn = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem; 
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;
`;


// RoomChat.jsx

export const ChatContainer = styled.div`
  width: 20.125rem;
  height: 30.75rem;
  padding: 2rem 3rem 1.5rem 3rem;

  border-radius: 1rem;
  border: 3px solid var(--w, #FCFEFF);
  background: rgba(252, 255, 255, 0.50);

  margin-top: 9.6rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChatInputWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 23.125rem;
  height: 2.75rem;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  
  align-items: center;
  border-radius: 1.1875rem;
  background: var(--w, #FCFEFF);
  gap: 0.5rem;
`;

export const ChatMessageList = styled.div`
  width: 20.125rem;
  height: 26.0625rem;
  overflow-y: auto;

  /* 스크롤바 숨기기 (크로스 브라우징) */
  scrollbar-width: none;         /* Firefox */
  -ms-overflow-style: none;      /* IE/Edge */
  &::-webkit-scrollbar {
    display: none;               /* Chrome, Safari, Opera */
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SendInput = styled.input`
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; 
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  &::placeholder {
    text-align: center;
  }
`;
export const SendBtn = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;


export const ChatRow = styled.div`
  width: 20.125rem;
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  aspect-ratio: 1/1;
`;
export const ChatTextInfo = styled.div`
  margin-left: 1rem;
`;
export const UserNickname = styled.div`
  color: var(--b, #3C3E44);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ChatText = styled.div`
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;
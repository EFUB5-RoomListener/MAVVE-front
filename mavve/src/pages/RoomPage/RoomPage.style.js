import styled from 'styled-components';

//RoomCreateForm 

export const FormContainer = styled.div`
  position: relative;
  width: 960px;
  height: 601px;
  border-radius: 80px;
  background-color: #FCFEFF;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 0px 0px 28px;
`;

export const FormTop = styled.div`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;

  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
`;


export const FormBottom = styled.div`
  display: flex;
  gap: 24px;
`;

export const FormLeft = styled.div`
  flex: 1;
`;

export const FormDivider = styled.div`
  width: 0.5px;
  background-color: #000000;
  margin: 0 12px;
  height: 488px;
`;

export const ThumbnailBox = styled.label`
  width: 565px;
  height: 488px;
  aspect-ratio: 1 / 1;
  border-radius: 80px;
  background-color: #F3F4F6;
  border: 1px solid #3C3E44;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img:not([alt="업로드 아이콘"]) {
    width: 100%;
    height: 100%;
    border-radius: 80px;
    object-fit: cover;
  }
`;

export const ThumbnailInput = styled.input``;

export const Label = styled.label`
  color: #3C3E44;
  font-size: 24px;
  font-weight: 600;
`;


export const FormRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;

  label {
    font-size: 24px;
    font-weight: 600;
    margin-top: 8px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 268px;
  height: 56px;
  border-radius: 24px;
  background-color: ${({ $isTitleFocused }) => ($isTitleFocused ? '#D7D9DD' : '#F3F4F6')};
  border: 1px solid #3C3E44;
  display: flex;
  align-items: center;
  padding: 0 56px 0 16px;
  box-sizing: border-box;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
  color: #3C3E44;

  padding: 0 8px 0 0px;

  &::placeholder {
    color: #BFC4CA;
  }
`;

export const CharCount = styled.div`
  position: absolute;
  right: 16px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 2px;

  .normal {
    color: #BFC4CA;
  }

  .over {
    color: red;
  }
`;


export const HashContainer = styled.div`
  width: 268px;
  height: 136px;
  background-color: ${({ $isFocused }) => ($isFocused ? '#D7D9DD' : '#F3F4F6')};
  border: 1px solid #3C3E44;
  border-radius: 32px;
  padding: 16px 12px; 
  display: flex;
  flex-wrap: wrap;
  align-items: center;  
  gap: 12px 10px; 
  justify-content: flex-start;
  align-content: center; 
  box-sizing: border-box;
  overflow-y: auto;
`;



export const HashInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  padding: 4px 10px;
  border-radius: 999px;
  background: transparent;

  flex: 1 0 60px; 
  min-width: 60px;
  max-width: 100%;
`;



export const Tag = styled.span`
  background-color: #65C3FF;
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 8px;
  border-radius: 999px; /* pill 형태 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; /* 줄내림 방지 */
`;





export const BtnWrapper = styled.div`
  width: 268px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const FormBtn = styled.button`
  padding: 8px 24px;
  background-color:  ${({ disabled }) => disabled ? '#ccc' : '#009BFF'};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;

  width: 104px;
  height: 56px;

  cursor: pointer;
  &:hover{
    background: ${({ disabled }) => !disabled && '#0079D3'};
  }

  &:active {
    transform: ${({ disabled }) => !disabled && 'scale(0.925)'}; /* 크기 살짝 줄임 */
  }
`;



// VisibilityDropdown 

export const DropdownHeader = styled.div`
  box-sizing: border-box;
  width: 268px;
  height: 56px;
  padding: 0 16px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#FCFEFF' : '#F3F4F6'};
  border: 1px solid #3C3E44;
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 18px;

  span {
    color: ${({ $isSelected, $isOpen }) =>
      !$isSelected && !$isOpen ? '#BFC4CA' : '#3C3E44'};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;



export const DropdownList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 268px;
  background-color: #F3F4F6;
  border: 1px solid #3C3E44;
  border-radius: 24px;

  list-style: none;
  padding: 0;
  margin-top: 4px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  overflow: hidden;
`;

export const DropdownTopRow = styled.div`
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #BFC4CA;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;

  span {
    color: #3C3E44;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;


export const DropdownItem = styled.li`
  padding: 12px 16px;
  font-size: 18px;
  color: #3C3E44;
  cursor: pointer;

  &:hover {
    background-color: #F1F3F5;
  }
`;


// RoomInfoHeader

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999; /* 제일 위로 */
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 80px;
`;


export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3.94rem 0 2.38rem 4.47rem;
`;

export const HeaderThumbnail = styled.div`
  width: 13.375rem;
  height: 13.375rem;
  background-color: #D7D9DD;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EmptyThumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-color: #D7D9DD;
`;

export const HeaderTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const VisibilityText = styled.div`
  color: var(--b, #3C3E44);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 30px;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const RoomTitle = styled.h2`
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  color: #3C3E44;
`;

export const EditButton = styled.button`
  background: none;
  border: none;

  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }

`;

export const HashtagContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Hashtag = styled.span`
  color: var(--w, #FCFEFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: var(--sec, #65C3FF);
  `;

export const SubInfo = styled.div`
  color: #525252;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: right;
  
  margin-left: 1px;
  margin-right: 2px;

`;

export const DeleteBtnWrapper = styled.div`
  display: flex;
  
`;

export const RoomDeleteBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.5rem 1.5rem;
  height: 3.5rem;
  background: var(--fth, #CFEFFF);
  border-radius: 1.875rem;
  border: none;
  color: var(--b, #3C3E44);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; 
  position: sticky;
  margin-top: 9.9rem;

  &:active {
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }

  &:hover {
    background-color:#B0CDDC
    }
`

export const RoomEnterBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.5rem 1.5rem;
  height: 3.5rem;
  background: var(--fth, #CFEFFF);
  border-radius: 1.875rem;
  border: none;
  color: var(--b, #3C3E44);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; 
  margin-top: 9.9rem;
  margin-left: 20rem;
  &:active {
    transform: scale(0.925); 
  }

  &:hover {
    background-color:#B0CDDC
    }
`



// RoomPage.jsx
export const AllContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding-left: 1.5rem;
`;


export const RoomPageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;



export const RoomMainContainer = styled.div`
  width: 97.9375rem;
  height: 52.3rem;

  display: flex;
  flex-direction: column;

  background-color: #FCFEFF;
  border: 3px solid #FCFEFF;
  border-radius: 1rem;

  min-height: fit-content;   /* ✅ 내용에 따라 늘어남 */
  box-sizing: border-box;
`;

export const PlayListContainer = styled.div`
  flex: 1;
  background-color: #DFF4FF;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  display: flex;
  flex-direction: column;
  padding-top: 32px;
`;

// PlayListSelector.jsx

export const SelectorContainer = styled.div`
  padding-left: 6.5rem;
  padding-top: 1.5rem;
`;

export const SelectorTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--b, #3C3E44);
  margin-bottom: 1.12rem;
`;


export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;


export const PlayListSearchBar = styled.input`
  width: 48.875rem;
  height: 2rem;
  padding: 0.5rem 1.5rem 0.5rem 70px; /* 왼쪽에 아이콘 들어갈 공간 확보 */
  border-radius: 1.5rem;
  border: none;
  background: var(--w, #FCFEFF);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  


  &::placeholder {
    color: #aaa;
  }

`;



export const SearchIconStyled = styled.img`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
`;

export const SearchedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.875rem;
  margin-left: 6rem;
  margin-top: 2.75rem;
`;

export const PlayListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.5rem;

  border-radius: 0.5rem;
  padding-left: 2rem;

  background-color: ${({ selected }) => (selected ? '#65C3FF' : 'transparent')};

  &:hover{
    background-color: ${({ selected }) => (!selected && 'rgba(101, 195, 255, 0.50)')};
  }
`;

export const Thumbnail = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-left: 3.5rem;
`;

export const PlaylistTitle = styled.div`
  width: 25rem; 
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin-left: 2rem;
`;

export const PlaylistTag = styled.div`
  width: 4rem; 
  height: 1.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;

  background-color: ${({ selected }) => (selected ? '#FCFEFF' : '#65C3FF')};
  color: ${({ selected }) => (selected ? '#3C3E44' : '#FCFEFF')};
`;

export const SongCount = styled.div`
  color: var(--b, #3C3E44);
  margin-left: 14.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const TotalDuration = styled.div`
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-left: 15.5rem;
`;

export const PlayListAddBtn = styled.button`
  border-radius: 1.875rem;
  background: ${({ disabled }) => disabled ? '#ccc' : '#009BFF'};
  color: var(--w, #FCFEFF);
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; 

  align-self: flex-end; 
  margin-top: 1rem;      
  margin-right: 3.38rem;    
  cursor: pointer;
  &:hover{
    background: #0079D3
  }

  &:active {
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
`;

export const NoResultText = styled.div`
  color: var(--g4, #93959B);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 3.75rem;
  margin-left: 21.69rem;
`;


export const CheckboxWrapper = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const CheckboxBase = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CheckboxOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // 클릭 이벤트 방해 안 받게
`;


//ConfirmedPlaylistView.jsx

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  margin-left: 5rem;
  margin-bottom: 0.25rem;
  padding-left: 2.75rem;
`;

export const TableBorder = styled.div`
  width: 90rem;
  height: 0.03125rem;

  background: #3B3030;
  margin-left: 5rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const TableRow = styled.div`
  padding-left: 2.75rem;

  position: relative;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  height: 3rem;

  margin-left: 5rem;
  margin-right: 3rem;
  

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  background-color: ${({ selected }) => (selected ? '#65C3FF' : 'transparent')};
  
`;

export const IndexColumn = styled.div`
  width: 4.5rem;
  display: flex;
  align-items: center;
`;

export const TitleColumn = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TagTopColumn = styled.div`
  width: 19.5rem;
  display: flex;
  align-items: center;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  width: 19.5rem;   // ← TagColumn과 동일하게 맞춰야 가로정렬 안 깨짐
`;


export const TagColumn = styled.div`
  display: flex;
  align-items: center;


  background-color: ${({ selected }) => (selected ? "#fff" : "#65C3FF")};
  color: ${({ selected }) => (selected ? '#3C3E44' : '#FCFEFF')};
  border-radius: 16px;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  
  display: inline-flex;
  padding: 4px 8px;
  gap: 8px;
  
`;

export const CountColumn = styled.div`
  width: 18rem;
  display: flex;
  align-items: center;
`;

export const TimeColumn = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
`;

export const DeleteColumn = styled.div`
  position: relative;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbnailCell = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const TitleTextCell = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; 
  color: var(--b, #3C3E44);

  margin-left: 1.5rem;
`;


export const CreateRoomButton = styled.button`
  margin-top: 5rem;
  margin-left: 86rem;
  height: 3.5rem;
  width: 7.625rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  border-radius: 1.875rem;
  background: var(--pri, #009BFF);

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--w, #FCFEFF);

  cursor: pointer;
  &:hover{
    background: #0079D3
  }

  &:active {
    transform: scale(0.925); /* 크기 살짝 줄임 */
  }
`;


// DeleteWrapper는 전체화면 투명 클릭 레이어 그대로 유지
export const DeleteWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: transparent;
`;

// DeleteContent만 위치 조정 (예: 화면 오른쪽 하단 근처)
export const DeleteContent = styled.div`
  position: absolute; /* DeleteWrapper 기준 */
  top: 55%;
  left: 85%;
  transform: translate(-50%, -50%); // 정중앙 기준 보정

  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--w, #FCFEFF);
  border-radius: 8px;
  z-index: 1001;
`;


export const DeleteText = styled.div`
  cursor: pointer;
  color: var(--b, #3C3E44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
`;

 
// RoomDeleteModal.jsx

export const DeleteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 다른 요소 위에 올라오게 */
`;

export const DeleteModalContainer = styled.div`
  background: var(--w, #FCFEFF);
  width: 44rem;
  height: 17.0625rem;
  border-radius: 5rem;
  background: var(--w, #FCFEFF);
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  margin-left: 40.9rem;
  margin-top: 2rem;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
`;

export const DeleteTextTitle = styled.div`
  color: var(--b, #3C3E44);
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 5rem;
  margin-top: 4rem;
`;

export const DeleteTextBody = styled.div`
  color: var(--g4, #93959B);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1rem;
  margin-left: 5rem;
`;
export const CancelBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: var(--fth, #CFEFFF);
  margin-top: 3rem;
  margin-left: 27.5rem;
  transition: filter 0.15s ease, transform 0.1s ease;

 
  &:hover {
    background-color:#B0CDDC
    }
  &:active {
    transform: scale(0.925);
  }
`;

export const DeleteConfirmBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: var(--pri, #009BFF);
  margin-top: 3rem;
  margin-left: 1.5rem;
  transition: filter 0.15s ease, transform 0.1s ease;

 
  &:hover{
    background: #0079D3;
  }
  &:active {
    transform: scale(0.925);
  }
`;

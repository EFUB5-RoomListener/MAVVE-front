import React, {useState} from "react";
import UploadIcon from "../../assets/RoomPage/pic-upload.svg";
import CloseIcon  from "../../assets/RoomPage/close.svg";
import VisibilityDropdown from "./VisibilityDropdown";
import * as S from "../../pages/RoomPage/RoomPage.style";
import { useParams } from "react-router-dom";
import { updateRoom } from "../../api/room";

function RoomCreateForm({roomInfo, setRoomInfo, onClose, setThumbnailFile, step}){
    const [title, setTitle] = useState(roomInfo.title || "");
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    
    const [thumbnailPreview, setThumbnailPreview] = useState(roomInfo.thumbnailPreview || ""); // 이미지 URL 
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setThumbnailFile(file);
        setThumbnailPreview(URL.createObjectURL(file));
    }

    const [isTitleFocused, setIsTitleFocused] = useState(false);
   

    const [tags, setTags] = useState(roomInfo.hashtags || []); // 해시태그 배열 
    const [input, setInput] = useState(""); // 해시태그 입력 내용 
    const [isFocused, setIsFocused] = useState(false); // 클릭시 상태 변경용 
    const [isComposingTag, setIsComposingTag] = useState(false);

    const handleKeyDown = (e) => {
        if (e.isComposing || isComposingTag) return;
        
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = input.trim();
        
            if (!tags.includes(newTag) && tags.length < 4) {
              setTags([...tags, newTag]);
            }
        
            setInput("");
            setIsComposingTag(false);
            setIsFocused(false);
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
      };
    
    const [selected, setSelected] = useState(roomInfo.visibility || ""); 


    

    const { roomCode } = useParams();
    const handleSave = async () => {
        if (!isFormComplete) return;

        const updatedData = {
            thumbnailPreview,
            title,
            hashtags: tags,
            visibility: selected,
          };
      
        setRoomInfo(updatedData); // 프론트 상태는 항상 업데이트

        // step이 done일 때만 서버에도 반영
        if (step === "done" && roomCode) {
            try {
            await updateRoom(roomCode, {
                roomName: title,
                tag: tags,
                imageURL: thumbnailPreview,
                isPublic: selected === "전체 공개",
            });     
            console.log("수정된 정보 서버에 저장 완료");
            } catch (error) {
            console.error("방 정보 저장 실패", error);
            }
        }
        onClose(); 
    };

    
    //입력 완료되었는지 검사
    const isFormComplete =
        title.trim() !== "" &&
        typeof thumbnailPreview === "string" &&
        thumbnailPreview.trim() !== "" &&
        tags.length > 0 &&
        selected !== "" && selected !== null;



    return(
        <S.FormContainer>
            <S.FormTop>
                방 세부 정보 설정 
                <S.CloseBtn onClick={onClose}>
                    <img src={CloseIcon} width="12px" height="12px"/>
                </S.CloseBtn>
            </S.FormTop>

            <S.FormBottom>
                <S.FormLeft>
                <S.ThumbnailBox>
                    {thumbnailPreview ? (
                        <img src={thumbnailPreview} alt="썸네일 미리보기" />
                    ) : (
                        <img src={UploadIcon} alt="업로드 아이콘" width="48px" height="48px"/>
                    )}
                    <S.ThumbnailInput
                        style={{ display: 'none' }}
                        accept="image/*"
                        type="file"
                        onChange={handleThumbnailChange}
                    />
                </S.ThumbnailBox>
                </S.FormLeft>
                
                <S.FormDivider />

                <S.FormRight>
                    <S.Label htmlFor="roomTitle">제목</S.Label>
                    <S.InputWrapper $isTitleFocused={isTitleFocused}>
                    <S.StyledInput
                        value={title}
                        onChange={handleTitleChange}
                        onFocus={() => setIsTitleFocused(true)}
                        onBlur={() => setIsTitleFocused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                            }
                          }}
                        placeholder="방의 제목을 입력해주세요!"
                        maxLength={20}
                    />
                    <S.CharCount>
                        <span className={title.length > 15 ? 'over' : ''}>{title.length}</span>
                        <span className="normal">/15</span>
                    </S.CharCount>
                    </S.InputWrapper>




                    <S.Label>해시태그</S.Label>
                    <S.HashContainer
                    $isFocused={isComposingTag || isFocused}

                    onClick={() => {
                        setIsFocused(true);
                        setIsComposingTag(true);
                        setIsFocused(true);
                    }}
                    >
                    {tags.map((tag) => (
                        <S.Tag key={tag} onClick={() => handleDeleteTag(tag)}>#{tag}</S.Tag>
                    ))}

                    {tags.length < 4 && (
                      <S.HashInput
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault(); // 줄바꿈 방지
                          // 영어 태그 입력일 때만 여기서 처리
                          const newTag = input.trim();
                          if (!isComposingTag && newTag !== "" && !tags.includes(newTag) && tags.length < 4) {
                            setTags([...tags, newTag]);
                            setInput("");
                          }
                        }
                      }}
                      onCompositionStart={() => setIsComposingTag(true)}
                      onCompositionEnd={(e) => {
                        setIsComposingTag(false);
                        // 한글 입력 마무리되었을 때, 자동으로 태그 추가
                        const newTag = input.trim();
                        if (newTag !== "" && !tags.includes(newTag) && tags.length < 4) {
                          setTags([...tags, newTag]);
                          setInput("");
                        }
                      }}
                      onBlur={() => {
                        setIsFocused(false);
                        setIsComposingTag(false);
                      }}
                      onFocus={() => {
                        setIsFocused(true);
                        setIsComposingTag(true);
                      }}
                    />
                    
                     
                    )}
                    </S.HashContainer>




                    <S.Label>공개 여부</S.Label>
                    <VisibilityDropdown selected={selected} setSelected={setSelected}/> 

                    <S.BtnWrapper>

                    <S.FormBtn type="button" onClick={handleSave} disabled={!isFormComplete}>저장하기</S.FormBtn>

                    </S.BtnWrapper>
                </S.FormRight>
                            
            </S.FormBottom>

            
        </S.FormContainer>
    );
}


export default RoomCreateForm;
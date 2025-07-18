import React, {useState} from "react";
import UploadIcon from "../../assets/RoomPage/pic-upload.svg";
import CloseIcon  from "../../assets/RoomPage/close.svg";
import VisibilityDropdown from "./VisibilityDropdown";
import * as S from "../../pages/RoomPage/RoomPage.style";

function RoomCreateForm({roomInfo, setRoomInfo, onClose}){
    const [title, setTitle] = useState(roomInfo.title || "");
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const [thumbnailFile, setThumbnailFile] = useState(null); // file 객체 (서버로 업로드)
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
        if (isComposingTag) return; 
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


    


    const handleSave = () => {

        setRoomInfo({
            thumbnailPreview,
            title,
            hashtags: tags,
            visibility: selected,
          });          
        onClose(); 
    }

    
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
                    <S.InputWrapper isTitleFocused={isTitleFocused}>
                    <S.StyledInput
                        value={title}
                        onChange={handleTitleChange}
                        onFocus={() => setIsTitleFocused(true)}
                        onBlur={() => setIsTitleFocused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              e.target.blur(); // 엔터 누르면 입력 완료!
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
                    isFocused={isComposingTag || isFocused}

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
                        onKeyDown={handleKeyDown}
                        onCompositionStart={() => setIsComposingTag(true)}
                        onCompositionEnd={() => setIsComposingTag(false)}
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

                    <S.FormBtn onClick={handleSave} disabled={!isFormComplete}>저장하기</S.FormBtn>

                    </S.BtnWrapper>
                </S.FormRight>
                            
            </S.FormBottom>

            
        </S.FormContainer>
    );
}


export default RoomCreateForm;
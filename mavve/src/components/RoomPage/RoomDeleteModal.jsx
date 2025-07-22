import React from "react";
import CloseIcon  from "../../assets/RoomPage/close.svg";
import * as S from '../../pages/RoomPage/RoomPage.style';

function RoomDeleteModal({onClose, roomTitle}){
    const handleDelete = () => {
        //추후에 삭제 처리 넣기
        onClose(); // 모달 닫기
      };
    return(
        <S.DeleteModalOverlay onClick={onClose}>
            <S.DeleteModalContainer onClick={(e) => e.stopPropagation()}>
                <S.ModalCloseBtn onClick={onClose}>
                    <img src={CloseIcon} width="12px" height="12px"/>
                </S.ModalCloseBtn>
            <S.DeleteTextTitle>내가 만든 방에서 삭제할까요?</S.DeleteTextTitle>  
            <S.DeleteTextBody>내가 만든 방에서 {roomTitle}이(가) 삭제됩니다</S.DeleteTextBody> 

            <S.CancelBtn onClick={onClose}>취소하기</S.CancelBtn> 
            <S.DeleteConfirmBtn onClick={handleDelete}>삭제하기</S.DeleteConfirmBtn>
            </S.DeleteModalContainer>
        </S.DeleteModalOverlay>

    );
}

export default RoomDeleteModal;
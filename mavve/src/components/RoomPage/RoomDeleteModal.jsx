import React from "react";
import CloseIcon from "../../assets/RoomPage/close.svg";
import * as S from "../../pages/RoomPage/RoomPage.style";
import { deleteRoom } from "../../api/room";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function RoomDeleteModal({ onClose, roomTitle, onSuccess }) {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = async () => {
    try {
      const response = await deleteRoom(roomCode);
      console.log("방 삭제 완료:", response);

      onClose(); // 모달 닫기

      // 마이페이지에서 실행된게 아니라면 홈으로 이동
      if (!location.pathname.startsWith("/mypage")) {
        navigate("/");
      }
      onSuccess?.();
    } catch (error) {
      console.error("방 삭제 실패:", error);
    }
  };

  return (
    <S.DeleteModalOverlay onClick={onClose}>
      <S.DeleteModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalCloseBtn onClick={onClose}>
          <img src={CloseIcon} width="12px" height="12px" />
        </S.ModalCloseBtn>
        <S.DeleteTextTitle>내가 만든 방에서 삭제할까요?</S.DeleteTextTitle>
        <S.DeleteTextBody>
          내가 만든 방에서 {roomTitle}이(가) 삭제됩니다
        </S.DeleteTextBody>

        <S.CancelBtn onClick={onClose}>취소하기</S.CancelBtn>
        <S.DeleteConfirmBtn onClick={handleDelete}>삭제하기</S.DeleteConfirmBtn>
      </S.DeleteModalContainer>
    </S.DeleteModalOverlay>
  );
}

export default RoomDeleteModal;

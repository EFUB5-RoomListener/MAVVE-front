import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Common/RoomComponent.style";
import filled from "../../assets/Common/filled_heart.svg";
import unfilled from "../../assets/Common/unfilled_heart.svg";
import { toggleRoomLike } from "../../api/room";
import EditIcon from "../../assets/Common/icn_edit.svg";
import DeleteIcon from "../../assets/Common/icn_delete.svg";

export default function RoomComponent({
  data,
  isMyRoom,
  contextMenuTargetId,
  setContextMenuTargetId,
  onLikeToggle,
  onEditClick,
  onDeleteClick,
}) {
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleToggleLike = async (e) => {
    e.stopPropagation();
    try {
      const response = await toggleRoomLike(data.roomId);
      onLikeToggle({
        roomId: data.roomId,
        liked: response.liked,
        likeCount: response.likeCount,
      });
    } catch (error) {
      console.error("좋아요 API 호출 실패: ", error);
      alert("좋아요 처리 중 오류가 발생했습니다.");
    }
  };

  const handleRoomClick = () => {
    // roomId가 존재하는 경우에만 이동
    if (data.roomId) {
      navigate(`/rooms/${data.roomId}`);
    } else {
      alert("방 코드가 존재하지 않습니다.");
    }
  };

  const handleContextMenu = (e) => {
    if (!isMyRoom) return;
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setContextMenuTargetId(data.roomId);
  };

  const handleCloseMenu = () => {
    setContextMenuTargetId(null);
  };

  const handleDelete = () => {
    handleCloseMenu();
    onDeleteClick(data);
  };

  const handleEdit = () => {
    handleCloseMenu();
    onEditClick(data);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (
        typeof setContextMenuTargetId === "function" &&
        contextMenuTargetId !== null
      ) {
        setContextMenuTargetId(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [contextMenuTargetId]);

  const isMenuOpen = contextMenuTargetId === data.roomId;

  return (
    <S.RoomContainer
      onClick={handleRoomClick}
      onContextMenu={handleContextMenu}
    >
      <S.Thumbnail $image={data.imageURL}>
        {Array.isArray(data.tag) && data.tag.length > 0 && (
          <S.HashtagWrapper>
            <S.Hashtag>#{data.tag[0]}</S.Hashtag>{" "}
            {/* 썸네일에는 첫 번째 태그만 표시*/}
          </S.HashtagWrapper>
        )}
      </S.Thumbnail>
      <S.Info>
        <S.InfoText>
          <S.InfoTitle>{data.roomName}</S.InfoTitle>
          <S.InfoTime></S.InfoTime>
        </S.InfoText>
        <S.Liked>
          <S.HeartIcon onClick={handleToggleLike}>
            <img src={data.liked ? filled : unfilled} alt="heart" />
          </S.HeartIcon>
          <S.LikedNum>{data.likeCount}</S.LikedNum>
        </S.Liked>
      </S.Info>

      {isMyRoom && isMenuOpen && (
        <S.ContextMenu
          style={{
            top: menuPosition.y,
            left: menuPosition.x,
          }}
        >
          <S.EditMenu
            onClick={(e) => {
              e.stopPropagation();
              handleEdit();
            }}
          >
            <img
              src={EditIcon}
              alt="Edit"
              style={{ width: "1rem", height: "1rem", aspectRatio: "1/1" }}
            />
            세부 정보 수정하기
          </S.EditMenu>
          <S.DeleteMenu
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <img
              src={DeleteIcon}
              alt="Delete"
              style={{ width: "1rem", height: "1rem", aspectRatio: "1/1" }}
            />
            삭제하기
          </S.DeleteMenu>
        </S.ContextMenu>
      )}
    </S.RoomContainer>
  );
}

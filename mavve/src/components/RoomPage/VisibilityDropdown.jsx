import React, { useState } from "react";
import DownIcon from "../../assets/RoomPage/dropdown_down.svg";
import UpIcon  from "../../assets/RoomPage/dropdown_up.svg";
import * as S from "../../pages/RoomPage/RoomPage.style";

function VisibilityDropdown({selected, setSelected}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {!isOpen ? (
        <S.DropdownHeader
          onClick={() => setIsOpen(true)}
          $isSelected={selected === '전체 공개' || selected === '친구 공개'}
          $isOpen={isOpen}
        >
      
          <span>{selected || "전체 공개"}</span>
          <img src={DownIcon} width="26px" height="26px" />
        </S.DropdownHeader>
      ) : (
        <S.DropdownList $isOpen={isOpen}>
          <S.DropdownTopRow onClick={() => setIsOpen(false)}>
            <span>{selected || "전체 공개"}</span>
            <img src={UpIcon} width="26px" height="26px" />
          </S.DropdownTopRow>

          <S.DropdownItem onClick={() => {
            setSelected("전체 공개");
            setIsOpen(false);
          }}>
            전체 공개
          </S.DropdownItem>

          <S.DropdownItem onClick={() => {
            setSelected("친구 공개");
            setIsOpen(false);
          }}>
            친구 공개
          </S.DropdownItem>
        </S.DropdownList>
      )}
    </div>
  );
}

export default VisibilityDropdown;

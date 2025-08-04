import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 960px;
  height: 601px;
  border-radius: 80px;
  background-color: #fcfeff;
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
  background-color: #f3f4f6;
  border: 1px solid #3c3e44;
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

export const FormRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Label = styled.label`
  color: #3c3e44;
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 268px;
  height: 56px;
  border-radius: 24px;
  background-color: ${({ $isTitleFocused }) =>
    $isTitleFocused ? "#D7D9DD" : "#F3F4F6"};
  border: 1px solid #3c3e44;
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
  color: #3c3e44;
  padding: 0 8px 0 0px;

  &::placeholder {
    color: #bfc4ca;
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
    color: #bfc4ca;
  }

  .over {
    color: red;
  }
`;

export const HashContainer = styled.div`
  width: 268px;
  height: 136px;
  background-color: ${({ $isFocused }) => ($isFocused ? "#D7D9DD" : "#F3F4F6")};
  border: 1px solid #3c3e44;
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
  background-color: #65c3ff;
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 8px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const BtnWrapper = styled.div`
  width: 268px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const FormBtn = styled.button`
  padding: 8px 24px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#009BFF")};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  width: 104px;
  height: 56px;
  cursor: pointer;

  &:hover {
    background: ${({ disabled }) => !disabled && "#0079D3"};
  }

  &:active {
    transform: ${({ disabled }) => !disabled && "scale(0.925)"};
  }
`;

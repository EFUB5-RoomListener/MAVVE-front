import styled from "styled-components";

export const OneLineNoteModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OneLineNoteModalBox = styled.div`
  width: 44rem;
  height: 23.5rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background: var(--w);
  display: flex;
  flex-direction: column;
  margin: 18.75rem 31.25rem 25.25rem 44.75rem;
`;

export const OneLineNoteHeader = styled.div`
  display: flex;
  width: 37rem;
  height: 2rem;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  color: var(--b);
  font-weight: 500;
  font-size: 1.875rem;
  margin: 2rem 2rem 0.69rem 5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    cursor: pointer;
  }
`;
export const BtnWrapper = styled.div`
  width: 7.5rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-right: 4rem;
  margin-left: 32.5rem;
`;
export const SelectBtn = styled.button`
  background: none;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  width: 28rem; // 36rem;
  height: 6.3125rem; //1.5325rem; //8.3125rem; //
  margin: 1.25rem 4rem 1.25rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid var(--b);
  background-color: ${({ $isFocused }) =>
    $isFocused ? "var(--g2)" : "var(--g1)"};
  resize: none;
  text-align: center;
  padding: 1rem 4rem 1rem 4rem;
  color: var(--b, #3c3e44);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */

  &::placeholder {
    color: var(--g4, #93959b);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    padding-top: 2.3rem;
  }
`;

export const CharacterCount = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 5rem;
  pointer-events: none;
  text-align: right;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
`;

export const CurrentCount = styled.span`
  color: ${({ $colorState }) =>
    $colorState === "g4"
      ? "var(--g4)"
      : $colorState === "b"
      ? "var(--b)"
      : "var(--red)"};
`;

export const TotalCount = styled.span`
  color: ${({ $isFocused }) => ($isFocused ? "var(--b)" : "var(--g4)")};
`;

export const SaveBtn = styled.button`
  display: flex;
  width: 6.5rem;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: ${({ disabled }) => (disabled ? "var(--g2)" : "var(--pri)")};
  color: var(--w);
  align-self: flex-end;
  margin: 0 2rem 1.5rem 0;

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "var(--g2)" : "#007CCC")};
  }

  &:active {
    padding: ${({ disabled }) =>
      disabled ? "0.5rem 1.5rem" : " 0.375rem 1.375rem"};
    width: ${({ disabled }) => (disabled ? "6.5rem" : "6.25rem")};
    height: ${({ disabled }) => (disabled ? "3.5rem" : "3.25rem")};
  }
`;

import styled from "styled-components";

export const EmojiSelectModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmojiSelectModalBox = styled.div`
  width: 44rem;
  height: 27.8125rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background: var(--w);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 18.75rem 31.25rem 25.25rem 44.75rem;
`;

export const EmojiSelectHeader = styled.div`
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

export const EmojiList = styled.div`
  width: 34.8rem;
  height: 17.3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0 3.3rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 4rem;
  flex-grow: 1;
`;

export const EmojiItem = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $active }) => ($active ? "var(--g2)" : "transparent")};
  border-radius: 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  &:hover {
    border-radius: 1rem;
    background: var(--g1);
  }
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
  line-height: 1.5rem;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "var(--g2)" : "#007CCC")};
  }

  &:active {
    margin-top: ${({ disabled }) => (disabled ? "0" : "0.25rem")};
    padding: ${({ disabled }) =>
      disabled ? "0.5rem 1.5rem" : "0.375rem 1.375rem"};
    width: ${({ disabled }) => (disabled ? "6.5rem" : "6.25rem")};
    height: ${({ disabled }) => (disabled ? "3.5rem" : "3.25rem")};
  }
`;

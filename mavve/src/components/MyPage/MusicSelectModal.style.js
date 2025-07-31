import styled from "styled-components";

export const MusicSelectModalBackground = styled.div`
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

export const MusicSelectModalBox = styled.div`
  width: 44rem;
  height: 32.625rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background: var(--w);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 18.75rem 31.25rem 25.25rem 44.75rem;
`;

export const MusicSelectHeader = styled.div`
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

export const SearchBar = styled.div`
  display: flex;
  width: 30rem;
  height: 1.38rem;
  padding: 0.6875rem 1.5625rem;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background: var(--g1);
  margin: 0.88rem 5rem 0.75rem 5rem;

  img {
    width: 1.3125rem;
    height: 1.3125rem;
    margin-right: 5.31rem;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--b);
    outline: none;

    &::placeholder {
      color: var(--g4);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const EmptyMessage = styled.div`
  width: 35rem;
  height: 22.5rem;
  display: flex;
  padding-top: 3.75rem;
  justify-content: center;
  color: var(--g4, #93959b);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MusicList = styled.div`
  display: flex;
  width: 35rem;
  flex-direction: column;
  align-items: flex-start;
  height: 22.5rem;
  overflow-y: auto;

  /* 스크롤바 기본 숨김 (Chrome, Edge 등) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 3px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #ccc; /* hover 시 연하게 표시 */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Firefox 지원용 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: #ccc transparent;
  }
`;

export const MusicItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 0;
  width: 100%;

  cursor: pointer;
  border-radius: 0.5rem;
  background: ${({ $active }) => ($active ? "var(--sec)" : "transparent")};

  &:hover {
    background: ${({ $active }) =>
      $active ? "var(--sec)" : "rgba(101, 195, 255, 0.5)"};
  }
`;

export const SongImage = styled.img`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: var(--g2);
  margin: 0 1.5rem 0 2rem;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
  flex: 2;
  min-width: 0;
`;

export const SongTitle = styled.div`
  max-width: 11rem;
  align-self: stretch;
  color: var(--b, #3c3e44);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SongArtist = styled.div`
  color: var(--b, #3c3e44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongAlbum = styled.div`
  color: var(--b, #3c3e44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  margin-right: 1.5rem; //9.12rem;
  flex: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const SongDuration = styled.div`
  color: var(--b, #3c3e44);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  margin-right: 1.81rem;
  flex: 0.5;
  text-align: right;
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
    padding: ${({ disabled }) =>
      disabled ? "0.5rem 1.5rem" : "0.375rem 1.375rem"};
    width: ${({ disabled }) => (disabled ? "6.5rem" : "6.25rem")};
    height: ${({ disabled }) => (disabled ? "3.5rem" : "3.25rem")};
  }
`;

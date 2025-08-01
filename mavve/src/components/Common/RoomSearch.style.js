import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 50.9375rem;
  height: 2.6875rem;
  padding: 0.6875rem 1.5rem;
  align-items: center;
  gap: 5.31rem;
  background: var(--w);
  border-radius: 24px;
  box-sizing: border-box;
  box-shadow: ${({ $isFocused }) =>
    $isFocused ? "0 0 0 2px var(--sec)" : "none"};

  & > input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ $isFocused }) => ($isFocused ? "var(--b)" : "#93959b")};
  }

  &:hover {
    background: var(--g2);
    transition: background 0.2s;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  width: 46.9375rem;
  min-height: 3.0625rem;
  max-height: 21.31rem;
  padding: 2rem 1.75rem 2rem 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  position: absolute;
  top: 3.2em;
  left: 0;
  z-index: 9;
  border-radius: 1rem;
  background: var(--w);
  overflow-y: scroll;

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

export const ItemWrapper = styled.div``;

export const ResultItem = styled.div`
  display: flex;
  width: 45rem;
  height: 3.0625rem;
  padding: 0.5rem 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-radius: 0.5rem;
    background: var(--g1);
  }

  &:active {
    border-radius: 0.5rem;
    background: var(--g2);
  }
`;

export const EmptyMessage = styled.div`
  width: 44.4375rem;
  display: flex;
  padding: 2.06rem 0;
  justify-content: center;
  color: var(--g4, #93959b);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RoomCover = styled.div`
  display: flex;
  width: 3.0625rem;
  height: 3.0625rem;
  padding: 0.1875rem 0.1875rem 0.25rem 0.1875rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 0.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.625rem;
  border: 0.5px solid #3c3e44;
  background: var(--w);
`;

export const RoomWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
`;

export const RoomThumbnail = styled.div`
  width: 2.6875rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  border: 0.5px solid #3c3e44;
  background: var(--g2);
`;

export const RoomInfo = styled.div`
  display: flex;
  height: 2.81rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-right: 1.5rem;

  color: #000000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
`;

export const RoomText = styled.div`
  display: -webkit-box;
  width: 9rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HashtagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 24rem;
  gap: 0.5rem;
  overflow: hidden;
`;

export const Hashtag = styled.div`
  display: inline-block;
  min-width: 3rem;
  max-width: 5.75rem;
  padding: 0.25rem 0.5rem;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  background: var(--sec);

  color: var(--w, #fcfeff);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Playtime = styled.div`
  color: #000000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  margin-left: 2rem;
`;

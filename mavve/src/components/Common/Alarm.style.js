import styled from "styled-components";

export const AlarmContainer = styled.div`
  display: flex;
  width: 27.75rem;
  padding: 1.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #fcfeff;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 3rem;
  right: 4rem;
  box-sizing: border-box;
  z-index: 10;
`;

export const AlarmItem = styled.div`
  display: flex;
  width: 26.25rem;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;
  color: var(--g4, #93959b);
  text-align: center;
  padding: 0.75rem;
  margin-left: 0.75rem;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */

  img {
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1/1;
    margin-right: 4rem;
  }
`;

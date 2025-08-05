import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: inline-flex;
  padding: 2rem 7.9375rem 1.875rem 34.25rem;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 77.8125rem;
  height: 4rem;
`;

export const Logo = styled.div`
  width: 2.75rem;
  height: 2rem;
  margin-left: 1.81rem;
  margin-right: 1.44rem;
  flex-shrink: 0;
  aspect-ratio: 11/8;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: inline-flex;
  margin-left: 13.88rem;
  align-items: center;
  gap: 1.5rem;

  position: relative;
`;

export const AlertButton = styled.div`
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const ProfileButton = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: var(--b);
  border-radius: 50px;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50px;
  }
`;

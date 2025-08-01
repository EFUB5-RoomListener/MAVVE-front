import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 12.75rem;
  top: 4rem;
  right: 0rem;
  z-index: 10;
  border-radius: 1rem;
  background: var(--w);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  padding: 1.38rem 0.5rem;
`;

export const MenuItem = styled.button`
  display: flex;
  width: 11.75rem;
  height: 2.75rem;
  padding: 0.375rem 1rem;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: #000000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */

  &:hover {
    border-radius: 0.5rem;
    background: var(--g1);
  }

  &:active {
    border-radius: 0.5rem;
    background: var(--g2);
  }
`;

export const MenuIcon = styled.img`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
`;

export const Divider = styled.div`
  width: 9.375rem;
  height: 0.5rem;
  border-top: 1px solid #525252;
  margin-top: 0.5rem;
`;

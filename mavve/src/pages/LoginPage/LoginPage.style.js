import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #7dc1ed, #009bff);
`;

export const LoginBox = styled.div`
  width: 52rem;
  height: 33.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 87px;
  border: 3px solid #fcfeff;
  background: rgba(252, 254, 255, 0.5); //#FCFEFF
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const LogoMavve = styled.img`
  width: 9.5rem;
  height: 9.0625rem;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 4.31rem;
  color: var(--w);
`;

export const LoginButton = styled.img`
  width: 37.5rem;
  height: 5.625rem;
  cursor: pointer;
  border: none;
`;

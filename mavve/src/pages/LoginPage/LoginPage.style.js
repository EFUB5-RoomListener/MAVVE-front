import styled from "styled-components";

const colors = {
  pri: "#009BFF",
  sec: "#65C3FF",
  trd: "#E4F6FF",
  g1: "#F3F4F6",
  g2: "#D7D9DD",
  g3: "#BFC4CA",
  g4: "#93959B",
  b: "#3C3E44",
  w: "#FCFEFF",
  fth: "#CFEFFF",
  sixth: "#46A1DB",
  seventh: "#005993",
  red: "#FA7878",
};

export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #7dc1ed, #009bff);
`;

export const LoginBox = styled.div`
  width: 832px;
  height: 542px;
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
  width: 152px;
  height: 145px;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 76px;
  color: ${colors.w};
`;

export const LoginButton = styled.button`
  width: 700px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.w};
  color: ${colors.b};
  font-size: 24px;
  font-weight: 600;
  border-radius: 16px;

  &:hover {
    background-color: ${colors.g1};
    border: 1px solid ${colors.g2};
  }
`;

export const LogoKakao = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 156px;
  margin-left: 56px;
`;

import styled from "styled-components";

export const ProfileEditBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ProfileEditBox = styled.div`
  width: 44rem;
  height: 23.5rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background-color: var(--w);
  margin: 18.8rem 31.3rem 25.3rem 44.8rem;
  //피그마대로 했는데 화면과 달라서 조정 필요할 듯..
  display: flex;
  flex-direction: column;
`;

export const ProfileEditHeader = styled.div`
  display: flex;
  width: 37rem;
  height: 2rem;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  color: var(--b);
  font-weight: 500;
  font-size: 1.875rem;
  margin: 2rem 2rem 1rem 5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    cursor: pointer;
  }
`;

export const ProfileEditArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  border-right: 0.03125rem solid var(--b);
  margin-right: 3rem;
`;

export const ProfileImgEdit = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 7.5rem;
  border: 1px solid var(--b);
  background: #f4f4f4;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ProfileNameEditArea = styled.div`
  width: 19.88rem;
  height: 13.38rem;
  display: flex;
  flex-direction: column;
  gap: 3.81rem;
`;

export const ProfileNameEditInputs = styled.div`
  width: 19.875rem;
  height: 6.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--b);
  font-size: 1.5rem;
  font-weight: 600;
  //margin: 3.63rem 2.12rem 3.69rem 0;

  input {
    display: flex;
    width: 16.9rem;
    height: 1.38rem;
    padding: 1.0625rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0.5rem 2.13rem 3.81rem 0;
    border-radius: 1.5rem;
    border: 1px solid var(--b);
    background: var(--g1);
    color: var(--b);

    /* MAVVE/Caption/Body/Large */

    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 133.333% */
  }
`;

export const SaveBtsn = styled.button`
  display: flex;
  width: 6.5rem;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: var(--pri);
  color: var(--w);
  align-self: flex-end;
  //margin-right: 2rem;

  /* MAVVE/Caption/Title/Small */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
`;

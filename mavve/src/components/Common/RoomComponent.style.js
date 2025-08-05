import styled from "styled-components";

export const RoomContainer = styled.div`
  display: flex;
  width: 16rem;
  height: 14rem;
  padding: 0.5rem 0.5rem 0.5625rem 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
  background: var(--w);
  border: 1px solid var(--b);
  border-radius: 40px;
  box-sizing: border-box;

  font-style: normal;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  display: flex;
  position: relative;
  height: 9.375rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border: 1px solid var(--b);
  border-radius: 40px;
  background: var(--g1);

  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HashtagWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 0.25rem;
  width: 100%;
  justify-content: flex-start;
`;

export const Hashtag = styled.div`
  display: flex;
  position: absolute;
  padding: 0.25rem 0.375rem;
  right: 1.31rem;
  bottom: 0.81rem;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;

  border-radius: 16px;
  background: #fcffffbf;

  color: var(--b);

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0rem 1rem 0.2175rem 0.75rem;
  box-sizing: border-box;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #3c3e44;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const InfoTitle = styled.div`
  width: 100%;
  justify-items: flex-start;
`;

export const InfoTime = styled.div`
  width: 100%;
  justify-items: flex-start;
`;

export const Liked = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

export const HeartIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const LikedNum = styled.div`
  color: #000000;
`;

export const ContextMenu = styled.div`
  position: fixed;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  width: 10.5625rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
`;

export const EditMenu = styled.button`
  display: flex;
  width: 10.5625rem;
  padding: 1rem 1.5rem 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: var(--g1, #f3f4f6);
  cursor: pointer;

  color: var(--b, #3c3e44);
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */

  &:hover {
    background: var(--g2, #d7d9dd);
  }

  &:active {
    background: var(--g3, #f3f4f6);
  }
`;

export const DeleteMenu = styled.button`
  display: flex;
  width: 10.5625rem;
  padding: 0.5rem 1.5rem 1rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: var(--g1, #f3f4f6);
  cursor: pointer;

  color: var(--b, #3c3e44);
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */

  &:hover {
    background: var(--g2, #d7d9dd);
  }

  &:active {
    background: var(--g3, #f3f4f6);
  }
`;

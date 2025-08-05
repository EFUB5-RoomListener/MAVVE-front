import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 3.94rem 0 2.38rem 4.47rem;
`;

export const Thumbnail = styled.div`
    width: 13.375rem;
    height: 13.375rem;
    background-color: #CFEFFF;
    border-radius: 16px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const EmptyThumbnail = styled.div`
    width: 100%;
    height: 100%;
    background-color: #CFEFFF;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`;

export const Subtitle = styled.div`
    color: var(--b);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
`;

export const User = styled.div`
    color: var(--b);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    margin-top: 2.75rem;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 0.69rem;
`;

export const PlaylistTitle = styled.h2`
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    color: var(--b);
`;

export const EditButton = styled.button`
    width: 3rem;
    height: 3rem;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: 24px;
    background: var(--pri);
    border: none;
    cursor: pointer;

    svg {
        width: 3rem;
        height: 3rem;
    }

    &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ), #009BFF;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    width: 75.755rem;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const DeleteButton = styled.button`
    display: inline-flex;
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: var(--fth);
    border-radius: 30px;
    border: none;
    cursor: pointer;

    color: var(--b);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    margin-left: 52rem;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--bg);
    width: 100vw;
    min-height: 100vh;
    z-index: 1;
    overflow: hidden;
`;

export const Contents = styled.div`
    display: flex;
    padding: 0.5rem 0rem 0rem 1rem;
    gap: 1rem;
`;

export const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 97.9375rem;
    height: 52.625rem;
    border-radius: 16px;
    border: 3px solid #FFF;
    background: rgba(255, 255, 255, 0.40);
    padding: 2rem 4.5rem;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    color: var(--b);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CreateButton = styled.button`
    display: flex;
    width: 12rem;
    height: 2.0625rem;
    padding: 0.375rem 0.5rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 16px;
    background: var(--pri);

    font-family: Pretendard;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 400;

    &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ), #009BFF;
    }
`;

export const Playlists = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto);
    column-gap: 2.5rem;
    row-gap: 2rem;
`;

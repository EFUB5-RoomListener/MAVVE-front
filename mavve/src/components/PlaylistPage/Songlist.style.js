import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 3.5rem;
    box-sizing: border-box;
    margin-bottom: 1.5rem;

    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--b);
`;

export const Index = styled.div`
    margin-right: 3.5rem;
`;

export const Title = styled.div`
    margin-right: 30.63rem;

`;

export const AlbumName = styled.div`
    margin-right: 21.25rem;
`;

export const AddDate = styled.div`
    margin-right: 16.25rem;
`;

export const Time = styled.div`
`;

export const Line = styled.div`
    width: 100%;
    height: 0.03125rem;
    background: #3B3030;
    margin-bottom: 0.75rem;
`;

export const ResultContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 93.75rem;
    height: 29.5rem;
`;

export const ScrollArea = styled.div`
    max-height: 27.75rem;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DeleteSongButton = styled.button`
    display: inline-flex;
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 30px;
    background: var(--pri);
    color: var(--w);

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    position: fixed;
    bottom: 2.5rem;
    right: 4rem;

    &:active {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ), #009BFF;
    }
`;
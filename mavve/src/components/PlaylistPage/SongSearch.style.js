import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2rem 6.5rem;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--b);
    margin-bottom: 1.5rem;
`;


export const SearchBar = styled.div`
    display: flex;
    width: 51.875rem;
    height: 2.75rem;
    padding: 0.6875rem 1.5rem;
    align-items: flex-start;
    gap: 1.5rem;
    background: var(--w);
    border-radius: 24px;
    box-sizing: border-box;

    & > input {
        border: none;
        outline: none;
        width: 100%;
        background: transparent;
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #93959B;
    }

    &:hover {
        background: var(--g3);
    }
`;

export const ResultContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 83.0625rem;
    height: 22.5rem;
    margin-top: 0.88rem;

    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const NoResult = styled.div`
    display: flex;
    color: var(--g4);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 51.875rem;
    padding: 3.75rem;
    box-sizing: border-box;
    justify-content: center;
`;

export const AddSongButton = styled.button`
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
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 10rem;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #525252;

    font-size: 1.5rem;
    font-weight: 600;
`;

export const Diaries = styled.div`
    width: 95rem;
    //height: 51.125rem;
    margin-top: 2rem;
    padding: 2.5rem 3.75rem;
    box-sizing: border-box;
    gap: 1.5rem;

    border-radius: 16px;
    border: 3px solid var(--w);
    background: rgba(252, 254, 255, 0.50);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    width: 95rem;
    height: 20.8125rem;
    margin-top: 2rem;
    padding: 7.75rem 23.4375rem;
    box-sizing: border-box;
    gap: 0.5rem;

    border-radius: 16px;
    border: 3px solid var(--w);
    background: rgba(252, 254, 255, 0.50);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const EmptyText1 = styled.div`
    color: var(--g4);
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const EmptyText2 = styled.div`
    color: var(--g4);
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
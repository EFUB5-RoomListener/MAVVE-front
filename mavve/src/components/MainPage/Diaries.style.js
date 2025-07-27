import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #525252;

    /* MAVVE/Caption/Headline/Large */
    font-family: SUIT;
    font-size: 1.5rem;
    font-weight: 600;
`;

export const Diaries = styled.div`
    width: 95rem;
    height: 51.125rem;
    margin-top: 2rem;
    padding: 2.5rem 3.75rem;
    box-sizing: border-box;
    gap: 1.5rem;

    border-radius: 16px;
    border: 3px solid var(--w);
    background: rgba(252, 254, 255, 0.50);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;
import styled from 'styled-components';

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
    cursor: pointer;

    font-style: normal;
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
    color: #3C3E44;

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
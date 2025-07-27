import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--bg);
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    overflow: hidden;
`;

export const Contents = styled.div`
    display: flex;
    padding: 0.5rem 0rem 0rem 1rem;
    z-index: 2;
`;

export const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
    gap: 12rem;
`;

export const Wave = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 37rem;
    width: 120.5rem;
    height: 77.875rem;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

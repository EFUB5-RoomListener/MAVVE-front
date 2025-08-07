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
    box-sizing: border-box;
`;

export const Header = styled.div`
    width: 100%;
    height: 19.6875rem;
    
    border-radius: 16px 16px 0 0;
    background: var(--w);
`;

export const Title = styled.div`
`;

export const CreateButton = styled.button`
`;
import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-sizing: border-box;
    width: 44rem;
    height: 39.1875rem;
    border-radius: 80px;
    background: var(--w);
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const Text = styled.div`
    color: var(--b);
    text-align: center;

    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 1rem;
`;

export const CloseBtn = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1/1;
`;

export const Photo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: 25rem;
    border-radius: 80px;
    border: 1px solid var(--b);
    background: var(--g1);
    cursor: pointer;
    margin-bottom: 1rem;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    } 
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
`;

export const Title = styled.div`
    color: var(--b);
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 0.5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 30.5rem;
    height: 3.625rem;
    border-radius: 24px;
    border: 1px solid var(--b);
    background: var(--g1);

    color: var(--b);
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &::placeholder {
        color: var(--g3);
    }
`;

export const SaveBtn = styled.button`
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;
    border-radius: 30px;
    background: var(--pri);
    color: var(--w);
    cursor: pointer;

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;

    &:active {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ), #009BFF;
    }
`;

export const ImgIcon = styled.div`
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1/1;
`;
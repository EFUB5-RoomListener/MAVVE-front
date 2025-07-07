import styled from 'styled-components';

export const SideBarContainer = styled.div`
    display: inline-flex;
    width: 16.5625rem;
    height: 52.625rem;
    padding: 1.5rem 1.5rem 3.1875rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FCFEFF;
    border-radius: 16px;
    box-sizing: border-box;

    font-style: normal;
    line-height: normal;
`;

export const CreateArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const CreateButton = styled.button`
    display: flex;
    width: 5.5rem;
    height: 2.0625rem;
    padding: 0.375rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 16px;
    background-color: #65C3FF;

    font-family: Pretendard;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 400;
`;

export const Title = styled.div`
    display: inline-flex;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 16px;
    background-color: #009BFF;
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;

    font-family: Pretendard;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 400;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ComponentWrapper = styled.div`
    display: flex;
    width: 10.625rem;
    padding: 0.38rem 0.5rem;
    justify-content: space-between;
`;

export const Thumbnail = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background-color: lightgray;
`;

export const Info = styled.div`
    width: 7.125rem;
    display: flex;
    flex-direction: column;
`;

export const InfoTitle = styled.div`
    font-family: SUIT;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #3C3E44
`;

export const InfoSubTitle = styled.div`
    font-family: SUIT;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
    color: #3C3E44
`;
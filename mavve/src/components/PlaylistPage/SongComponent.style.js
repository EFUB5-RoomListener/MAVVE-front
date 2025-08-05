import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    height: 4.5rem;
    width: 83.0625rem;
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    cursor: pointer;

    background: ${({ isSelected }) =>
        isSelected ? 'var(--sec)' : 'transparent'};

    transition: background 0.2s ease;

    &:hover {
        background: ${({ isSelected }) =>
            isSelected ? 'var(--sec)' : 'rgba(101, 195, 255, 0.5)'};
    }
`;

export const CheckboxContainer = styled.div`
    position: relative;
    width: 1rem;
    height: 1rem;
`;

export const Checkbox = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
`;

export const Check = styled.img`
    position: absolute;
    top: 30%;
    left: 0%;
    transform: translate(-15%, -50%);
    width: 2rem;
    height: 2rem;
    pointer-events: none;
`;

export const SongContainer = styled.div`
    display: flex;
    align-items: center;
    width: 18.5rem;
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-left: 3.13rem;
`;

export const Thumbnail = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 48px;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

export const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.1rem;
    height: 1.1rem;
    background-color: var(--trd);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

export const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem; 
    margin-left: 1.5rem;
`;

export const SongTitle = styled.div`
    width: 100%; 
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--b);
`;

export const Artist = styled.div`
    width: 100%; 
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--b);
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;
    width: 45rem;
`;

export const SubText = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--b);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
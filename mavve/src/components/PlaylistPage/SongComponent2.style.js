import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    height: 4.5rem;
    width: 93.75rem;
    padding: 0.75rem 3.5rem;
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

export const Number = styled.div`
    font-size: 1rem;
    font-weight: 6500;
    line-height: 1.5rem;
    color: var(--b);
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
`;

export const Thumbnail = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 48px;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-left: 3.13rem;
`;

export const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 27.7rem;
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
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--b);
`;

export const AlbumName = styled.div`
    width: 8rem;
    margin-right: 15.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const AddDate = styled.div`
    margin-right: 17.5rem;
`;

export const Time = styled.div`
`;
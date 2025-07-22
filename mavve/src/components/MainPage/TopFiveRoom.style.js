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

export const Contents = styled.div`
    display: flex;
    margin-top: 2.69rem;
    position: relative;
`;

export const Rooms = styled.div`
    position: absolute;
    z-index: 3;
`;

export const RoomTitle = styled.div`
    color: var(--b);
    font-family: SUIT;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Tags = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 21rem;
    gap: 0.75rem;
`;

export const Hashtag = styled.div`
    display: flex;
    padding: 0.25rem 0.75rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: var(--w);
`;

export const Room1 = styled.div`
    margin-left: 2.5rem;
    margin-top: 0.4rem;

    width: 46.4375rem;
    height: 5.375rem;
    padding: 1.91rem  3.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Room2 = styled.div`
    margin-left: 17rem;
    margin-top: 1.7rem;

    width: 46.4375rem;
    height: 5.375rem;
    padding: 1.91rem  3.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Room3 = styled.div`
    margin-left: 0.5rem;
    margin-top: 2.2rem;

    width: 54.3125rem;
    height: 7.9375rem;
    padding: 1.91rem  3.25rem;
    gap: 1.22rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Room3Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PlayBar = styled.div`
    display: flex;
    width: 28rem;
    height: 5.875rem;
    padding: 2.12rem 2.19rem;
    box-sizing: border-box;
    align-items: flex-start;
    border-radius: 200px;
    background: var(--w);
    gap: 0.5rem;
`;

export const PauseButton = styled.div`
    margin-right: 2.56rem;
    cursor: pointer;
`;

export const SongInfo = styled.div`
    display: flex;
    width: 19rem;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
`;

export const SongText = styled.div`
    color: var(--b);

    /* MAVVE/Caption/Body/Medium */
    font-family: SUIT;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.4rem */
`;

export const Room4 = styled.div`
    margin-left: 13rem;
    margin-top: 1.9rem;

    width: 46.4375rem;
    height: 5.375rem;
    padding: 1.91rem  3.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Room5 = styled.div`
    margin-left: 1.7rem;
    margin-top: 1.75rem;

    width: 46.4375rem;
    height: 5.375rem;
    padding: 1.91rem  3.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CD = styled.div`
    width: 29.125rem;
    height: 29.125rem;
    margin-top: 4rem;
    margin-left: -3rem;
    border-radius: 50%;
    border: 3px solid var(--w);
    background: var(--w);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    position: relative;
`;

export const Hole = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5rem; 
    height: 5rem;
    border-radius: 50%;
    background: var(--bg);
    box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.25);
    z-index: 2;
`;

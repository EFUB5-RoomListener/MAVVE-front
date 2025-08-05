import React, { useEffect, useState} from 'react'
import * as S from '../MainPage/TopFiveRoom.style'
import popularRoom from '../../assets/MainPage/PopularRoom.svg'
import pause from '../../assets/MainPage/Pause.svg'
import { getTopRooms } from '../../api/room'

export default function TopFiveRoom() {
    const [rooms, setRooms] = useState([]);
    const [rotationIndex, setRotationIndex] = useState(0);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomList = await getTopRooms();
                setRooms(roomList.slice(0, 5));
            } catch (error) {
                console.error('인기 방 가져오기 실패:', error);
            }
        };

        fetchRooms();
    }, []);

    // 10초마다 자리바꿈
    useEffect(() => {
        const interval = setInterval(() => {
            setRotationIndex(prev => (prev + 1) % 5);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const rotatedRooms = rooms.length === 5
        ? [...rooms.slice(rotationIndex), ...rooms.slice(0, rotationIndex)]
        : [];


    return (
        <S.Container>
            <S.GlobalAnimationStyle />
            <S.Title>현재 인기 방 TOP 5</S.Title>
            <S.Contents>
                <img src={popularRoom} alt="topfiveroom" />
                <S.Rooms>
                    {rotatedRooms.map((room, index) => {
                        const TagWrapper = index === 2 ? S.Tags2 : S.Tags1;
                        const RoomWrapper = S[`Room${index + 1}`] || S.Room1;
                        return (
                            <RoomWrapper 
                                key={`${room.roomId}-${index}-${rotationIndex}`}
                                className="fade-room"
                            >
                                {index === 2 ? (
                                    <>
                                        <S.Room3Info>
                                            <S.RoomTitle>{room?.roomName || '방 제목'}</S.RoomTitle>
                                            <TagWrapper>
                                                {(room?.tag || ['해시태그']).map((tag, idx) => (
                                                    <S.Hashtag key={idx}>#{tag}</S.Hashtag>
                                                ))}
                                            </TagWrapper>
                                        </S.Room3Info>
                                        <S.PlayBar>
                                            <S.PauseButton>
                                                <img src={pause} alt='pause_button' />
                                            </S.PauseButton>
                                            <S.SongInfo>
                                                <S.SongText>Foo Fighters</S.SongText>
                                                <S.SongText>Everlong</S.SongText>
                                                <S.SongText>04:10</S.SongText>
                                            </S.SongInfo>
                                        </S.PlayBar>
                                    </>
                                ) : (
                                    <>
                                        <S.RoomTitle>{room?.roomName || '방 제목'}</S.RoomTitle>
                                        <TagWrapper>
                                            {(room?.tag || ['해시태그']).map((tag, idx) => (
                                                <S.Hashtag key={idx}>#{tag}</S.Hashtag>
                                            ))}
                                        </TagWrapper>
                                    </>
                                )}
                            </RoomWrapper>
                        );
                    })}
                </S.Rooms>
                <S.CD $bg={rotatedRooms[2]?.imageURL} key={rotationIndex}>
                    <S.Hole />
                </S.CD>
            </S.Contents>
        </S.Container>
    );
}
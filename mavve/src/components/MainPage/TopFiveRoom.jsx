import React from 'react'
import * as S from '../MainPage/TopFiveRoom.style'
import popularRoom from '../../assets/MainPage/PopularRoom.svg'
import pause from '../../assets/MainPage/Pause.svg'

export default function TopFiveRoom() {
  return (
    <S.Container>
        <S.Title>현재 인기 방 TOP 5</S.Title>
        <S.Contents>
            <img src={popularRoom} alt="topfiveroom" />
            <S.Rooms>
                <S.Room1>
                    <S.RoomTitle>방 제목</S.RoomTitle>
                    <S.Tags>
                        <S.Hashtag>#신나는</S.Hashtag>
                        <S.Hashtag>#락밴드</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                    </S.Tags>
                </S.Room1>
                <S.Room2>
                    <S.RoomTitle>방 제목</S.RoomTitle>
                    <S.Tags>
                        <S.Hashtag>#신나는</S.Hashtag>
                        <S.Hashtag>#락밴드</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                    </S.Tags>
                </S.Room2>
                <S.Room3>
                    <S.Room3Info>
                        <S.RoomTitle>방 제목</S.RoomTitle>
                        <S.Tags>
                            <S.Hashtag>#신나는</S.Hashtag>
                            <S.Hashtag>#락밴드</S.Hashtag>
                            <S.Hashtag>#리듬</S.Hashtag>
                            <S.Hashtag>#리듬</S.Hashtag>
                        </S.Tags>
                    </S.Room3Info>
                    <S.PlayBar>
                        <S.PauseButton>
                            <img src={pause} alt='pause_button'/>
                        </S.PauseButton>
                        <S.SongInfo>
                            <S.SongText>Foo Fighters</S.SongText>
                            <S.SongText>Everlong</S.SongText>
                            <S.SongText>04:10</S.SongText>
                        </S.SongInfo>
                    </S.PlayBar>
                </S.Room3>
                <S.Room4>
                    <S.RoomTitle>방 제목</S.RoomTitle>
                    <S.Tags>
                        <S.Hashtag>#신나는</S.Hashtag>
                        <S.Hashtag>#락밴드</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                    </S.Tags>
                </S.Room4>
                <S.Room5>
                    <S.RoomTitle>방 제목</S.RoomTitle>
                    <S.Tags>
                        <S.Hashtag>#신나는</S.Hashtag>
                        <S.Hashtag>#락밴드</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                        <S.Hashtag>#리듬</S.Hashtag>
                    </S.Tags>
                </S.Room5>
            </S.Rooms>
            <S.CD>
                <S.Hole />
            </S.CD>
        </S.Contents>
    </S.Container>
  )
}

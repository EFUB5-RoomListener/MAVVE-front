import React from 'react'
import * as S from '../Common/OneLineNote.style'
import emotion from '../../assets/Common/emotion.svg'

export default function OneLineNote() {
    return (
        <S.DiaryContainer>
            <S.Note>
                <S.NoteContent>
                    <S.UserProfile />
                    <S.NoteText>
                        오늘은 잔잔하게 내린 비 냄새가 유난히 깊고 맑게 느껴졌다. 그 향기에 마음이잉이이이
                    </S.NoteText>
                    <S.Emotion>
                        <img src={emotion} alt='emotion'/>
                    </S.Emotion>
                </S.NoteContent>
            </S.Note>
            <S.Song>
                <S.AlbumCover />
                <S.SongContent>
                    <S.SongText>뉴진스</S.SongText>
                    <S.SongText>how sweet</S.SongText>
                    <S.SongText>03:22</S.SongText>
                </S.SongContent>
            </S.Song>
            <S.Room>
                <S.RoomCover>
                    <S.RoomThumbnail />
                </S.RoomCover>
                <S.RoomInfo>
                    <S.RoomText>비오는날어쩌구</S.RoomText>
                    <S.Hashtag>#해시태그</S.Hashtag>
                </S.RoomInfo>
            </S.Room>
        </S.DiaryContainer>
    )
}

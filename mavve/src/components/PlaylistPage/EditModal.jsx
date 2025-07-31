import React from 'react'
import * as S from '../PlaylistPage/EditModal.style'
import close from '../../assets/PlaylistPage/close.svg'
import photo from '../../assets/PlaylistPage/photo.svg'

export default function EditModal({ onClose }) {
    return (
        <S.Container>
            <S.Modal>
                <S.Top>
                    <S.Text>플레이리스트 설정</S.Text>
                    <S.CloseBtn onClick={onClose}>
                        <img src={close} alt='닫기 버튼'/>
                    </S.CloseBtn>
                </S.Top>
                <S.Photo>
                    <img src={photo} alt='사진 추가 아이콘'/>
                </S.Photo>
                <S.TitleContainer>
                    <S.Title>제목</S.Title>
                    <S.InputContainer>
                        <S.Input placeholder='플레이리스트 제목 입력해주세요!'/>
                        <S.SaveBtn>저장하기</S.SaveBtn>
                    </S.InputContainer>
                </S.TitleContainer>
            </S.Modal>
        </S.Container>
    )
}

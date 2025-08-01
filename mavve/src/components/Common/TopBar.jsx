import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../Common/TopBar.style'
import logo from '../../assets/Common/logo.svg'
import search from '../../assets/Common/icn_search.svg'
import alert from '../../assets/Common/icn_bell.svg'
import profile from '../../assets/Common/profile.svg'

export default function TopBar() {
    return (
        <S.TopBarContainer>
        <S.Contents>
            <S.Logo>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </S.Logo>
            <S.SearchBar>
                <img src={search} alt="search" />
                <input placeholder="함께 듣고 싶은 음악이 있나요? 원하는 방을 찾아보세요!" />
            </S.SearchBar>
            <S.Buttons>
            <S.AlertButton>
                <img src={alert} alt="alert" />
            </S.AlertButton>
            <S.ProfileButton>
                <img src={profile} alt="profile" />
            </S.ProfileButton>
            </S.Buttons>
        </S.Contents>
        </S.TopBarContainer>
    )
}

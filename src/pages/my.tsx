import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import RrText from '../components/atom/RrText'

const myPage = () => {
  return (
    <MyPageWrapper>
      <ProfileWrapper>
        <UserImg src={process.env.PUBLIC_URL + '/image/profile.png'} />
        <UserText
          text="테스트님, 안녕하세요!"
          size={24}
          weight={600}
        ></UserText>
      </ProfileWrapper>
      <FlexRowWrapper>
        <nav>
          <NavWrapper>
            <NavWrapper>
              <li>
                <StyledNavLink to="/my/account">계정</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/my/notice">공지사항</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/my/qna">문의하기</StyledNavLink>
              </li>
            </NavWrapper>
          </NavWrapper>
        </nav>
      </FlexRowWrapper>
    </MyPageWrapper>
  )
}

export default myPage

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
`

const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 100px;
`

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    margin-top: 30px;
  }
  .active {
    color: #222222;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.122727px;
  color: #828282;
`

const UserImg = styled.img`
  width: 68px;
  height: 68px;
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`

const UserText = styled(RrText)`
  margin-left: 20px;
`

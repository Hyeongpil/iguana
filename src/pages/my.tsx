import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import RrText from '../components/atom/RrText'
import RrAccount from 'components/organism/RrAccount'
import RrNotice from 'components/organism/RrNotice'
import RrQna from 'components/organism/RrQna'
// import RrNoticeConts from 'components/organism/RrNoticeConts'

const myPage = props => {
  console.log(props.location.pathname)

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
        <ContentsWrapper>
          <Route path="/my/account" component={RrAccount} />
          <Route path="/my/notice" component={RrNotice} />
          <Route path="/my/qna" component={RrQna} />
        </ContentsWrapper>
      </FlexRowWrapper>
    </MyPageWrapper>
  )
}

export default myPage

const MyPageWrapper = styled.div`
  height: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;

  background-color: #fafafa;
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

const ContentsWrapper = styled.div`
  border-radius: 16px;
  width: calc(100% - 200px);
  margin-left: 100px;
  padding: 0 30px;
  background-color: #fff;
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

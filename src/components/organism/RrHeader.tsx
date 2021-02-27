import RrUserImg from 'components/atom/RrUserImg'
import React from 'react'
import styled from 'styled-components'

const RrHeader = () => {
  return (
    <RrHeaderWrapper>
      <Logo>Rrrr</Logo>
      <MenuWrapper>
        <MenuItem>피드</MenuItem>
        <MenuItem>알람 서랍</MenuItem>
        <Img src="image/profile.png" style={{width:'34px'}} />
        {/* <RrUserImg image="" size="34" /> */}
        <UserName>형필</UserName>
      </MenuWrapper>
    </RrHeaderWrapper>
  )
}

export default RrHeader

const RrHeaderWrapper = styled.div`
  height: 60px;
  background: #222222;
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Img = styled.img`
  width: 34px;
  background-color: white;
  border-radius: 50%
`

const Logo = styled.div`
  font-family: Gilroy;
  src: url('../../assets/font/Gilroy-ExtraBold.otf') format('otf');
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`

const UserName = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 20px;
  cursor: pointer;
`
const MenuItem = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-right: 20px;
  color: #ffffff;
  cursor: pointer;
`
import React, { useState } from 'react'
import styled from 'styled-components'
import RrHeaderModal from './RrHeaderModal'
import { Link } from 'react-router-dom'

const RrHeader = () => {
  const [showModal, setShowModal] = useState(false)
  const onMouseover = () => {
    console.log('mouseover')
    setShowModal(true)
  }

  const showFunction = data => {
    setShowModal(data)
  }

  return (
    <RrHeaderWrapper>
      <Logo>
        <Link to="/">Rrrr</Link>
      </Logo>
      <MenuWrapper>
        <MenuItem to="">피드</MenuItem>
        <MenuItem to="/alarmdrawer">알람 서랍</MenuItem>

        <Img src={process.env.PUBLIC_URL + '/image/profile.png'} />
        {/* <RrUserImg image="" size="34" /> */}
        <UserName onMouseOver={onMouseover}>형필</UserName>
      </MenuWrapper>
      {showModal ? <RrHeaderModal showFunction={showFunction} /> : null}
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
  position: relative;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Img = styled.img`
  width: 34px;
  background-color: white;
  border-radius: 50%;
`

const Logo = styled.div`
  font-family: Gilroy;
  src: url('../../assets/font/Gilroy-ExtraBold.otf') format('otf');
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  * {
    color: #fff;
    text-decoration: none;
  }
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
const MenuItem = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-right: 20px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`

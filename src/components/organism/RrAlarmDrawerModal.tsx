import React, { useState } from 'react'
import styled from 'styled-components'
import RrUserImg from '../atom/RrUserImg'
import RrLike from '../molecule/RrLike'

const RrAlarmDrawerModal = ({userImg, userName, time, day, title, message, link}) => {
  return (
    <RrAlarmDrawerModalWrapper>
      <RrAlarmDrawerModalContentsWrapper>
        <LeftContentWrapper>
          <UserWrapper>
            <RrUserImg image={userImg} size="" />
            <span>{userName}</span>
          </UserWrapper>
          <RrLikeComponent count="" />
        </LeftContentWrapper>
        <RightContentWrapper>
          <Time>{time}</Time>
          <Day>{day}</Day>
          <MessageWrapper>
            <Title>{title}</Title>
            <Message>{message}</Message>
          </MessageWrapper>
          <MessageWrapper>
            <Title>링크</Title>
            <A href={link}>{link}</A>
          </MessageWrapper>
          <ShareButton>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z" fill="#222222"/>
            </svg>
            <span>공유하기</span>
          </ShareButton>
        </RightContentWrapper>
        <CloseButton>
          <Line></Line>
          <Line></Line>
        </CloseButton>
      </RrAlarmDrawerModalContentsWrapper>
    </RrAlarmDrawerModalWrapper>
  )
}

export default RrAlarmDrawerModal

const RrAlarmDrawerModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`

const RrAlarmDrawerModalContentsWrapper = styled.div`
  width: 848px;
  height: 460px;
  padding: 74px 30px 45px;
  position: absolute;
  left: 50%;
  top: 211px;
  transform: translateX(-50%);

  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 13px;

  display: flex;
  justify-content: space-between;
`

const LeftContentWrapper = styled.div`
  width: 427px;
  height: 325px;
  margin-right: 32px;
  background: url(.jpg) #ddd;
  border-radius: 16px;
  position: relative;
`

const UserWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;

  span {
    padding-left: 6px;
    color: #fff;
    font-size: 13px;
  }
`

const RrLikeComponent = styled(RrLike)`
  outline: 1px solid lime;
`

const RightContentWrapper = styled.div``

const Time = styled.h3`
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 20px;
`

const Day = styled.span`
  margin-bottom: 30px;
  font-size: 16px;
  display: inline-block;
`

const MessageWrapper = styled.div`
  margin-bottom: 12px;
  padding: 10px 12px;
  background: rgba(245, 245, 245, 0.6);
  backdrop-filter: blur(54.3656px);
  border-radius: 13px;
`

const Title = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`

const Message = styled.span`
  font-size: 15px;
`

const A = styled.a`
  font-size: 12px;
  color: #000;
  text-decoration: none;
`

const ShareButton = styled.button`
  border: none;
  margin-top: 40px;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  svg {
    margin-right: 19px;
    transform: translateY(-2px);
  }

  span {
    font-size: 15px;
  }

  &:before {
    content: '';
    display: block;
    width: 343px;
    height: 1px;
    background-color: #F2F2F2;
    position: absolute;
    top: -24px;
  }
`

const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgba(249, 249, 249, 0.78);
  backdrop-filter: blur(54.3656px);
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;
`

const Line = styled.div`
  width: 16px;
  height: 2.5px;
  background-color: #8E8E93;
  border-radius: 5px;
  transform: rotate(45deg);

  &:last-child {
    transform: rotate(-45deg);
  }
`
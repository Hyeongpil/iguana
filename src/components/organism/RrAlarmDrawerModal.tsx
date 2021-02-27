import React, { useState } from 'react'
import styled from 'styled-components'
import RrUserImg from '../atom/RrUserImg'
import RrLike from '../molecule/RrLike'

const RrAlarmDrawerModal = ({userImg, userName, time, day, title, message, link}) => {
  return (
    <RrAlarmDrawerModalWrapper>
      <LeftContentWrapper>
        <ImgWrapper>
          <UserWrapper>
            <RrUserImg image={userImg} size="" />
            <span>{userName}</span>
          </UserWrapper>
          <RrLike count="" />
        </ImgWrapper>
      </LeftContentWrapper>
      <RightContentWrapper>
        <Time>{time}</Time>
        <Day>{day}</Day>
        <MessageWrapper>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </MessageWrapper>
        <LinkWrapper>
          <Title>링크</Title>
          <a href={link}>{link}</a>
        </LinkWrapper>
        <ShareButton>공유하기</ShareButton>
      </RightContentWrapper>
      <CloseButton></CloseButton>
    </RrAlarmDrawerModalWrapper>
  )
}

export default RrAlarmDrawerModal

const RrAlarmDrawerModalWrapper = styled.div``

const LeftContentWrapper = styled.div``

const ImgWrapper = styled.div``

const UserWrapper = styled.div``

const RightContentWrapper = styled.div``

const Time = styled.h3``

const Day = styled.span``

const MessageWrapper = styled.div``

const Title = styled.p``

const Message = styled.span``

const LinkWrapper = styled.div``

const ShareButton = styled.button``

const CloseButton = styled.button``
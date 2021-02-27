import React from 'react'
import styled from 'styled-components'
import { Share, Heart } from 'react-feather'
import RrUserImg from 'components/atom/RrUserImg'

const RrAlarmCard = ({ title, content }) => {
  return (
    <FlexColWrapper>
      <RrAlarmCardWrapper>
        <Img />
        <ContentWrapper>
          <IconWrapper>
            <Share size="24" />
            <Heart size="24" style={{ marginLeft: '20px' }} />
          </IconWrapper>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </ContentWrapper>
      </RrAlarmCardWrapper>
      <UserInfoWrapper>
        <RrUserImg size="32" />
      </UserInfoWrapper>
    </FlexColWrapper>
  )
}

export default RrAlarmCard

const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const FlexColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const UserInfoWrapper = styled(FlexRowWrapper)`
  margin-top: 12px;
  margin-left: 16px;
`

const RrAlarmCardWrapper = styled(FlexRowWrapper)`
  width: 400px;
  height: 160px;
  padding: 16px;
  background: #bdbdbd;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const ContentWrapper = styled(FlexColWrapper)`
  width: calc(100% - 108px);
`
const IconWrapper = styled(FlexRowWrapper)`
  justify-content: flex-end;
`

const Img = styled.image`
  width: 128px;
  height: 128px;
  background: #f2f2f2;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
`
const Title = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`
const Content = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
`
const UserName = styled.span`
    font-style: normal;
font-weight: bold;
font-size: 16px;
    line-height: 23px;
`
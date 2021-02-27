import React from 'react'
import styled from 'styled-components'
import RrImage from '../atom/RrImage'
import RrLike from 'components/molecule/RrLike'

const RrAlarmCard = ({ title, content, userName }) => {
  return (
    <FlexColWrapper>
      <RrAlarmCardWrapper>
        <HeaderWrapper>
          <div>
            <RrImage src={null} size="20" />
            <HeaderText>{userName}</HeaderText>
          </div>
          <HeaderText>now</HeaderText>
        </HeaderWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </TextWrapper>
          <ImgWrapper>
            <RrImage src={null} size="32" />
          </ImgWrapper>
        </ContentWrapper>
      </RrAlarmCardWrapper>
      <IconWrapper>
        <RrLike count="123" />
        <RrLike count="103" />
      </IconWrapper>
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
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const RrAlarmCardWrapper = styled(FlexRowWrapper)`
  display: flex;
  flex-direction: column;
  height: 110px;
  padding: 10px 16px 10px 16px;
  background: rgba(245, 245, 245, 0.6);
  border-radius: 13px;
`
const TextWrapper = styled(FlexColWrapper)`
  width: calc(100% - 42px);
`
const ContentWrapper = styled(FlexRowWrapper)`
  justify-content: space-between;
  height: 65px;
`
const ImgWrapper = styled(FlexRowWrapper)`
  height: 100%;
  align-items: flex-end;
`

const IconWrapper = styled(FlexRowWrapper)`
  justify-content: flex-end;
  margin-top: 13px;
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
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-top: 8px;
`
const Content = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-top: 2px;
`
const HeaderText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: #3f3f3f;
  opacity: 95%;
  margin-left: 6px;
`

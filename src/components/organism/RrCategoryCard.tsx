import React from 'react'
import styled from 'styled-components'

const RrCategoryCard = ({ title, content }) => {
  return (
    <RrCategoryCardWrapper>
      <ImgWrapper />
      <ContentWrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ContentWrapper>
    </RrCategoryCardWrapper>
  )
}

export default RrCategoryCard

const RrCategoryCardWrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-right: 40px;
`
const ImgWrapper = styled.div`
  background: #eeeeee;
  width: 150px;
  height: 93px;
  border-radius: 16px 16px 0px 0px;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 16px;
  margin-right: 16px;
`

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
`
const Content = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  margin-top: 4px;
`

import React from 'react'
import styled from 'styled-components'

const RrNoticeConts = () => {
  return (
    <RrNoticeContsWrapper>
      <Title>서비스 오픈 안내</Title>
      <Date>2021. 03. 13</Date>
      <Description>
        안녕하세요. Rrrr입니다. <br />
        <br /> 서비스 오픈 관련하여 안내드립니다. <br />
        <br />
        Rrrr는 나만의 알람을 만들고 공유하는 앱 서비스입니다. 단순한 기본 알람이
        지겨우셨나요? 오늘부터 Rrrr를 통해 나만의 커스텀 알람을 가져보세요.
        다양한 사진과 문구, 링크를 추가하여 중요한 순간을 인상깊게 기억할 수
        있습니다. 재미있는 알람은 공유하여 사람들과 피드에서 소통해보세요!
        <br />
        <br /> 감사합니다.
      </Description>
    </RrNoticeContsWrapper>
  )
}

export default RrNoticeConts

const RrNoticeContsWrapper = styled.div`
  outline: 1px solid red;
  //   width: 100%;
  //   height: 100%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;

  //   position: absolute;
  //   top: 0;
  //   left: 0;
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
`

const Date = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  color: #4f4f4f;
`

const Description = styled.p`
  border-top: 1px solid #e0e0e0;
  padding-top: 36px;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #333333;
`

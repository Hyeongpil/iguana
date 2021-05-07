import React, { FC } from 'react'
import styled from 'styled-components'
import RrIconCount from 'components/molecule/RrIconCount'
import { Alarm } from 'entities/Alarm'

interface RrAlarmCardProps {
  alarm: Alarm
}

const RrAlarmCard: FC<RrAlarmCardProps> = ({ alarm }: RrAlarmCardProps) => {
  return (
    <FlexColWrapper>
      <RrAlarmCardWrapper>
        <HeaderWrapper>
          <div>
            <Img
              src={process.env.PUBLIC_URL + '/image/profile.png'}
              alt="프로필"
            />
            {/* <RrImage path={'~/assets/image/profile.png'} size="20" /> */}
            <HeaderText>{alarm.title}</HeaderText>
          </div>
          <IconWrapper>
            <RrIconCount count={alarm.scrapCnt} imgName="scrap" />
            <RrIconCount count={alarm.likeCnt} imgName="like" />
          </IconWrapper>
        </HeaderWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{alarm.title}</Title>
            <Content>{alarm.description}</Content>
          </TextWrapper>
          <ImgWrapper>
            <img
              src={process.env.PUBLIC_URL + '/image/alarmImg.png'}
              style={{ width: '32px' }}
              alt="이미지"
            />
            {/* <RrImage path={'~/assets/image/profile.png'} size="32" /> */}
          </ImgWrapper>
        </ContentWrapper>
      </RrAlarmCardWrapper>
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
`

const Img = styled.img`
  width: 20px;
  height: 20px;
  background: #f2f2f2;
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
  color: #bdbdbd;
  opacity: 95%;
`

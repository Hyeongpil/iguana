import React from 'react'
import styled from 'styled-components'
import RrUserImg from '../atom/RrUserImg'

const RrAlarmDrawerCard = ({
  userImg,
  userName,
  title,
  message,
  img,
  day,
  time,
  onoff,
  clickEvent,
}) => {
  // const [onOff, setOnOff] = useState('비공개')
  // const handleChange = value => {
  //   console.log(value)
  //   value ? setOnOff('공개') : setOnOff('비공개')
  // }

  return (
    <RrAlarmDrawerCardWrapper onClick={clickEvent}>
      <WriterWrapper writerData={userName}>
        <RrUserImg image={userImg} size="" />
        <span>{userName}</span>
      </WriterWrapper>
      <TopContentsWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </TextWrapper>
        <img
          src={process.env.PUBLIC_URL + '/image/alarmImg.png'}
          style={{ width: '62px' }}
          alt="알람 이미지"
        />
        {/* <Img bg={img} /> */}
      </TopContentsWrapper>
      <BottomContentsWrapper>
        <span>{day}</span>
        <span>{time}</span>
        <span>{onoff}</span>
      </BottomContentsWrapper>
    </RrAlarmDrawerCardWrapper>
  )
}

export default RrAlarmDrawerCard

const RrAlarmDrawerCardWrapper = styled.div`
  width: 416px;
  /* height: 131px; */
  padding: 16px 16px 11px;
  background: rgba(245, 245, 245, 0.6);
  border-radius: 13px;
  cursor: pointer;
`
const WriterWrapper = styled.div<{ writerData: string }>`
  ${props => (props.writerData === '' ? 'display: none;' : null)}
`

// const Img = styled.div<{ bg: string }>`
//   border: 1px solid #767676;
//   width: 62px;
//   height: 62px;
//   background: url(${props => props.bg}), #767676;
//   border-radius: 16px;
// `

const TopContentsWrapper = styled.div`
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

const BottomContentsWrapper = styled.div`
  padding-top: 11px;
  span {
    margin-right: 14px;
    font-size: 12px;
    font-weight: 700;
    color: #4f4f4f;
  }
`

const TextWrapper = styled.div`
  span {
    font-size: 15px;
    display: block;
  }
`

const Title = styled.span`
  margin-bottom: 2px;
  font-weight: 600;
`
const Message = styled.span`
  /* font-weight: 400; */
`

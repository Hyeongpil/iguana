import React, { useState } from 'react'
import styled from 'styled-components'
import RrAlarmDrawerCard from '../components/organism/RrAlarmDrawerCard'
import RrAlarmDrawerModal from '../components/organism/RrAlarmDrawerModal'

const alarmList = [
  {
    title: '아니요, 뚱인데요',
    message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
    img: 'img url',
    day: '월',
    time: '오전 7시',
    onoff: '공개 알림',
  },
  {
    title: '아니요, 뚱인데요',
    message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
    img: 'img url',
    day: '월',
    time: '오전 7시',
    onoff: '공개 알림',
  },
  {
    title: '아니요, 뚱인데요',
    message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
    img: 'img url',
    day: '월',
    time: '오전 7시',
    onoff: '공개 알림',
  },
  {
    title: '아니요, 뚱인데요',
    message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
    img: 'img url',
    day: '월',
    time: '오전 7시',
    onoff: '공개 알림',
  },
  {
    title: '아니요, 뚱인데요',
    message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
    img: 'img url',
    day: '월',
    time: '오전 7시',
    onoff: '공개 알림',
  },
]

const alarmDrawer = () => {
  // const [clickStatus, setClickStatus] = useState(false)

  // const handleClick = () => {}

  return (
    <AlarmDrawerWrapper>
      <Title>알림 서랍</Title>
      <AlarmDrawerContentWrapper>
        <SubTitle>활성화 된 알림</SubTitle>
        <AlarmListWrapper>
          {alarmList.map(alarm => (
            <RrAlarmDrawerCard
              userImg=""
              userName=""
              title={alarm.title}
              message={alarm.message}
              img={alarm.img}
              day={alarm.day}
              time={alarm.time}
              onoff={alarm.onoff}
            />
          ))}
        </AlarmListWrapper>
      </AlarmDrawerContentWrapper>
      <AlarmDrawerContentWrapper>
        <SubTitle>비활성화 된 알림</SubTitle>
        <AlarmListWrapper>
          {alarmList.map(alarm => (
            <RrAlarmDrawerCard
              userImg=""
              userName=""
              title={alarm.title}
              message={alarm.message}
              img={alarm.img}
              day={alarm.day}
              time={alarm.time}
              onoff={alarm.onoff}
            />
          ))}
        </AlarmListWrapper>
      </AlarmDrawerContentWrapper>

      <RrAlarmDrawerModal userImg="유저사진" userName="유저이름" time="오전 7시" day="월" title="아니요, 뚱인데요" message="스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs" link="www.dsfd.dsf"/>
    </AlarmDrawerWrapper>
  )
}

export default alarmDrawer

const AlarmDrawerWrapper = styled.div`
  margin-bottom: 161px;
  padding: 0 88px;
`

const Title = styled.h2`
  margin: 92px 0 69px;
  text-align: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`
const AlarmDrawerContentWrapper = styled.div`
  margin: 0 auto 50px;
`

const AlarmListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 416px));
  gap: 12px 17px;
`

const SubTitle = styled.h3`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 14px;
  font-weight: normal;
  font-size: 20px;
`

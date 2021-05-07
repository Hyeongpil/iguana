/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import RrAlarmDrawerCard from '../components/organism/RrAlarmDrawerCard'
import RrAlarmDrawerModal from '../components/organism/RrAlarmDrawerModal'
import AlarmRepository from '../repositories/AlarmRepository'
import { IAlarmDrawer } from 'entities/dto/AlarmDto'
import { Alarm } from '../entities/Alarm'

// const alarmList = [
//   {
//     title: '아니요, 뚱인데요',
//     message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
//     img: 'img url',
//     day: '월',
//     time: '오전 4시',
//     onoff: '공개 알림',
//   },
//   {
//     title: '아니요, 뚱인데요',
//     message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
//     img: 'img url',
//     day: '월',
//     time: '오전 5시',
//     onoff: '공개 알림',
//   },
//   {
//     title: '아니요, 뚱인데요',
//     message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
//     img: 'img url',
//     day: '월',
//     time: '오전 6시',
//     onoff: '공개 알림',
//   },
//   {
//     title: '아니요, 뚱인데요',
//     message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
//     img: 'img url',
//     day: '월',
//     time: '오전 7시',
//     onoff: '공개 알림',
//   },
//   {
//     title: '아니요, 뚱인데요',
//     message: '스펀지밥 전편 보기. dsfdfsdfsfsdfsdfsdfsdfsdfsfsdfsfs',
//     img: 'img url',
//     day: '월',
//     time: '오전 8시',
//     onoff: '공개 알림',
//   },
// ]

const alarmDrawer: FC = () => {
  const [clickStatus, setClickStatus] = useState(false)
  const [alarmData, setAlarmData] = useState(new Alarm())

  const [alarms, setAlarms] = useState<IAlarmDrawer[]>([])

  const repository = useMemo(() => new AlarmRepository(), [])

  const fetchAlarms = useCallback(async () => {
    setAlarms((await repository.FetchAlarms()) as IAlarmDrawer[])
  }, [repository])

  useEffect(() => {
    fetchAlarms()
  }, [fetchAlarms])

  const handleClick = data => {
    console.log('click')
    console.log(data)
    setClickStatus(true)
    setAlarmData(data)
    // setAlarms(data)
  }

  const closeModal = data => {
    console.log(data)
    setClickStatus(data)
  }

  return (
    <AlarmDrawerWrapper>
      <Title>알림 서랍</Title>
      <AlarmDrawerContentWrapper>
        <SubTitle>활성화 된 알림</SubTitle>
        <AlarmListWrapper>
          {alarms.map(alarm => (
            <RrAlarmDrawerCard
              key={alarm.id}
              userImg=""
              userName={alarm.user.nickname}
              title={alarm.title}
              message={alarm.description}
              img={alarm.imageUrl}
              day={alarm.calendarCondition.dayOfWeek}
              time={alarm.calendarCondition.hour}
              onoff={alarm.alarmState.isActive}
              clickEvent={() => {
                handleClick(alarm)
              }}
            />
          ))}
        </AlarmListWrapper>
      </AlarmDrawerContentWrapper>
      <AlarmDrawerContentWrapper>
        <SubTitle>비활성화 된 알림</SubTitle>
        <AlarmListWrapper>
          {alarms.map(alarm => (
            <RrAlarmDrawerCard
              key={alarm.id}
              userImg=""
              userName={alarm.user.nickname}
              title={alarm.title}
              message={alarm.description}
              img={alarm.imageUrl}
              day={alarm.calendarCondition.dayOfWeek}
              time={alarm.calendarCondition.hour}
              onoff={alarm.alarmState.isActive}
              clickEvent={() => {
                handleClick(alarm)
              }}
            />
          ))}
        </AlarmListWrapper>
      </AlarmDrawerContentWrapper>

      <RrAlarmDrawerModal
        closeFunction={closeModal}
        openStatus={clickStatus}
        clickedAlarmData={alarmData}
      />
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

import RrButton from 'components/atom/RrButton'
import RrSwitch from 'components/atom/RrSwitch'
import RrCheckbox from 'components/atom/RrCheckbox'
import RrAlarmDrawerCard from 'components/organism/RrAlarmDrawerCard'
import React from 'react'
import RrAlarmCard from 'components/organism/RrAlarmCard'

const handleClick = () => {
  console.log('로ㅓ그인 클릭')
}
const handleSwitch = value => {
  console.log('스위치 :', value)
}
const handleChangeCheckbox = value => {
  console.log(value)
}

const IndexPage = () => {
  return (
    <>
      <RrButton content="로그인" onClick={handleClick} />
      <RrSwitch idx="1" onChange={handleSwitch} />
      <RrCheckbox
        idx="lll"
        content="자동로그인"
        onChange={handleChangeCheckbox}
      />
      <RrAlarmCard title="알람 제목" content="알람 내용 알람 내용" />
      <RrAlarmDrawerCard
        _id="sdf"
        time="오전 7:00"
        message="아침 7시에 일어나기"
      />
    </>
  )
}
export default IndexPage

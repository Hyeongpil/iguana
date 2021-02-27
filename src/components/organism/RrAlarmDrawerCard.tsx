import React, { useState } from 'react'
import styled from 'styled-components'
import RrSwitch from '../atom/RrSwitch'

const RrAlarmDrawerCard = ({ _id, time, message }) => {
  const [onOff, setOnOff] = useState('비공개')
  const handleChange = value => {
    console.log(value)
    value ? setOnOff('공개') : setOnOff('비공개')
  }
  return (
    <RrAlarmDrawerCardWrapper>
      <RrAlarmDrawerCardListWrapper>
        <Img src="" alt="" />
        <ContentsWrapper>
          <TextWrapper>
            <span>{time}</span>
            <span>{message}</span>
          </TextWrapper>
          <RrSwitchButton idx={_id} onChange={handleChange} />
        </ContentsWrapper>
      </RrAlarmDrawerCardListWrapper>
      <OnOffText>{onOff}</OnOffText>
    </RrAlarmDrawerCardWrapper>
  )
}

export default RrAlarmDrawerCard

const RrAlarmDrawerCardWrapper = styled.div`
  display: flex;
  align-items: center;
`
const RrAlarmDrawerCardListWrapper = styled.div`
  width: 567px;
  height: 87px;
  margin: 0 33px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`

const Img = styled.img`
  width: 87px;
  height: 86px;
  background: rgba(150, 150, 150, 0.07);
  border-radius: 10px;
`

const ContentsWrapper = styled.div`
  width: 478px;
  margin: 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextWrapper = styled.div`
  span {
    margin-right: 33px;
  }
`
const RrSwitchButton = styled(RrSwitch)`

`

const OnOffText = styled.span``

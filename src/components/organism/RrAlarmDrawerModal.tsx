import React, { FC } from 'react'
import styled from 'styled-components'
import RrUserImg from '../atom/RrUserImg'
import RrLike from '../molecule/RrLike'
import { Alarm } from '../../entities/Alarm'

interface RrAlarmDrawerModalProps {
  closeFunction: Function
  openStatus: boolean
  clickedAlarmData: Alarm
}
const RrAlarmDrawerModal: FC<RrAlarmDrawerModalProps> = ({
  closeFunction,
  openStatus,
  clickedAlarmData,
}) => {
  const onClickCloseButton = () => {
    closeFunction(false)
  }
  console.log('clickedAlarmData', clickedAlarmData)

  return (
    <RrAlarmDrawerModalWrapper status={openStatus}>
      <RrAlarmDrawerModalContentsWrapper>
        <LeftContentWrapper>
          <UserWrapper>
            {/* <RrUserImg image={clickedAlarmData.imageUrl} size="" /> */}
            <span>{clickedAlarmData.id}</span>
          </UserWrapper>
          <RrLikeComponent count="" />
        </LeftContentWrapper>
        <RightContentWrapper>
          <Time>오전 7:00</Time>
          <Day>월/수/목</Day>
          <MessageWrapper>
            <Title>{clickedAlarmData.title}</Title>
            <Message>{clickedAlarmData.description}</Message>
          </MessageWrapper>
          <MessageWrapper>
            <Title>링크</Title>
            <A href="">{clickedAlarmData.shareUrl}</A>
          </MessageWrapper>
          <ShareButton>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z"
                fill="#222222"
              />
            </svg>
            <span>공유하기</span>
          </ShareButton>
        </RightContentWrapper>
        <CloseButton onClick={onClickCloseButton}>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9149 0.625661C11.3874 0.153103 12.1535 0.15304 12.626 0.62552C13.0985 1.098 13.0984 1.8641 12.6259 2.33666L2.93267 12.0299C2.46012 12.5024 1.69401 12.5025 1.22153 12.03C0.749054 11.5575 0.749117 10.7914 1.22167 10.3189L10.9149 0.625661Z"
              fill="#8E8E93"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.549 10.2423C13.0215 10.7148 13.0214 11.4809 12.5488 11.9535C12.0763 12.426 11.3102 12.4261 10.8377 11.9536L1.29754 2.41346C0.825058 1.94098 0.825122 1.17488 1.29768 0.702321C1.77024 0.229763 2.53634 0.2297 3.00882 0.70218L12.549 10.2423Z"
              fill="#8E8E93"
            />
          </svg>
        </CloseButton>
      </RrAlarmDrawerModalContentsWrapper>
    </RrAlarmDrawerModalWrapper>
  )
}

export default RrAlarmDrawerModal

const RrAlarmDrawerModalWrapper = styled.div<{ status: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.status ? 'block' : 'none')};
`

const RrAlarmDrawerModalContentsWrapper = styled.div`
  width: 848px;
  height: 460px;
  padding: 74px 30px 45px;
  position: absolute;
  left: 50%;
  top: 211px;
  transform: translateX(-50%);

  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 13px;

  display: flex;
`

const LeftContentWrapper = styled.div`
  width: 427px;
  height: 325px;
  margin-right: 32px;
  background: url('image/alarmDetail.png') #ddd;
  background-size: cover;
  border-radius: 16px;
  position: relative;

  // :nth-child(1) {
  //   outline: 2px solid red;
  // }
`

const UserWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;

  span {
    padding-left: 6px;
    color: #fff;
    font-size: 13px;
  }
`

const RrLikeComponent = styled(RrLike)`
  outline: 1px solid lime;
  position: absolute;
  top: 0;
  right: 0;
`

const RightContentWrapper = styled.div`
  width: 50%;
`

const Time = styled.h3`
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 20px;
`

const Day = styled.span`
  margin-bottom: 30px;
  font-size: 16px;
  display: inline-block;
`

const MessageWrapper = styled.div`
  margin-bottom: 12px;
  padding: 10px 12px;
  background: rgba(245, 245, 245, 0.6);
  backdrop-filter: blur(54.3656px);
  border-radius: 13px;
`

const Title = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`

const Message = styled.span`
  font-size: 15px;
`

const A = styled.a`
  font-size: 12px;
  color: #000;
  text-decoration: none;
`

const ShareButton = styled.button`
  border: none;
  margin-top: 40px;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  svg {
    margin-right: 19px;
    transform: translateY(-2px);
  }

  span {
    font-size: 15px;
  }

  &:before {
    content: '';
    display: block;
    width: 343px;
    height: 1px;
    background-color: #f2f2f2;
    position: absolute;
    top: -24px;
  }
`

const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgba(249, 249, 249, 0.78);
  backdrop-filter: blur(54.3656px);
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;

  svg {
    transform: translate(1px 2px) !important;
  }
`

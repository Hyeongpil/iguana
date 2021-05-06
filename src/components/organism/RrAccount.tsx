import React, { useState, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import RrDeleteModal from './RrDeleteModal'
import UserRepository from 'repositories/UserRepository'

const RrAccount = () => {
  const [clickStatus, setClickStatus] = useState(false)
  const [nickname, setNickname] = useState('')

  const repository = useMemo(() => new UserRepository(), [])

  const createNickname = useCallback(
    async nickname => {
      await repository.CreateNickname(nickname)
    },
    [repository],
  )

  const onSubmitNickname = event => {
    event.preventDefault()
    createNickname(nickname).then(res => {
      console.log(res)
    })
  }

  const handleClick = () => {
    setClickStatus(true)
  }

  const closeModal = (data: boolean) => {
    setClickStatus(data)
  }

  const onKeyUpInput = event => {
    const inputText = event.target.value
    setNickname(inputText)
  }

  return (
    <RrAccountWrapper>
      <ContentsWrapper>
        <Title>프로필 정보</Title>
        <Contents>
          <SemiTitle>닉네임</SemiTitle>
          <Form onSubmit={onSubmitNickname}>
            <input type="text" onKeyUp={onKeyUpInput} />
            <input type="submit" value="저장하기" />
            {nickname !== '' ? <span>사용 가능한 닉네임 입니다.</span> : null}
          </Form>
        </Contents>
      </ContentsWrapper>
      <ContentsWrapper>
        <Title>계정 설정</Title>
        <Contents>
          <SemiTitle>회원 탈퇴</SemiTitle>
          <Description>
            Rrrr에서 등록하신 알림들을 더 이상 이용할 수 없게 되며, 지금까지
            기록해 온 모든 알림 및 활동 기록들을 영영 볼 수 없습니다. 알림
            기록을 남기고 싶지 않은 경우 알림 삭제 이후 탈퇴를 진행해주세요.
          </Description>
          <ButtonWrapper>
            <Button onClick={handleClick}>탈퇴하기</Button>
          </ButtonWrapper>
        </Contents>
      </ContentsWrapper>
      <RrDeleteModal openStatus={clickStatus} closeFunction={closeModal} />
    </RrAccountWrapper>
  )
}

export default RrAccount

const RrAccountWrapper = styled.div`
  padding: 40px 0;
`

const ContentsWrapper = styled.div`
  border-bottom: 1px solid #f2f2f2;

  :nth-child(1) {
    padding-bottom: 40px;
  }

  :nth-child(2) {
    border: none;
    padding-top: 40px;
  }
`

const Title = styled.h3`
  margin-bottom: 20px;
  color: #222222;
  font-weight: 600;
  font-size: 16px;
`

const SemiTitle = styled.p`
  min-width: 150px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  flex: 1 150px;
`

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Form = styled.form`
  width: calc(100% - 150px);
  display: inline-block;

  input[type='text'] {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    width: 233px;
    height: 30px;
    font-size: 15px;

    :focus {
      outline: none;
    }
  }

  input[type='submit'] {
    width: 68px;
    height: 30px;
    margin-left: 16px;
    background: #222222;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    transform: translateY(-2px);
  }

  span {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.122727px;
    color: #4f87f5;
    display: block;
    margin-top: 5px;
  }
`

const Description = styled.span`
  width: calc(100% - 150px);
  display: inline-block;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  color: #4f4f4f;
`
const ButtonWrapper = styled.div`
  text-align: right;
  flex: 1 100%;
`

const Button = styled.button`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  color: #ff5c5c;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

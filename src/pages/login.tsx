import React from 'react'
import styled from 'styled-components'
import RrInput from 'components/atom/RrInput'
import RrIcon from 'components/atom/RrIcon'

const login = () => {
  return (
    <LoginWrapper>
      <LoginInputWrapper>
        <Title>로그인 해주세요.</Title>
        <Form>
          <RrInput type="text" text="애플 아이디" />
          <RrInput type="password" text="비밀번호" />
          <LoginDescription>
            Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
            주소입니다.
          </LoginDescription>
          <SubmitWrapper>
            <RrInput type="submit" text="애플 아이디로 로그인" />
            <RrIcon
              src="image/Icon-Apple.png"
              alt="Icon-Apple"
              size="22"
              top="16"
              left="28"
            />
          </SubmitWrapper>
        </Form>
      </LoginInputWrapper>
      <LoginImageWrapper>
        <Img src="image/loginImg.png" alt="login-image" />
      </LoginImageWrapper>
    </LoginWrapper>
  )
}

export default login

const LoginWrapper = styled.div`
  max-width: 899px;
  margin: 153px auto;
  // padding: 0 88px;
  display: float;
`

const LoginInputWrapper = styled.div`
  width: 50%;
  position: relative;
`

const Title = styled.h2`
  font-size: 36px;
`

const Form = styled.form``

const LoginDescription = styled.span`
  max-width: 407px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 19px;
  display: block;
`

const SubmitWrapper = styled.div`
  max-width: 407px;
  position: relative;
`

const LoginImageWrapper = styled.div`
  width: 50%;
`
const Img = styled.img`
  width: 100%;
`

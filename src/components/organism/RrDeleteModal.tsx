import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import UserRepository from 'repositories/UserRepository'

const RrDeleteModal = ({ openStatus, closeFunction }) => {
  const repository = useMemo(() => new UserRepository(), [])

  const deleteUser = useCallback(async () => {
    await repository.DeleteUser()
  }, [repository])

  const onClickDeleteButton = () => {
    deleteUser().then(res => {
      console.log(res)
    })
    closeFunction(false)
  }

  const onClickCloseButton = () => {
    closeFunction(false)
  }

  return (
    <RrDeleteModalWrapper status={openStatus}>
      <ContentsWrapper>
        <Title>회원 탈퇴</Title>
        <Description>탈퇴 하시겠습니까?</Description>
        <ButtonWrapper>
          <button onClick={onClickDeleteButton}>탈퇴</button>
          <button onClick={onClickCloseButton}>취소</button>
        </ButtonWrapper>
        <CloseButton onClick={onClickCloseButton}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                fill="#F9F9F9"
                fillOpacity="0.78"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.6256 9.62558C20.1531 9.1531 19.387 9.15317 18.9144 9.62572L14.9235 13.6167L11.0089 9.70209C10.5364 9.22962 9.77032 9.22968 9.29776 9.70224C8.82521 10.1748 8.82514 10.9409 9.29762 11.4134L13.2122 15.328L9.22125 19.3189C8.74869 19.7915 8.74863 20.5576 9.22111 21.0301C9.69359 21.5025 10.4597 21.5025 10.9322 21.0299L14.9232 17.039L18.8378 20.9535C19.3103 21.426 20.0764 21.426 20.5489 20.9534C21.0215 20.4808 21.0215 19.7147 20.5491 19.2423L16.6345 15.3277L20.6254 11.3367C21.098 10.8642 21.0981 10.0981 20.6256 9.62558Z"
              fill="#8E8E93"
            />
            <defs>
              <filter
                id="filter0_b"
                x="-54.3656"
                y="-54.3656"
                width="138.731"
                height="138.731"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="27.1828" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </CloseButton>
      </ContentsWrapper>
    </RrDeleteModalWrapper>
  )
}

export default RrDeleteModal

const RrDeleteModalWrapper = styled.div<{ status: boolean }>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.status ? 'block' : 'none')};
`

const ContentsWrapper = styled.div`
  border-radius: 10px;
  width: 375px;
  margin: 30vh auto 0;
  padding: 26px 0;
  background-color: #fff;
  position: relative;
`

const Title = styled.h3`
  margin: 0;
  padding: 0 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`

const Description = styled.p`
  border-top: 1px solid #f2f2f2;
  margin: 26px 0 31px 0;
  padding: 20px 16px 0;
`

const ButtonWrapper = styled.div`
  padding: 0 16px;
  text-align: right;

  button {
    width: 68px;
    height: 30px;
    cursor: pointer;

    background: #fbe0e0;
    border: none;
    border-radius: 4px;
    color: #ff5c5c;
  }

  button:nth-child(2) {
    margin-left: 13px;
    color: #222;
    background: #e0e0e0;
  }
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 10px;
  cursor: pointer;
`

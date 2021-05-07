import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RrHeaderModal = props => {
  const onMouseleave = () => {
    props.showFunction(false)
  }

  return (
    <RrHeaderModalWrapper onMouseLeave={onMouseleave}>
      <LinkButton to="/my/account">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6421 14.1969C14.5406 13.9344 9.45939 13.9344 8.35787 14.1969C6.35025 14.6667 5 16.1313 5 17.7617V19.1986C5 19.6408 5.46193 20 6.03046 20H17.9695C18.5381 20 19 19.6408 19 19.1986V17.7617C19 16.1313 17.6497 14.6667 15.6421 14.1969Z"
            fill="#222222"
          />
          <path
            d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
            fill="#222222"
          />
        </svg>
        <span>계정</span>
      </LinkButton>

      <LinkButton to="/my/notice">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4 4H5.6C4.72 4 4.008 4.72 4.008 5.6L4 20L7.2 16.8H18.4C19.28 16.8 20 16.08 20 15.2V5.6C20 4.72 19.28 4 18.4 4ZM12.8 10.4C12.8 10.8418 12.4418 11.2 12 11.2C11.5582 11.2 11.2 10.8418 11.2 10.4V7.2C11.2 6.75817 11.5582 6.4 12 6.4C12.4418 6.4 12.8 6.75817 12.8 7.2V10.4ZM12.8 13.6C12.8 14.0418 12.4418 14.4 12 14.4C11.5582 14.4 11.2 14.0418 11.2 13.6C11.2 13.1582 11.5582 12.8 12 12.8C12.4418 12.8 12.8 13.1582 12.8 13.6Z"
            fill="#4F4F4F"
          />
        </svg>

        <span>공지사항</span>
      </LinkButton>
      <LinkButton to="/my/qna">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4 6H5.6C4.72 6 4.008 6.675 4.008 7.5L4 16.5C4 17.325 4.72 18 5.6 18H18.4C19.28 18 20 17.325 20 16.5V7.5C20 6.675 19.28 6 18.4 6ZM18.4 8.62916C18.4 8.85886 18.2782 9.07135 18.08 9.18748L12 12.75L5.91996 9.18748C5.72177 9.07135 5.6 8.85886 5.6 8.62916C5.6 8.12918 6.14285 7.81808 6.57424 8.07084L12 11.25L17.4258 8.07084C17.8571 7.81808 18.4 8.12918 18.4 8.62916Z"
            fill="#4F4F4F"
          />
        </svg>

        <span>문의하기</span>
      </LinkButton>
      <Button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.767 8.2494L17.6107 11.0932L9.06155 11.0932C8.50711 11.0932 8.07786 11.5403 8.07786 12.0769C8.07786 12.6134 8.52499 13.0606 9.06155 13.0606L17.6107 13.0606L14.767 15.9043C14.5702 16.1011 14.4808 16.3515 14.4808 16.6018C14.4808 16.8522 14.5702 17.1026 14.767 17.2994C15.1604 17.6929 15.7864 17.6929 16.162 17.2994L20.7049 12.7744C21.0984 12.3809 21.0984 11.7549 20.7049 11.3793L16.1799 6.85435C15.7864 6.46087 15.1604 6.46087 14.7849 6.85435C14.3914 7.22994 14.3914 7.85592 14.767 8.2494Z"
            fill="#4F4F4F"
          />
          <path
            d="M9.95557 19.0163C9.95557 18.4619 9.50843 18.0326 8.97187 18.0326L5.96714 18.0326L5.96714 6.13888L8.97188 6.13888C9.52632 6.13888 9.95557 5.69175 9.95557 5.15519C9.95557 4.60074 9.50843 4.17149 8.97188 4.17149L4.98345 4.17149C4.429 4.17149 3.99976 4.61863 3.99976 5.15519L3.99975 19.0163C3.99975 19.5708 4.44689 20 4.98345 20L8.97187 20C9.52632 20 9.95557 19.5529 9.95557 19.0163Z"
            fill="#4F4F4F"
          />
        </svg>

        <span>로그아웃</span>
      </Button>
    </RrHeaderModalWrapper>
  )
}

export default RrHeaderModal

const RrHeaderModalWrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 6%;

  background: #ffffff;
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 150px;
`

const Button = styled.button`
  display: block;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;

  :last-child {
    border: none;
  }

  :hover span {
    color: #000;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.122727px;

    color: #4f4f4f;
  }

  svg {
    margin-right: 12px;
  }
`

const LinkButton = styled(Link)`
  display: block;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;

  :last-child {
    border: none;
  }

  :hover span {
    color: #000;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.122727px;

    color: #4f4f4f;
  }

  svg {
    margin-right: 12px;
  }
`

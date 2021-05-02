import React from 'react'
import styled from 'styled-components'

const RrInput = ({ type, text }) => {
  // const inputType = type

  return (
    <RrInputWrapper
      type={type}
      placeholder={text}
      value={type === 'submit' ? text : undefined}
    ></RrInputWrapper>
  )
}

export default RrInput

const RrInputWrapper = styled.input<{ type: string }>`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  max-width: 408px;
  height: 54px;
  margin-bottom: 15px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 19px;

  :focus {
    outline: none;
  }

  ${props =>
    props.type === 'submit'
      ? `
    color: #fff;
    font-weight: bold;
    background-color: #222;
    cursor: pointer;
  `
      : null}
`

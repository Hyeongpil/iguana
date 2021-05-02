import React from 'react'
import styled from 'styled-components'

const RrSwitch = ({ idx, onChange }) => {
  const handleChange = e => {
    onChange(e.target.checked)
  }

  return (
    <RrSwitchWrapper>
      <CheckBox id={idx} type="checkbox" onChange={handleChange} />
      <CheckBoxLabel htmlFor={idx} />
    </RrSwitchWrapper>
  )
}

export default RrSwitch

const RrSwitchWrapper = styled.div`
  position: relative;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 22px;
  border: 2px solid #000;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    /* margin: 3px; */
    background: #000;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  /* height: 26px; */
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      /* width: 18px;
      height: 18px; */
      margin-left: 23px;
      transition: 0.2s;
    }
  }
`

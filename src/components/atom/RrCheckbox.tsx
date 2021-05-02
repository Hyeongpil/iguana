import React from 'react'
import styled from 'styled-components'

const RrCheckbox = ({ idx, content, onChange }) => {
  const handleChange = e => {
    console.log(idx, e.target.checked)
  }
  return (
    <RrCheckboxWrapper>
      <input type="checkbox" id={idx} onChange={handleChange}></input>
      <label htmlFor={idx}>{content}</label>
    </RrCheckboxWrapper>
  )
}

export default RrCheckbox

const RrCheckboxWrapper = styled.form``

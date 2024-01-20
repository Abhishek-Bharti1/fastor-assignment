import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: 430px;
height: 56px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #DADADA;
background: #F7F8F9;
color: #8391A1;
font-family: Urbanist;
font-size: 1rem;
padding: 0 10px;
font-style: normal;
font-weight: 500;
line-height: 125%; 
margin: 1rem;
`
const InputBox = ({placeholder, input_type,value,onChange}) => {
  return (
    <Input placeholder={placeholder} type={input_type} value={value} onChange={onChange}/>
  )
}

export default InputBox
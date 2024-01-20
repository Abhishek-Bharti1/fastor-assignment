import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: ${props=> props?.bg_color};
border-radius: 20px;
padding: 25px;
width: 120px;
height: 120px;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.5rem;
margin-bottom: 5px;

`
const Icon = ({background_color, text, icon}) => {
  return (
    <div style={{margin: "29px"}}>

    <Container bg_color={background_color}>
        <div>
            {icon()}
        </div>
    </Container>
        <div>{text}</div>
    </div>
  )
}

export default Icon
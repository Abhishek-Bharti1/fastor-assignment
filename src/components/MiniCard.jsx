import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
width: 150px;
height: 190px;
overflow: hidden;
border-radius: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
cursor:pointer;
& img{
  width: 100%;
  height: 65%;
}
& .content{
  font-size: 9px;
}
`

const MiniCard = ({prod}) => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/description",{state:{prod}})
  }
  return (
    <Container onClick={handleClick}>
        <img src={prod.images[0].url} alt="logo"/>
        <div className='content'>
            <span style={{fontWeight:700}}>{prod.restaurant_name}</span><br/>
            <span>{prod.location?.location_address}</span>
        </div>
    </Container>
  )
}

export default MiniCard
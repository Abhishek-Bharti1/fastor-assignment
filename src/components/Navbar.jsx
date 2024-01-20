import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:1rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
& .heading{
    display: flex;
}
& .heading_title{
    font-size: 1.5rem;
}
&.place_name{

}


`
const Navbar = () => {
  return (
    <Container>
        <div className="heading heading_title">Pre Order from </div>
        <div className="heading place_name">Connaught Place</div>
    </Container>
  )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 150px;
height: 190px;
overflow: hidden;
border-radius: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
& img{
  width: 100%;
  height: 65%;
}
& .content{
  padding:5px;
}
`

const MiniCard = () => {
  return (
    <Container>
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='content'>
            <div>Nik Bakkers</div>
            <div>Connaught Place, New Delhi</div>
        </div>
    </Container>
  )
}

export default MiniCard
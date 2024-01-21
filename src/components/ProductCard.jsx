import React from 'react';
import styled from 'styled-components'
import { BiSolidOffer } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Card = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 0 20px;
width: 500px;
height: 250px;
border-radius: 5px;
overflow: hidden;
display: flex;
align-items: center;
cursor: pointer;
& .left{
  flex: 1;
  overflow: hidden;
  border-radius: 20px;

  height: 80%;
}
& .left img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
& .right{
  flex: 1.2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
& .title{
  font-size: 1.5rem;
  font-weight: 500;
  color: #46555f;
}
& .desc{
  display: flex;
  font-size: 1rem;
  color: #afaeae;
  margin: 10px 0;

}
& .offer{
display: flex;
align-items: center;
margin: 10px 0;
gap: 10px;
font-size: 1.2rem;
color: #e1b5a0;
}
& .bottom{
  margin:10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
`



const ProductCard = ({prod}) => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/description",{state:{prod}})
  }
  return (
<>

  <Card onClick={handleClick}>
     <div className='left'>
      <img src={prod.images[0].url} alt="logo" />
     </div>
     <div className='right'>
      <div className="title">{prod.restaurant_name}</div>
      <div className='desc'>{prod.location_address_2}<br /> {prod.location?.location_address}</div>
      <div className='offer'>
        <BiSolidOffer /> <span>4 Offers trending</span>
      </div>
      <div className='bottom'>
        <div className='rating'>
          <FaStar />{prod.restaurant_avg_rating}
          <br />
          <span>Popularity</span>
        </div>
        <div className='cost'>
         $ {prod.avg_cost_for_two}
          <br />
          <span>Cost for two</span>
        </div>
      </div>
     </div>
     
    </Card>

</>
  )
}

export default ProductCard
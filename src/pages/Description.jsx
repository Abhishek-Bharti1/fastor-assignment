import React from "react";
import styled from "styled-components";
import { BiSolidOffer } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 80vw;
  margin: auto;
  margin-top: 10px;
  & .image_holder {
    height: 50%;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .description{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem;
  }
  & .top{
    display: flex;
    justify-content: space-between;
  }
  & .food_title{
    font-size: 2.4rem;
  }
  & .res_place{
    font-size: 0.9rem;
    margin:1rem;
  }
  & .food_offers{
    color: #f9a267;
  }
  .bottom{
    width: 60%;
    margin: 2rem auto;
  }
`;
const Description = () => {
  const location = useLocation();
  console.log(location);
  const desc = location.state && location.state.prod;
  return (
    <Container>
      <div className="image_holder">
        <img
          src={desc.images[0].url}
          alt="logo"
        />
      </div>
      <div className="description">
        <div className="top">
          <div className="left">
            <div className="food_title">{desc.restaurant_name}</div>
            <div className="res_place">{desc.location?.location_address}</div>
            <div className="food_offers">

            <BiSolidOffer /> <span>4 Offers trending</span>
            </div>
          </div>
          <div>
          <div className='rating'>
          <FaStar /> {desc.restaurant_avg_rating}
         
        </div>
          </div>
        </div>
        <div className="bottom">
            Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache
        </div>
      </div>
    </Container>
  );
};

export default Description;

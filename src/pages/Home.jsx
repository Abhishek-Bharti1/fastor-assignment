import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Greeting from "../components/Greeting";
import { IoIosArrowDropright } from "react-icons/io";
import MiniCard from "../components/MiniCard";
import SliderComponent from "../components/Slider";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import {  useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Container = styled.div`
  width: 85vw;
  margin: auto;
  & .mini_cards_container {
    margin: 1.5rem;
    margin-top: 50px;
  }
  & .title {
    display: flex;
    justify-content: space-between;
  }
  & .mini_cards {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
  & .cards_container{
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 100px;
  }
`;
const Home = () => {
  const [resData, setResData] = useState([]);
  const location = useLocation();
  const token = location.state && location.state.otpData.data.token;
  const getData = async () => {
    try {
      const apiUrl = "https://staging.fastor.in/v1/m/restaurant?city_id=118";

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(apiUrl, { headers });

      const responseData = response.data;
      setResData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(resData);
  return (
    <>
      <Navbar />
      <Container>
        <Greeting />
        <div className="mini_cards_container">
          <div className="title">
            <div>Your Taste</div>
            <span>
              See All <IoIosArrowDropright />
            </span>
          </div>
          <div className="mini_cards">
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
        </div>
        <SliderComponent />
        <div className="cards_container">
         
         {
          resData?.map((prod)=><ProductCard prod = {prod}/>)
         } 
       
        </div>
      </Container>
    </>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import { BiSolidOffer } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 28vh;
  padding: 1rem;
  margin-top: 30px;
  & .left {
    background-color: #efefef;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    flex: 1;
    & div:nth-child(1){
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    & div:nth-child(2){
font-size: 1.1rem;
}
  }
  & .right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;
const Greeting = () => {
  return (
    <Container>
      <div className="left">
        <div>Guest</div>
        <div>Let's explore this evening</div>
      </div>
      <div className="right">
        <Icon text="Offers" background_color="#f57d6b" icon={BiSolidOffer} />
        <Icon text="Wallet" background_color="#5483cf" icon={FaWallet} />
      </div>
    </Container>
  );
};

export default Greeting;

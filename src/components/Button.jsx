import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 430px;
  height: 56px;
  flex-shrink: 0;
  color: white;
  text-align: center;
  font-family: Urbanist;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 8px;
  background: #ff6d6a;
  border: none;
  cursor: pointer;
  &:active{
    background: #e76d6b;
  }
`;
const ButtonComponent = ({ text,onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default ButtonComponent;

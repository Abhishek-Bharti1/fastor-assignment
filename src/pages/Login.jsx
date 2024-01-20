import React, { useState } from "react";
import InputBox from '../components/InputBox'
import ButtonComponent from '../components/Button'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    & .title {
      font-size: 1.7rem;
    margin: 1.5rem;

    }
    & div:nth-child(2){
      margin: 1.5rem;

    }
`

const Login = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://staging.fastor.in/v1/pwa/user/register",
        {
          phone: mobileNumber,
          dial_code: "+91",
        }
      );
      const otpData = response.data;
      alert(otpData.data);
      navigate("/otp", { state: { phone: mobileNumber } });
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <Container>
        <div className='title'>Enter Your Mobile Number</div>
        <div>We will send you the 4 digit verification conde</div>
        <InputBox placeholder={"Enter Your Mobile Number"} input_type={"number"}
           value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        />
        <ButtonComponent text="Send Code" onClick={handleLogin}/>
    </Container>
  )
}

export default Login
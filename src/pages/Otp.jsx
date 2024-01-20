import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import ButtonComponent from '../components/Button'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
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
    & span{
      margin: 1rem;
    }
`

const Otp = () => {
  const location = useLocation();
  const phone = location.state && location.state.phone;
const history = useNavigate();
const [otp, setOtp] = useState("");

const handleVerifyOTP = async () => {
  try {
    const response = await axios.post(
      "https://staging.fastor.in/v1/pwa/user/login",
      {
        phone: phone,
        dial_code: "+91",
        otp: "123456",
      }
    );
    const otpData = response.data;
    history("/home", { state: { otpData } });
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
  return (
      <Container>
        <div className='title'>OTP Verification</div>
        <div>Enter the verification code we just sent on your Mobile Number.</div>
        <InputBox placeholder={"Enter OTP"} input_type={"number"}
    value={otp}
        onChange={(e) => setOtp(e.target.value)}
        />
        <ButtonComponent text="Verify"onClick={handleVerifyOTP}/>
        <span>Didn't received code? <code>Resend</code></span>
    </Container>
  )
}

export default Otp
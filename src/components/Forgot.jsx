import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import OtpInput from "react-otp-input";

function Forgot() {
  const [OTP, setOTP] = useState("");
  return (
    <>
      <form>
        <div className="for">
          <div className="for_otp">
            <span className="titlesignup">Forgot Password</span>
          </div>
          <div className="em">
            <label>Enter the registered email-id</label>
            <input className="in" type="email" name="email" />{" "}
          </div>
          <div>
            <label>Enter the OTP sent to the above email </label>
            <OtpInput
              className="otp"
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              secure
            />
          </div>
          <div>
            <button className="submitbtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Forgot;

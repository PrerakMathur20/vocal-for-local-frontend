import React, { useState } from "react";
import Form from "./Form";

var isSignup = false;
function Login() {
  const [contact, setContact] = useState({
    fname: "",
    passw: "",
    email: "",
  });

  function handleEventChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          passw: prevValue.passw,
          email: prevValue.email,
        };
      } else if (name === "passw") {
        return {
          fname: prevValue.fname,
          passw: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          passw: prevValue.passw,
          email: value,
        };
      }
    });
  }
  return (
    <>
      <div className="container2">
        <div className="row">
          <div className="title-text log">
            <img
              className="img1"
              src={require("./images/vl_logo.png").default}
              alt="logo"
            />
          </div>
          <div className="title-text log txt1">
            <h3 className="text1">Vocal for Local</h3>
          </div>
          <div className="title-text">
            <img
              className="img2"
              src={require("./images/login.png").default}
              alt="login-mockup"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-7 title-imgc">
          <div>
            <Form
              signupPg={isSignup}
              EventChange={handleEventChange}
              name={contact.fname}
              mail={contact.email}
              pass={contact.passw}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

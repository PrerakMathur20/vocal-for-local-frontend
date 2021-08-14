import React, { useState } from "react";
import Form from "./Form";

var isSignup = true;
function Signup() {
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
        <div className="intro title-text">
          <h4>Welcome,</h4>
          <p>
            The Indian market has been seeing changing dynamics since the
            uprising of E-Commerce, even though revenues have been boosting for
            them, the average Indian consumer still has kept their trust in the
            offline markets, with this project we wish to give the offline
            markets a technological revival.
          </p>
        </div>
        <div className="title-text">
          <img
            className="img2"
            src={require("./images/signup.png").default}
            alt="signup-mockup"
          />
        </div>
      </div>
      <div className="col-lg-5 col-md-7 title-imgc">
        <Form
          signupPg={isSignup}
          EventChange={handleEventChange}
          name={contact.fname}
          mail={contact.email}
          pass={contact.passw}
        />
      </div>
    </div>
  );
}

export default Signup;

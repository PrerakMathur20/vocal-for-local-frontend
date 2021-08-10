import React, { useState } from "react";
import Form from "./Form";
import Signup from "./Signup";
import Login from "./Login";

var isSignup = true;

function App() {
  const [contact, setContact] = useState({
    fname: "",
    passw: "",
    email: ""
  });

  function handleEventChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          passw: prevValue.passw,
          email: prevValue.email
        };
      } else if (name === "passw") {
        return {
          fname: prevValue.fname,
          passw: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          passw: prevValue.passw,
          email: value
        };
      }
    });
  }

  return (
    <div class="row">
      <div class="col-lg-7">{isSignup ? <Signup /> : <Login />}</div>
      <div class="col-lg-5 col-md-7 title-imgc">
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
  );
}

export default App;
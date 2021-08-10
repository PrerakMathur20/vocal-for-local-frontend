import React from "react";

function Login() {
  return (
    <div class="container2">
      <div class="row">
        <div class="title-text log">
          <img class="img1" src={require("./images/vl_logo.png").default} alt="logo" />
        </div>
        <div class="title-text log txt1">
          <h3 class="text1">Vocal for Local</h3>
        </div>
        <div class="title-text">
          <img class="img2" src={require("./images/login.png").default} alt="login-mockup" />
        </div>
      </div>
    </div>
  );
}

export default Login;
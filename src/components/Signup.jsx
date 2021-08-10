import React from "react";

function Signup() {
  return (
    <div class="container2">
      <div class="row">
        <div class="title-text log">
          <img class="img1" src={require("./images/vl_logo.png").default} alt="logo" />
        </div>
        <div class="title-text log txt1">
          <h3 class="text1">Vocal for Local</h3>
        </div>
        <div class="intro title-text">
          <h4>Welcome,</h4>
          <p>
            The Indian market has been seeing changing dynamics since the
            uprising of E-Commerce, even though revenues have been boosting for
            them, the average Indian consumer still has kept their trust in the
            offline markets, with this project we wish to give the offline
            markets a technological revival.
          </p>
        </div>
        <div class="title-text">
          <img class="img2" src={require("./images/signup.png").default} alt="signup-mockup" />
        </div>
      </div>
    </div>
  );
}

export default Signup;

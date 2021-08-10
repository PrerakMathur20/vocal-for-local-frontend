import React from "react";

function Form(props) {
  return (
    <div className="outer">
      <div className="form">
        <div className="signup">
          <span className="titlesignup">
            {props.signupPg ? "Sign Up" : "Log In"}
          </span>
        </div>
        <form className="form2">
          {props.signupPg && (
            <div>
              <label>Name</label>
              <br />
              <input
                className="in"
                type="name"
                onChange={props.EventChange}
                value={props.name}
                name="fname"
              />
              <br />
            </div>
          )}
          <label>Email</label>
          <br />
          <input
            className="in"
            type="email"
            onChange={props.EventChange}
            value={props.mail}
            name="email"
          />{" "}
          <br />
          <label>Password</label>
          <br />
          <input
            className="in"
            type="password"
            onChange={props.EventChange}
            value={props.pass}
            name="passw"
          />
          <br />
          {props.signupPg && (
            <div>
              <label>You want to use it as</label>
              <br />
              <div>
                <input
                  className="check"
                  type="checkbox"
                  id="consumer"
                  name="consumer"
                />
                <label className="consumertxt" for="consumer">
                  Consumer
                </label>
                <input
                  className="check"
                  type="checkbox"
                  id="shopowner"
                  name="shopowner"
                />
                <label className="shopownertxt" for="shopowner">
                  Shop Owner
                </label>
              </div>
            </div>
          )}
          <button className="submitbtn" type="submit">
            {props.signupPg ? "Sign Up" : "Log in"}
          </button>
          <p className="or">OR</p>
          <button className="googlebtn">
            <img
              src="https://img.icons8.com/color/452/google-logo.png"
              alt=""
              className="icon"
            ></img>
            <span className="buttonText">Continue with Google</span>
          </button>
          <br />
          <div className="lsttxt">
            <span className="lsttxt">Already have account ? </span>
            {props.signupPg ? (
              <span className="logintxt">Log in</span>
            ) : (
              <span className="logintxt">Sign Up</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

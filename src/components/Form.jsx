import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Sawo from "sawo";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshTokenSetup";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

const clientId =
  "908718149674-1vgs4cob5p1aln2laoedfhmnqbfuldfp.apps.googleusercontent.com";

function Form(props) {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSigned: true,
    accessType: "offline",
  });

  React.useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: "e2176123-60e7-4063-b83a-ab97ad2aac22",
      onSuccess: (payload) => {
        console.log(payload);
      },
    };
    if (!props.signupPg) {
      let sawo = new Sawo(config);
      sawo.showForm();
    }
  }, []);

  const [value, setValue] = useState({
    showpassword: false,
    passw: "",
  });
  const handleClickShowPassword = () => {
    setValue({ ...value, showpassword: !value.showpassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formData, setfromData] = useState({
    isAgree: false,
    account: "",
  });
  const handleChange = (props) => {
    const target = props.target;
    const name = target.name;
    const value = target.value;
    setfromData({
      ...formData,
      [name]: value,
    });
  };
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
              <Input
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
          <Input
            className="in"
            type="email"
            onChange={props.EventChange}
            value={props.mail}
            name="email"
          />{" "}
          <br />
          <label htmlFor="standard-adornment-password">Password</label>
          <br />
          <Input
            className="in"
            type={value.showpassword ? "text" : "password"}
            onChange={props.EventChange}
            value={props.pass}
            name="passw"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {value.showpassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br />
          {!props.signupPg && (
            <div className="forgot">
              <Link to="/forgot">Forgot password ?</Link>
            </div>
          )}
          {props.signupPg && (
            <div>
              <label>You want to use it as</label>
              <br />
              <div>
                <input
                  className="check"
                  type="radio"
                  id="consumer"
                  value="consumer"
                  name="account"
                  onChange={handleChange}
                />
                <label className="consumertxt" htmlFor="consumer">
                  Consumer
                </label>
                <input
                  className="check"
                  type="radio"
                  id="shopowner"
                  value="shopowner"
                  name="account"
                  onChange={handleChange}
                />
                <label className="shopownertxt" htmlFor="shopowner">
                  Shop Owner
                </label>
              </div>
            </div>
          )}
          <button className="submitbtn" type="submit">
            {props.signupPg ? "Sign Up" : "Log in"}
          </button>
          <p className="or">OR</p>
          {!props.signupPg && (
            <div
              id="sawo-container"
              style={{
                marginLeft: "7%",
                marginTop: "5%",
                width: "75%",
                height: "185px",
              }}
            ></div>
          )}
          {!props.signupPg && <p className="or">OR</p>}
          <button className="googlebtn" onClick={signIn}>
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
              <span className="logintxt">
                <Link to="/login">Log in</Link>
              </span>
            ) : (
              <span className="logintxt">
                <Link to="/register">Sign Up</Link>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

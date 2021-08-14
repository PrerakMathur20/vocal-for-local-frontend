import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";
import Forgot from "./Forgot";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="row">
          <Route path="/" exact component={Home} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

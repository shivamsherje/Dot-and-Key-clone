import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./2_Navbar";
import Footer from "./9_Footer";
import Homepage from "./Homepage";

const Login = () => {
  const func2 = () => {
    alert("login success!");
    window.location.href = "./Homepage.jsx";
    <Link></Link>;
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <h1>Login</h1>
        <div className="fb">
          <img src="https://i.stack.imgur.com/b6jfF.png" />
        </div>

        <form>
          <h4>EMAIL</h4>
          <input type="email" />
          <h4>PASSWORD</h4>
          <input type="password" />
          <br />
          <button onClick={func2}>Login</button>
        </form>
      </div>
      <br />
      <br />
      <hr />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;

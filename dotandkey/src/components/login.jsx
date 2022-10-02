import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./2_Navbar";
import Footer from "./9_Footer";

const Login = () => {
  const [goToHome, SetGotoHome] = React.useState(false);

  if (goToHome) {
    alert("login successfull");
    return <Navigate to="/"/>;
  }
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
          <button
            onClick={() => {
              SetGotoHome(true);
            }}
          >
            Login
          </button>
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

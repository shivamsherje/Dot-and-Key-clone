import React from "react";
import Navbar from "./2_Navbar";
import Footer from "./9_Footer";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [goToHome, SetGotoHome] = React.useState(false);

  if (goToHome) {
    alert("signin successfull");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <div className="form">
        <h1>Create Account</h1>
        <div className="fb">
          <img src="https://i.stack.imgur.com/b6jfF.png" alt="yes" />
        </div>

        <form>
          <h4>FIRST NAME</h4>
          <input />
          <h4>LAST NAME</h4>
          <input />
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
            Create
          </button>
        </form>
        <br />

        <a className="sin" href="login">
          Already have an account? Login here.
        </a>
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

export default Signin;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/545/545705.png" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" />
      </div>

      <div className="logo1">
        <img src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png" />
        <img src="https://cdn-icons-png.flaticon.com/512/2956/2956735.png" />
        <img src="https://cdn-icons-png.flaticon.com/512/2438/2438133.png" />

        <Link to="login">
          <img
            className="link1"
            src="https://cdn-icons-png.flaticon.com/512/3293/3293331.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

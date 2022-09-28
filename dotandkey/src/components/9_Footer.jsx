import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div>
          <p className="bold">GET TO KNOW US</p>
          <p className="bold2">
            ABOUT US
            <br />
            CONTACT US
            <br />
            EARTHCARE
            <br />
            AFFILIATE PROGRAM
            <br />
            TERMS & CONDITION
            <br />
            REFUND & CANCELLATION
            <br />
            PRIVACY POLICY
            <br />
            ORDER & SHIPPING
            <br />
            PAYMENT TERMS
            <br />
            TERMS OF SERVICE
            <br />
            REFUND POLICY
            <br />
          </p>
        </div>

        <div>
          <p className="bold">ALSO AVAILABLE ON</p>
          <p className="bold2">
            NYKAA
            <br />
            AMAZON
            <br />
            FLIPKART
            <br />
            MYNTRA
            <br />
          </p>
        </div>

        <div>
          <p className="bold">STAY UPDATED</p>
          <input
            className="input1"
            type="text"
            placeholder="example@example.com"
          />
          <button className="footerbutton">SUBMIT</button>
          <br />
          <br />

          <button className="footerbutton2">DOWNLOAD THE APP</button>

          <div className="footerlastdiv">
            <div>
              <p>FOLLOW US</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384152.png" />
            </div>

            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/4922/4922972.png" />
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384044.png" />
            </div>
          </div>

          <>© 2022 Dot & Key</>
        </div>
      </div>
    </>
  );
};

export default Footer;

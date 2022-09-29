import React from "react";
import Graybar from "./1_Graybar";
import Navbar from "./2_Navbar";
import Apps from "./SlideShow";
import BigBanner2 from "./4_BigBanner2";
import BigBanner3 from "./5_BigBanner3";
import Banner4 from "./6_Banner4";
import Scroll from "./Scroll";
import Banner5 from "./7_Banner5";
import Seen from "./8_Seen";
import Scroll2 from "./Scroll2";
import Footer from "./9_Footer";

const Homepage = () => {
  return (
    <>
      <Graybar />
      <Navbar />
      <Apps />
      <BigBanner2 />
      <BigBanner3 />
      <Banner4 />
      <Scroll />
      <Banner5 />
      <Seen />
      <Scroll2 />
      <Footer />
    </>
  );
};

export default Homepage;

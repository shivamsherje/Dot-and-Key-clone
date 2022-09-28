import "./App.css";
import Graybar from "./components/1_Graybar";
import Navbar from "./components/2_Navbar";
import BigBanner from "./components/3_BigBanner";
import BigBanner2 from "./components/4_BigBanner2";
import BigBanner3 from "./components/5_BigBanner3";
import Banner4 from "./components/6_Banner4";
import SlideShow from "./components/SlideShow";
import Scroll from "./components/Scroll";
import Banner5 from "./components/7_Banner5";
import Scroll2 from "./components/Scroll2";
import Seen from "./components/8_Seen";
import Footer from "./components/9_Footer";
function App() {
  return (
    <div className="App">
      <Graybar />
      <Navbar />
      <SlideShow />
      <BigBanner2 />
      <BigBanner3 />
      <Banner4 />
      <Scroll />
      <Banner5 />
      <Seen />
      <Scroll2 />
      <Footer />
    </div>
  );
}

export default App;

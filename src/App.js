import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navi } from './components/Navi.jsx';
import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navi data={landingPageData.Contact}/>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
    </Router>
  );
};

export default App;

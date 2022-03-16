import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navi } from "./components/Navi.jsx";
import { Header } from "./components/Header.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Services } from "./components/Services.jsx";
import { About } from "./components/About.jsx";
import { Team } from "./components/Team.jsx";
import { Contact } from "./components/Contact.jsx";
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
      <Navi data={landingPageData.Contact} />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </Router>
  );
};

export default App;

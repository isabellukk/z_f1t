import {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import JsonData from './data/data.json';
import {Header} from './components/Header.jsx';



function App () {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Header data={landingPageData.Header}/>
    </Router>);
};

export default App;

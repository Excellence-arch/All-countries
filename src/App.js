import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';
import NavBar from './components/NavBar';
import Cards from './components/Cards';

const App = () => {
  const [darkmode, setDarkmode] = useState("");
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all/?");
  const [onlineData, setOnlineData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [found, setFound] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.darkmode ? setDarkmode(JSON.parse(localStorage.darkmode)) : setDarkmode(false);
    // console.log(darkmode);
  }, []);

  useEffect(() => {
    axios.get(url).then(res => {
      setIsLoading(false);
      setErrorMsg("");
      setOnlineData(res.data);
    }).catch(err => {
      setIsLoading(false);
        setErrorMsg(err.message);
    })
  }, [url])

  const changeUrl = (newUrl) => {
    setIsLoading(true);
    setErrorMsg(false);
    setUrl(newUrl);
  }

  const searchCountries = (userInput) => {
    if(userInput) {
      const filteredCountries = onlineData.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(userInput.toLowerCase())
      ))
      // console.log(filteredCountries)
      setFound(filteredCountries);
    } else {
      setFound(onlineData);
    }
  }

  const changeMode = () => {
    setDarkmode(() => {
      localStorage.darkmode = JSON.stringify(!darkmode);
      return !darkmode;
    });
  }

  const showDets = (i) => {
    navigate(`/${i}`);
  }

  // const refreshPage = () => {
  //   window.location.reload();
  //   // setUrl(url);
  // }

  return (
    <div className={darkmode ? 'bg-navy bg-real-light bg-real text-white' : 'bg-light bg-real-light text-dark'}>
      <NavBar  darkmode={darkmode} changeMode={changeMode}/>
      <Routes>
        <Route path="/" element={<Home darkmode={darkmode} searchCountries={searchCountries} isLoading={isLoading} url={url} showDets={showDets} changeUrl={changeUrl} onlineData={onlineData} errorMsg={errorMsg} found={found} />}/>
        <Route path="/:id" element={<Cards darkmode={darkmode} onlineData={found.length> 0 ? found : onlineData}/>}/>
      </Routes>
    </div>
  )
}

export default App;
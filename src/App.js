import './App.css';
import News from './components/News.js'
import Weather from './components/Weather.js'
import {useEffect, useState} from "react"

function App() {
  const [newsData, setNewsData] = useState();
  const [weatherData, setWeatherData] = useState();

  const generateNews = () => {
    fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + process.env.REACT_APP_API_KEY1)
    .then((res) => res.json())
    .then((data) => setNewsData(data.results))
  }

  useEffect(() => {
    generateNews()
  }, [])

  return (
    <div className="App">
        <Weather/>
        <News newsData={newsData}/>
    </div>
  );
}

export default App;

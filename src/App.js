import './App.css';
import Card from './Component/card';
import Input from './Component/input';
import Button from './Component/button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';
function App() {
  const Weather=useWeather();
  console.log(Weather);

  useEffect(()=>{
    //Get Current Location Here
    Weather.fetchUserCurrentLocationData()
  },[])
  return (
    <div className="App">
      <h1>WEATHER FORECAST</h1>
      <Input/>
      <Button name="Search" onClick={Weather.fetchData} />
      <Card/>
      <Button name="Refresh" onClick={Weather.fetchUserCurrentLocationData}/>
    </div>
  );
}

export default App;

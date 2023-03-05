import './App.css'
import React, {useEffect, useState } from 'react';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  
  localStorage.setItem("Temperature", 33);
  localStorage.setItem("Humidity", 30);
  localStorage.setItem("Moisture", 25);

  // Connect to server
  const [backendData, setBackendData] = useState([{}])

  // Connect to server
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  })

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;

// import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showtAlert("Dark Mode has been enabled", "success")

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showtAlert("Light Mode has been enabled", "success")
    }
  }

  const showtAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Textform mode={mode} showtAlert={showtAlert}/>
          {/* <Routes> */}
              {/* <Route exact path="/" element={<Textform mode={mode} showtAlert={showtAlert}/>}/> */}
              {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
          {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;

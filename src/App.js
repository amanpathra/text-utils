// import logo from './logo.svg';
import { useState } from "react";
import "./index.css";
import About from "./components/About";
import FormText from "./components/FormText";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState({
    bgcolor1: '#fff',
    bgcolor2: '#e1e1e1',
    btncolor: '#0d6efd',
    textcolor: '#000'
  });

  const toggleMode = (e) => {
    switch (e.target.classList[1]) {
      case 'light-smoke':
        setMode({
          bgcolor1: '#fff',
          bgcolor2: '#e1e1e1',
          btncolor: '#0d6efd',
          textcolor: '#000'
        })
        document.body.style.color = '#000'
        document.body.style.backgroundColor = '#fff'
        break;
      case 'light-yellow':
        setMode({
          bgcolor1: '#fff',
          bgcolor2: '#fff7d7',
          btncolor: '#e5b400',
          textcolor: '#000'
        })
        document.body.style.color = '#000'
        document.body.style.backgroundColor = '#fff'
        break;
      case 'light-blue':
        setMode({
          bgcolor1: '#fff',
          bgcolor2: '#d4fbff',
          btncolor: '#5ab9c1',
          textcolor: '#000'
        })
        document.body.style.color = '#000'
        document.body.style.backgroundColor = '#fff'
        break;
      case 'dark-blue':
        setMode({
          bgcolor1: '#35363a',
          bgcolor2: '#202124',
          btncolor: '#4f5465',
          textcolor: '#fff'
        })
        document.body.style.color = '#fff'
        document.body.style.backgroundColor = '#35363a'
        break;
      case 'dark-starry':
        setMode({
          bgcolor1: '#445760',
          bgcolor2: '#2b373d',
          btncolor: '#33484a',
          textcolor: '#fff'
        })
        document.body.style.color = '#fff'
        document.body.style.backgroundColor = '#445760'
        break;
      case 'dark-red':
        setMode({
          bgcolor1: '#282222',
          bgcolor2: '#422e2e',
          btncolor: '#6d1212',
          textcolor: '#fff'
        })
        document.body.style.color = '#fff'
        document.body.style.backgroundColor = '#282222'
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<FormText heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
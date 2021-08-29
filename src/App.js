
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')// whether dark mode enable or not
  let toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743 ';
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils';
      }, 1500);


    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>


<Router>  
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode={toogleMode} />

      {/* <Alert alert = 'This is alert'/> */}

<div className="container my-3" >
      
      <Switch>
          <Route exacat path="/about">
                 <About />
           </Route>

          <Route exact path="/">
                  <TextForm heading="Enter the Text to Analyse" mode ={mode} />
          </Route>
      </Switch>
  </div>

</Router>
      
    </>
  );
}

export default App;



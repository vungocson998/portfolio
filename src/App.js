import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Greeting from './components/greeting/Greeting';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Greeting/>
      <Contact profile="www.facebook.com"/>
    </div>
  );
}

export default App;
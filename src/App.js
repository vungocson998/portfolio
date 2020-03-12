import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Greeting from './components/greeting/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Contact profile="www.facebook.com"/>
    </div>
  );
}

export default App;
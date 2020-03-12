import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Greeting from './components/greeting/Greeting';
import Blog from './components/blog/Blog';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path='/portfolio' component={Greeting}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/bio' component={Bio}/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
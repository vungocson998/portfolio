import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Button from './components/button/Button';
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
        <Route exact path='/portfolio/blog' component={Blog}/>
        <Route exact path='/portfolio/about' component={About}/>
        <Route exact path='/portfolio/projects' component={Projects}/>
        <Route exact path='/portfolio/bio' component={Bio}/>
        <Button/>
      </div>
    </BrowserRouter>
  );
}

export default App;
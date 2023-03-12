import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import AboutMe from './Components/AboutMe/AboutMe';
import MyTech from './Components/MyTech/MyTech';
import MyProjects from './Components/MyProjects/MyProjects';
import Contact from './Components/Contact/Contact';
import MyFooter from './Components/MyFooter/MyFooter';
function App() {
  return (
    <div className="App">
    <header>
    <Nav />
      </header>
        <article>
        <LandingPage /> 
        <AboutMe/> 
        <MyTech/>  
      <MyProjects/>  
      <Contact/>
        </article>
        <footer>
          <MyFooter/>
        </footer>
    </div>
  );
}

export default App;

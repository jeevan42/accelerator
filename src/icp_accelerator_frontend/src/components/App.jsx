import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Events from './Events';
import Projects from './Projects';
import Footer from './Footer';
import '../../assets/main.css'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
       <Events />
       <Projects/>
      <Footer /> 
    </>
  )
};

export default App;
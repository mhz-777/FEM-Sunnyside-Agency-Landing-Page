import './App.css'
import siteLogo from "./assets/images/logo.svg";
import Hero from './components/Hero';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import Imagegrid from './components/Imagegrid';
import facebook from './assets/images/icon-facebook.svg';
import insta from './assets/images/icon-instagram.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import twitter from './assets/images/icon-twitter.svg';
import { useState } from 'react';

function App() {

  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <header>
          <img src={siteLogo} alt="sunnyside" className='header-logo'/>
          <button className="header-menubutton" onClick={()=>setVisible(!isVisible)}></button>
          <nav className={`navigation ${isVisible ? '' : 'hidden'}`}>
              <a href="#" className="navigation-links">About</a>
              <a href="#" className="navigation-links">Services</a>
              <a href="#" className="navigation-links">Projects</a>
              <button className="navigation-cta">CONTACT</button>
          </nav>
      </header>
      <main>
          <Hero />
          <Content />
          <Testimonials />
          <Imagegrid />
      </main>
      <footer>
        <img src={siteLogo} alt="logo" className="footer-logo" />
        <div className="links">
          <a href="#" className="footer-links">About</a>
          <a href="#" className="footer-links">Services</a>
          <a href="#" className="footer-links">Projects</a>
        </div>
        <div className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
        </div>
      </footer>
    </div>
  )
}

export default App

import useScrollShadow from '../../hooks/use-scroll-shadow.js'
import "./stickynav.css";
import logo_light from '../../assets/logo_light.svg'
import logo_dark from '../../assets/logo_dark.svg'


import {Moon,Languages,Github,Sun,X,Burger} from '../Icons/Icons.jsx'
import { SearchInputBox } from "../SearchInputBox/SearchInputBox.jsx";
import { useState } from 'react';
import Menu from '../Menu/Menu.jsx';

const StickyNav = ({theme, setTheme}) => {
const shadow = useScrollShadow(64)
const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <header>
      <nav className={shadow ? 'nav-container nav-shadow' : 'nav-container'}>
        <div className="content-container">
          <div className="left-content">
            <div className="logo-box">
            <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="icon" /> : <Burger className="icon" />}
            </div>
              <img src={theme === 'dark' ? logo_dark : logo_light} alt="Logo" />
              <a href="#">v19</a>
            </div>
            <SearchInputBox />
          </div>
          <div className="right-content">
            <div className="nav-links">
              <a href="#" className="nav-link">Learn</a>
              <a href="#" className="nav-link">Reference</a>
              <a href="#" className="nav-link">Community</a>
              <a href="#" className="nav-link">Blog</a>
            </div>
            <div className="nav-icons">
              <div className="icons-eff" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun className="icon" /> : <Moon className="icon mun-icon" />}
              </div>
              <div className="icons-eff">
                <Languages className="icon" />
              </div>
              <div className="icons-eff">
                <a href="https://github.com" target="_blank" className="icon-button">
                  <Github className="github-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
      <Menu/>
      )}
    </header>
  </>
  );
};

export default StickyNav;

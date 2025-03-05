import React from 'react';
import './footer.css';
import {Github,Facebook,Twitter,Bluesky} from '../Icons/Icons.jsx'
import Meta from '../../assets/imeta.png'

const SiteFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="logo-section">
            <div className="logo-container">
              <img src={Meta} className="meta_logo"alt="" />
              <span className="logo-text">Meta Open Source</span>
              
            </div>
            <p className="copyright-text">Copyright © Meta Platforms,Inc <br/>uwu?</p>

          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Learn React</h3>
            <div className="footer-column-links">
              <a href="#" className="footer-link">Quick Start</a>
              <a href="#" className="footer-link">Installation</a>
              <a href="#" className="footer-link">Describing the UI</a>
              <a href="#" className="footer-link">Adding Interactivity</a>
              <a href="#" className="footer-link">Managing State</a>
              <a href="#" className="footer-link">Escape Hatches</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">API Reference</h3>
            <div className="footer-column-links">
              <a href="#" className="footer-link">React APIs</a>
              <a href="#" className="footer-link">React DOM APIs</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Community</h3>
            <div className="footer-column-links">
              <a href="#" className="footer-link">Code of Conduct</a>
              <a href="#" className="footer-link">Meet the Team</a>
              <a href="#" className="footer-link">Docs Contributors</a>
              <a href="#" className="footer-link">Acknowledgements</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">More</h3>
            <div className="footer-column-links">
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">React Native</a>
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="#" >
          <Facebook className="social-link"/>
          </a>
          <a href="#" >
            <Twitter className="social-link"/>
          </a>
          <a href="#" >
            <Bluesky className="social-link"/>
          </a>
          <a href="#" >
            <Github className="social-link"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
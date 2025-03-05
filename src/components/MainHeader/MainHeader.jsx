import React from 'react'
import './mainheader.css'
import logo_light from '../../assets/logo_light.svg'
import logo_dark from '../../assets/logo_dark.svg'


const MainHeader = ({theme}) => {

  return (
    <main className='mainHeader'>
        <img className='logo' src={theme == 'dark' ? logo_dark : logo_light} alt="" />
            <h1>React</h1>
            <h2>The library for web and native user interfaces</h2>
            <div>
                <a href="#" className="learnBtn">Learn React</a>
                <a href="#" className="apiBtn">API Reference</a>
            </div>
        </main>
  )
}

export default MainHeader

import React, {useState}from 'react';
import './switch.scss'
import jovic from './images/jovic-photo.jpg'
import github from './images/github.png'
import github_dark from './images/github_dark.png'
import mail from './images/mail.png'
import linkedin from './images/linkedin.png'
import linkedin_dark from './images/linkedin_dark.png'
import logo from './images/LOGO.svg'
import './switch.scss'
import Portfolio from './components/portfolio'
import Email from './components/contact'
import js from './images/js.png'
import react from './images/react.png'
import next from './images/next.png'
import graphql from './images/graphql-icon.png'
import jest from './images/jest.png'
import typescript from './images/typescript.png'

let Switch =({dark, onToggle}) =>{
    return(
    <div className="m-2">
      <div className="toggle colour">
          <input id="check3" className="toggle-checkbox hidden" type="checkbox" checked={dark} onChange={e => {}} onClick={onToggle}/>
          <label htmlFor="check3" className="toggle-label block w-24 h-12 rounded-full transition-color duration-150 ease-out"></label>
      </div>
    </div>
  )
}

const Home =()=>{
    const [isDark, setDark] = useState(() => {
      const useDarkTheme = localStorage.getItem("isDark");
      return useDarkTheme === 'true'
    });
    const toggleIsDark = (isDark) => {
      if(!isDark){
        setDark(true)
      }else{
        setDark(false)
      }
      localStorage.setItem('isDark', !isDark);
    }
    
    return (
        <div className={(isDark ? 'dark' : '')}>
          <div className="font-inter bg-purple-100 dark:bg-gray-700 min-h-screen min-w-screen">
            <nav className="navbar dark:bg-gray-600">
              <div className="header-wrapper pt-2 pr-12">
                <img src={logo} alt="" className="logo" onClick={() => window.location.replace("/#home")}/>
                <div className="menu-items">
                    <a className="font-bold text-xl pl-4 inline dark:text-white card" href="/#port" onClick={() => window.location.replace("/#port")}>Experience</a>  
                    <a className="font-bold text-xl pl-4 inline dark:text-white card" href="/#email" onClick={() => window.location.replace("/#email")}>Contact</a>  
                </div>
                <b className="float">
                  <i className="fa fa-envelope my-float"><Switch dark={isDark} onToggle={() => toggleIsDark(isDark)}/></i>
                </b>
              </div>
            </nav>
            <section id="home">
            <div className="pt-36">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:bg-green-500"></div>
                  <div className="relative px-4 py-10 bg-white dark:bg-gray-500 shadow-lg sm:rounded-3xl sm:p-5">
                    <div className="max-w-md mx-auto">
                      <div className="items-center">
                        <img src={jovic} alt="" className="h-32 w-32 rounded-full mx-auto" />
                      </div>
                      <div className="divide-y divide-gray-200">
                        <div className="py-8 text-center leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <p className="dark:text-white">I moved from Brazil to Canada to elevate my studies and my opportunities, with the objective of giving the best of myself in this seemingly wild 
                            dream of becoming an international programmer so early in my life.</p>
                          <p className="text-center text-blue-500 dark:text-green-200">Joao Victor Fernandes, Software Engineer.</p>
                        </div>
                        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 dark:text-white">
                          <p>Want to talk with me?</p>
                            Important Links &rarr; <a href="https://github.com/Jovic-hub" target="_blank" rel="noopener noreferrer"><img alt="" className="h-8 w-8 inline" src={(isDark ? github_dark : github)}/></a> <a href="https://www.linkedin.com/in/joaovictorf/" rel="noopener noreferrer" target="_blank"><img className="h-8 w-8 inline" alt="" src={(isDark ? linkedin_dark : linkedin)}/></a> <a href="mailto: jovico.dev@gmail.com" rel="noopener noreferrer" target="_blank"><img className="h-8 w-8 inline" alt="" src={mail}/></a>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              <div className="pt-16">
                <div className="py-8 text-center leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p className="text-3xl dark:text-white font-bold">
                    My favorite technologies:
                  </p>
                  <img className="h-28 w-28 inline" alt="" src={js}/>
                  <img className="h-28 w-28 inline" alt="" src={react}/>
                  <img className="h-28 w-28 inline" alt="" src={next}/>
                  <img className="h-28 w-28 inline" alt="" src={graphql}/>
                  <img className="h-28 w-28 inline" alt="" src={jest}/> 
                  <img className="h-28 w-28 inline" alt="" src={typescript}/>
                </div>
              </div>
            </section>   
            <section id="port">
              <Portfolio/>
            </section>  
            <section id="email">
              <Email/>  
            </section>  
            </div>
        </div>
      );
}

export default Home;

import React,{useState} from 'react'
import Banner from '../Banner/Banner'
import Loading from '../Loading/Lodaing'
import Navabr from '../Navabr/Navabr'
import Service from '../Service/Service'
import styled from './style.css'
import Up from '../../Image/icons8-up-arrow-50.png'
import Skil from '../Skil/Skil'
import Aboute from '../Aboute Me/AbouteMe'
import MyPortfolio from '../Portfolio/MyPortfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const Home = () => {
  const[color,setColor]=useState(false);
  const ShowDrop = () => {
    const d = document.querySelector('ul');
    d.style.display = "block";
    d.style.transform = "translateY(0)";
    d.style.transition = "all 0.7s linear";
    d.addEventListener(click => {
      d.style.display = "none"
    })
  }
  return (
    <div className='overflow-hidden'>
      <body className='bg-slate-50 overflow-hidden text-black w-full h-fit'>
        <header>
          <nav id="navbar">
            <ul>
              <Navabr />
            </ul>
          </nav>
        </header>
        <main className=''>
          <section className='' id="home">
            <Banner />
          </section>
          <section  id="aboute">
            <Aboute />
          </section>
          <section id="skil">
            <Skil />
          </section>
          <section id="Service">
            <Service />
          </section>
          <section id="Portfolio">
          <MyPortfolio />
        </section> 
        <section id="Contact">
          <Contact />
        </section> 
        <section id='Footer'>
          <Footer/>
        </section>
      
        </main>
        <footer >
          <a href="#navbar"  class="top" >
            <img className='h-4' src={Up} alt="" />
          </a>
        </footer>
        {/* <footer>
          <a href="#s" class="top" onClick={()=>setColor(!color)}    className={`relative left-20 ${color ? "text-blue-500" : "text-red-700"}`}>
            pars
          </a>
        </footer> */}
       
      </body>
      <div>
      </div>
    </div>
  )
}

export default Home
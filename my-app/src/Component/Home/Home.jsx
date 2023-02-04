import React from 'react'
import Banner from '../Banner/Banner'
import Loading from '../Loading/Lodaing'
import Navabr from '../Navabr/Navabr'
import Service from '../Service/Service'
import styled from './style.css'
import Up from '../../Image/icons8-up-arrow-50.png'
import Skil from '../Skil/Skil'
import Aboute from '../Aboute Me/AbouteMe'
const Home = () => {

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
      <Navabr/>
      </ul>
      </nav>
</header>
      <main className=''>
        <section id="home">
          <Banner />
        </section>
        <section id="aboute">
          <Aboute />
        </section>
        <section id="skil">
          <Skil />
        </section> 
        <section id="Service">
          <Service />
        </section> 
      </main>
      <footer>
        <a href="#navbar" class="top">
         <img className='h-4' src={Up} alt="" />
        </a>
      </footer>
        </body>
      <div>
      </div>
      </div>
  )
}

export default Home
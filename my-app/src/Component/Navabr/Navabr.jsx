import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Navabr = () => {
  const [ShowNav,SetNavbar]= useState(false);
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
    // <div className='w-full fixed text-white bg-red-400 flex items-center justify-evenly h-20 bg-transparent'>
    //   <div className='w-40 h-20'>
    //     <h1>parsa</h1>
    //   </div>
    //   <div className='w-96  h-20'>
    //   <ul className='flex relative  items-center justify-around '>
         
    //       <li className='cursor-pointer'>Skils</li>
    //       <li className='cursor-pointer'>Contact me</li>
    //       <li className='cursor-pointer'>Aboute me</li>
    //       <li className='cursor-pointer'>Servis</li>
    //       <button className='bg-white text-black rounded-lg px-1 py-1'>Hire me</button>
    //     </ul>
    //   </div>
    //  </div>

    <div className='w-full absolute z-10  font-bold  bg-white text-black flex items-center justify-between overflow-hidden h-20 bg-transparent'>
       <div className='w-44 flex items-center left-32 md:left-0 sm:left-0 relative justify-center h-20'>
         <h1 className=' text-black text-2xl' >parsa</h1>
       </div>
      <div onClick={()=>SetNavbar(!ShowNav)} className='relative hidden -z-10 sm:left-44 sm:block  left-20'>
        <div class="space-y-2">
          <span class="block w-8 h-0.5 bg-black"></span>
          <span class="block w-8 h-0.5 bg-black"></span>
          <span class="block w-8 h-0.5 bg-black"></span>
        </div>
      </div> 

      <ul className={`flex relative mr-40 sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-black  sm:mr-0  md:mr-0  sm:w-64 sm:h-80 sm:top-20  ${ShowNav ? "sm:translate-y-[105px] " : "sm:-translate-y-[990px]"}`}>
      <div className='flex items-center justify-around w-fit   h-20'>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#home" className='text-black '>Home</a> </li>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#aboute" className='text-black '>Aboute</a> </li>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#skil" className='text-black '>Skills</a> </li>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#Service" className='text-black '>Services</a> </li>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#Portfolio" className='text-black '>Portfolio</a> </li>
        <li className='cursor-pointer mr-5 hover:border-b-2 border-white '> <a href="#Contact" className='text-black '>Contact</a> </li>
      </div>
      </ul>
    </div>
  
  )
}

export default Navabr
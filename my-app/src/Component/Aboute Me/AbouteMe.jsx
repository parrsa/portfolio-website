import React from 'react'
import Img from '../../Image/DSC_0090.JPG'
import Complated from '../../Image/checked.png'
import Ecxperince from '../../Image/icons8-scroll-48.png'
import Cv from '../../Image/icons8-note-48.png'
import Right from '../../Image/icons8-right-arrow-48.png'
import Support from "../../Image/support.png"
const AbouteMe = () => {
  return (
    <div className='w-full h-[600px] sm:h-fit font-Montserrat overflow-hidden  sm:overflow-hidden bg-white'>
      <div className='flex justify-center sm:items-center mt-10' >
        <h1 className='font-extrabold'>Abute Me</h1>
        <p className='absolute mt-6 sm:mt-14 font-bold text-slate-600'>My introduction</p>
      </div>
      <div className='flex justify-center items-center mt-14 relative  b w-full sm:w-full sm:ml-0  h-fit '>
      <div className='grid grid-cols-2  row-span-2'>

        <div className='w-[330px] md:ml-10 flex justify-center sm:w-full items-center  ml-64 sm:ml-0  col-span-1 sm:col-span-2 rounded-2xl  mr-20 h-[330px]'>
         <div className='w-full sm:w-[330px] md:w-[300px]  h-full rounded-2xl flex justify-center'>
          <img src={Img} className="" alt="" />
         </div>
        </div>

        <div className='w-[85%] col-span-1 h-[330px]  sm:w-full  sm:col-span-2 sm:mr-0 sm:mt-10 mr-24 md:mr-0  overflow-hidden rounded-2xl '>

        <div className='w-full sm:flex sm:justify-center   sm:items-center h-32 flex justify-center'>

        <div className='w-36 border border-zinc-400 rounded-2xl mr-5  md:h-28 md:w-56 h-32 sm:w-24 bg-white flex justify-center'>
          <img src={Ecxperince} className="w-6 h-6 mt-6 md:mt-3 " alt="" />
        <h1 className='absolute mt-14 md:mt-12'>Experience</h1>
        <p className='absolute mt-24 text-sm text-slate-500 md:mt-20 '> <span>1</span>+<span>Years</span>  </p>

        </div>

        <div className='w-36 border border-zinc-400 rounded-2xl mr-5 md:h-28 md:w-56 h-32 sm:w-24 bg-white flex justify-center '>
        <img src={Complated} className="w-6 h-6 mt-6 6 md:mt-3 " alt="" />
        <h1 className='absolute mt-14 md:mt-12'>Completed</h1>
        <p className='absolute mt-24 text-sm md:mt-20  text-slate-500 '> <span>1</span>+<span>Project</span>  </p>
        </div>

        <div className='w-36 border border-zinc-400 rounded-2xl mr-5 md:h-28 md:w-56 sm:mr-0 h-32 sm:w-24 bg-white  flex justify-center '>
        <img src={Support} className="w-6 h-6 mt-6 md:mt-3 " alt="" />
        <h1 className='absolute mt-14 md:mt-12'>Support</h1>
        <p className='absolute mt-24 text-sm md:mt-20 text-slate-500 '> Online </p>
        </div>

        </div>
        
        <div className='w-full h-32 sm:h-fit  sm:w-full '>
          <p className='w-[70%] md:ml-0 md:w-full ml-[72px] sm:w-full  sm:ml-0 sm:text-center  mt-5 flex items-center'>
            Frontend developer,I create web poges with UI/UX user interface, I have years of experience and many clients are happy with the projects carried out.
          </p>
        </div>
        <div className='w-full h-24 sm:flex sm:justify-center '>
        <a href={Img} download> <button className='px-2 py-2 rounded-lg sm:mt-5 sm:ml-0 md:ml-0 ml-[72px] bg-[#1f1f1f] transition-all hover:bg-black flex text-white'> <span>Download CV</span>  <img className='ml-2 mt-0.5 w-5 h-5' src={Cv} alt="" /> </button></a>
        </div>
        </div>
      </div>
      
      </div>

    </div>
  )
}

export default AbouteMe
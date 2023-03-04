import React from 'react'
import BannerImage from '../../Image/DSC_0090.png'
import TextWord from './TextWord'
import im from '../../Image/DSC_0089.png'
import Img from '../../Image/ea2efa05-3c7a-47f1-8313-db52dd2804c5.jpeg'
import Instagram from '../../Image/icons8-instagram-48.png'
import Github from '../../Image/icons8-github-24.png'
import Linkdin from '../../Image/icons8-linkedin-2-30.png'
import Send from '../../Image/icons8-email-send-24.png'
const Banner = () => {
    return (
        <div className="w-full bg-white font-Montserrat sm:h-[750px] md:-mt-20 flex items-center  h-[720px]  overflow-hidden ">
            <div className='flex justify-center items-start  w-full h-full'>
                <div className='grid  grid-cols-4 grid-rows-2 h-full w-full'>

                    {/* box-1 */}
                    <div className='flex sm:mt-16   sm:top-64 sm:w-full sm:h-fit sm:absolute mt-40 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1'>
                        <div className='relative w-full h-full sm:left-0 sm:overflow-hidden sm:mt-32 md:left-0 flex left-24'>

                            <div className='w-24 h-[60%] sm:hidden mt-36 md:left-14 sm:left-0 sm:w-44 relative left-20  gap-4  '>
                                <div className='w-8   h-8  rounded-full flex justify-center items-center'>  <a href='https://www.instagram.com/parsa__r_a/'>  <img src={Instagram} className="w-7 h-7 hover:cursor-pointer" /></a></div>
                                <div className='w-8 mt-5  h-8 cursor-pointer  rounded-full  flex justify-center items-center'><a href='https://github.com/parrsa'><img src={Github} className="w-7 h-7" /></a></div>
                                <div className='w-8 mt-5 h-8  rounded-full flex justify-center cursor-pointer items-center'><a href='https://www.linkedin.com/in/parsa-soli-0409661a5/'><img src={Linkdin} className="w-7 h-7" /></a></div>
                            </div>

                            <div className='w-[80%] h-[85%]   sm:w-full sm:h-80 sm:mt-0 sm:overflow-hidden mt-12 relative'>
                                <div className='w-[80%] sm:flex sm:justify-center sm:w-full sm:h-full h-96 sm:left-0 md:left-10 sm:text-center  relative left-36 overflow-hidden sm:mt-5   mt-16'>
                                    <h1 class="flex text-3xl md:text-xl font-bold font-Tangerine animate-pulse">
                                        Parsa Soliman Niya <span class="">👋🏻</span>
                                    </h1>
                                    <div className='flex sm:absolute sm:mt-14  items-center w-80 gap-2 h-10 '>
                                        <hr className='w-14  h-0.5 mt-5 bg-black' />
                                        <p className='mt-4 font-bold'>Visual Designer</p>
                                    </div>

                                    <p className='w-96 sm:absolute sm:mt-28 h-fit mt-5 md:w-60 leading-7'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quos consequatur magnam.
                                    </p>
                                    <button className='px-5 py-2 sm:absolute sm:mt-56 mt-10  rounded-lg bg-black text-white flex items-center'>Say Hello <span className='ml-2'><img src={Send} className="w-5 h-5" /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Box-2 */}
                    <div className='flex  justify-center md:items-center  md:mr-0  mr-32 mt-32 col-span-2 sm:absolute sm:w-full sm:mt-24  row-span-2 sm:col-span-2 sm:row-span-1  '>
                        <div className=' w-80  md:ml-0 md:mt-0  sm:w-[330px] sm:h-[330px] ml-32 h-80   flex sm:justify-center sm:ml-0 sm:mt-10 mt-24 rounded-2xl '>
                            <img src={Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner

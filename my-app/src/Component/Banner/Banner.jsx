import React from 'react'
import BannerImage from '../../Image/DSC_0090.png'
import TextWord from './TextWord'
import im from '../../Image/DSC_0089.png'
import Img from '../../Image/ea2efa05-3c7a-47f1-8313-db52dd2804c5.jpeg'
const Banner = () => {
    return (
        <div className="w-full bg-slate-50 sm:h-[750px]  flex items-center  h-[720px]  font-KALAMEHBOLD overflow-hidden ">
            <div className='flex justify-center items-start  w-full h-full'>
                <div className='grid  grid-cols-4 grid-rows-2 h-full w-full'>

                        {/* box-1 */}
                    <div className='flex sm:mt-16  sm:top-64 sm:w-full sm:h-fit sm:absolute mt-40 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1'>
                        <div className='relative w-full h-full sm:left-0 sm:overflow-hidden sm:mt-32  flex left-24'>

                            <div className='w-24 h-[60%] sm:hidden mt-20  sm:left-0 sm:w-44 relative left-20 flex justify-center items-center  gap-4  '>
                            <div className=' mb-16'>
                                <div className='w-8 mt-3  h-8  rounded-full bg-red-500'></div>
                                <div className='w-8 mt-3  h-8  rounded-full bg-red-500'></div>
                                <div className='w-8 mt-3 h-8  rounded-full bg-red-500'></div>
                            </div>
                            </div>

                            <div className='w-[80%] h-[85%]  sm:w-full sm:h-64 sm:mt-0 sm:overflow-hidden mt-16 relative'>
                                <div className='w-[80%] sm:w-full sm:h-full h-96 sm:left-0 sm:text-center  relative left-40 overflow-hidden sm:mt-5   mt-16'>
                               <h1 className=' text-3xl  font-bold'>
                                        parsa soliman niya
                                    </h1>
                                    
                                    <p className='w-96 h-fit mt-5 leading-7'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quos consequatur magnam.
                                    </p>
                                    <button className='px-8 py-2 mt-10 rounded-lg bg-black text-white'>Say Hellow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Box-2 */}
                    <div className='flex  justify-center  mr-32 mt-32 col-span-2 sm:absolute sm:w-full sm:mt-24  row-span-2 sm:col-span-2 sm:row-span-1  '>
                        <div className=' w-72 sm:w-[330px] sm:h-[330px] ml-32 h-72 flex sm:justify-center sm:ml-0 sm:mt-10 mt-24 rounded-2xl bg-red-500'>
                        <img src={Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner

import React, { useState } from 'react'
import WebDesigner from '../../Image/icons8-source-code-50.png'
import Image from '../../Image/icons8-right-arrow-48.png'
import ImageClose from '../../Image/icons8-close-30.png'
import Check from '../../Image/icons8-checkmark-24.png'
import Developer from "../../Image/icons8-web-design-30.png"
const Service = () => {
  const [ShowModal, SetModal] = useState(false)
  const [ShowModal1, SetModal1] = useState(false)
  const [ShowModal2, SetModal2] = useState(false)
  return (
    <div className='w-full font-Montserrat md:h-fit h-[600px] sm:h-fit  overflow-hidden sm:overflow-hidden bg-white'>
      <div className='flex justify-center sm:items-center mt-10' >
        <h1 className=' text-3xl font-bold leading-[4rem] text-center text-black'>
          Skills
        </h1>
        <p className='absolute mt-12 sm:mt-14 font-bold text-slate-600'>what i offer</p>
      </div>
      <div className='flex justify-center   items-center mt-14 relative   w-full sm:w-full sm:ml-0  h-fit '>
        <div className='grid grid-cols-2 md:grid-cols-1 gap-4  row-span-2'>
       
        <div className='w-[450px] h-fit sm:w-[350px]  sm:h-[410px] flex justify-start  border-2  sm:ml-0  col-span-1 sm:col-span-3 mr-5 sm:mr-0  rounded-2xl '>
       
         <div className='w-[450px] sm:w-[350px] absolute h-10 mt-5 sm:mt-0  overflow-hidden  flex justify-center  items-center '>
         <h1 className=' text-xl sm:mt-2 font-bold  text-center text-black'>
        Hard Skills
        </h1>
         </div>
            <div className=' w-full mt-14  sm:mt-10  h-[330px] flex   justify-between'>
              <div className='w-[50%] ml-6 sm:ml-0 sm:mt-0   h-full flex'>
                <div className='w-full  h-full'>
                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Html</h1>
                    <p className='absolute ml-7 mt-14'>Experienced</p>
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Css</h1>
                    <p className='absolute ml-7 mt-14'>Experienced</p>
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Bootstrap</h1>
                    <p className='absolute ml-7 mt-14'>Intermediate</p>
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Tailwind css</h1>
                    <p className='absolute ml-7 mt-14'>Experienced</p>
                  </div>
                </div>
              </div>

              <div className='w-[50%] h-full flex sm:mt-0 '>
                <div className='w-full h-full'>
                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Javascreipt</h1>
                    <p className='absolute ml-7 mt-14'>Experienced</p>
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>React</h1>
                    <p className='absolute ml-7 mt-14'>Experienced</p>
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Redux</h1>
                    <p className='absolute ml-7 mt-14'>Intermediate</p>
                  </div>


                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Git</h1>
                    <p className='absolute ml-7 mt-14'>Intermediate</p>
                  </div>


                </div>
              </div></div>
          </div>


          {/* <img src="https://img.icons8.com/glyph-neue/64/null/developer.png" className='w-10 h-10 absolute mt-20 ' /> */}
          <div className='w-[450px] h-fit sm:w-[350px]  sm:h-[410px] flex justify-start  border-2  sm:ml-0  col-span-1 sm:col-span-3 mr-5 sm:mr-0  rounded-2xl '>
         <div className='w-[450px] sm:w-[350px] absolute h-10 mt-5 sm:mt-0  overflow-hidden  flex justify-center  items-center '>
         <h1 className=' text-xl sm:mt-2 font-bold  text-center text-black'>
        Soft Skills
        </h1>
         </div>
            <div className=' w-full mt-14  sm:mt-10  h-[330px] flex   justify-between'>
              <div className='w-[50%]  sm:ml-0 sm:mt-0   h-full flex'>
                <div className='w-full  h-full'>
                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Observation</h1>
                    {/* <p className='absolute ml-7 mt-14'>Experienced</p> */}
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Decision making</h1>
                    {/* <p className='absolute ml-7 mt-14'>Experienced</p> */}
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Communication</h1>
                    {/* <p className='absolute ml-7 mt-14'>Intermediate</p> */}
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Multi-Tasking</h1>
                    {/* <p className='absolute ml-7 mt-14'>Experienced</p> */}
                  </div>
                </div>
              </div>

              <div className='w-[50%] h-full flex sm:mt-0 '>
                <div className='w-full h-full'>
                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Adaptability</h1>
                    {/* <p className='absolute ml-7 mt-14'>Experienced</p> */}
                  </div>

                  <div className='w-full h-20 ml-4 flex items-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                    <h1 className='ml-2 font-bold text-xl'>Problem-solving</h1>
                    {/* <p className='absolute ml-7 mt-14'>Experienced</p> */}
                  </div>

                </div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
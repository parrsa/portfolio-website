import React , {useState} from 'react'
// import htm from '../../Image/1051277.png'
import Stt from './s.css'
import Done from '../../Image/icons8-done-16.png'
const Skil = () => {
  // const [ShowModal,SetModal]=useState(false)
  return (
    <div className=' w-full flex justify-center bg-slate-50 h-[550px]  overflow-hidden sm:h-[550px]  '>
      <h1 className=' text-3xl font-bold leading-[4rem] text-center text-black'>
        Skills
      </h1>
      <p className='absolute mt-14 font-bold text-slate-600'>
        My technical level
      </p>
      <div className='flex h-[330px] absolute w-[380px] mt-28 sm:w-[330px] overflow-hidden  justify-center bg-transparent items-center'>
        <div className=' w-full h-full  flex   justify-between rounded-lg border border-white    border-sh'>

          <div className='w-[50%] sm:mt-0 h-full flex'>
            <div className='w-full h-full'>
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

              <div  className='w-full h-20 ml-4 flex items-center'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience__details-icon" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
                <h1 className='ml-2 font-bold text-xl'>Git</h1>
                <p className='absolute ml-7 mt-14'>Intermediate</p>
              </div>
              {/* {
                ShowModal ? (<><div onClick={()=>SetModal(!ShowModal)}>parsa</div> <button onClick={()=>SetModal(!SetModal)} >Click</button></>): null
              } */}
              
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skil
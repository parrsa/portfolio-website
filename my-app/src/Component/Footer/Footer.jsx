import React from 'react'
import Github from '../../Image/icons8-github-24.png'
import Linkdin from '../../Image/icons8-linkedin-2-30.png'

const Footer = () => {
    return (
        <div className='w-full h-44 mb-5 flex border-t-2 justify-center items-center bg-white'>
            <div className='w-[70%] flex justify-center h-full'>
                <h1 className='font-bold text-2xl mt-5 sm:mt-2 absolute text-center'>Parsa</h1>
                <ul className='flex sm:absolute font-bold gap-20 justify-evenly sm:gap-10  sm:mt-[67px] items-center'>
                    <li><a href='#aboute'>Aboute</a></li>
                    <li><a href='#Portfolio'>Project</a></li>
                    <li><a href='#Service'>Services</a></li>
                </ul>
                <div className='flex justify-center gap-10 absolute mt-32 sm:mt-32'>
                <div className='w-10 rounded-lg h-10 bg-white border-2 hover:w-12 hover:h-12 cursor-pointer'><a href='https://github.com/parrsa'><img src={Github} className="w-full  h-full"/></a></div>
                    <div className='w-10 rounded-lg h-10 bg-white border-2 hover:w-12 hover:h-12 cursor-pointer'><a href='https://www.linkedin.com/in/parsa-soli-0409661a5/'><img src={Linkdin} className="w-full  h-full"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
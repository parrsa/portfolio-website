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
        <div className='w-full h-screen sm:h-fit   sm:overflow-hidden bg-slate-50'>
            <div className='flex justify-center sm:items-center mt-10' >
                <h1 className=' text-3xl font-bold leading-[4rem] text-center text-black'>
                    Service
                </h1>
                <p className='absolute mt-12 sm:mt-14 font-bold text-slate-600'>what i offer</p>
            </div>
            <div className='flex justify-around  items-center mt-14 relative  b w-full sm:w-full sm:ml-0  h-fit '>
                <div className='grid grid-cols-3   row-span-2'>

                    <div onClick={() => SetModal(!ShowModal)} className='w-[330px] sm:w-[330px] flex justify-start  border-2  sm:ml-0  col-span-1 sm:col-span-3 mr-5  rounded-2xl h-[330px]'>
                        <div className='ml-5 mt-2' >
                            <img src={Developer} className='w-10 h-10 absolute mt-20 ' />
                            <div className='w-44 h-20 mt-36 '>
                                <h1 className=' text-2xl font-bold  text-black'>
                                    Web
                                </h1>
                                <p className='ml-5 font-bold mt-3 text-xl'>Designer</p>
                                {/* w-full bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none */}
                            </div>
                            <p className='mt-10 flex items-center text-gray-700 hover:text-black hover:cursor-pointer'>View More <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>
                        </div>
                        {
                            ShowModal ? (<>
                                <div className="flex transition-all overflow-hidden justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-screen h-screen flex justify-center items-center bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none my-6 ">

                                        <div className='w-[30%] sm:w-full overflow-hidden rounded-xl h-[450px] flex justify-center  bg-slate-50'>
                                            <div className='flex justify-end w-full '>
                                                <img onClick={() => SetModal(!ShowModal)} src={ImageClose} className="mt-5 transition-all hover:cursor-pointer mr-5 w-5 h-5" />
                                            </div>
                                            <div className='flex w-96 h-44  absolute justify-center  mt-10' >
                                                <h1 className='font-extrabold mt-2'>Abute Me</h1>
                                                <p className='absolute mt-10 text-center w-72 text-lg font-extralight'>Services with more 3 years of experience providing quality word to clients and companies</p>
                                            </div>
                                            <div className='w-96 h-64 sm:w-80 overflow-hidden absolute mt-44'>
                                        
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I develope the user interface</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Web page development</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I create ux element interactions</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Design and mackups of product for companies</p></div>

                                            </div>
                                      </div>

                                    </div>
                                </div>
                            </>
                            ) : null}
                    </div>



                    <div onClick={() => SetModal1(!ShowModal1)} className='w-[330px] sm:mt-10 sm:w-[330px] flex justify-start  border-2  sm:ml-0  col-span-1 sm:col-span-3 mr-5  rounded-2xl h-[330px]'>
                        <div className='ml-5 mt-2' >
                            <img src="https://img.icons8.com/glyph-neue/64/null/developer.png" className='w-10 h-10 absolute mt-20 ' />
                            <div className='w-44 h-20 mt-36 '>
                                <h1 className=' text-2xl font-bold  text-black'>
                                    UI/UX
                                </h1>
                                <p className='ml-5 font-bold mt-3 text-xl'>Designer</p>
                                {/* w-full bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none */}
                            </div>
                            <p className='mt-10 flex items-center text-gray-700 hover:text-black hover:cursor-pointer'>View More <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>
                        </div>
                        {
                            ShowModal1 ? (<>
                                <div className="flex transition-all overflow-hidden justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-screen h-screen flex justify-center items-center bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none my-6 ">

                                        <div className='w-[30%] sm:w-full rounded-xl h-[450px] flex justify-center  bg-slate-50'>
                                            <div className='flex justify-end w-full '>
                                                <img onClick={() => SetModal1(!ShowModal1)} src={ImageClose} className="mt-5 transition-all hover:cursor-pointer mr-5 w-5 h-5" />
                                            </div>
                                            <div className='flex w-96 h-44  absolute justify-center  mt-10' >
                                                <h1 className='font-extrabold mt-2'>Abute Me</h1>
                                                <p className='absolute mt-10 text-center w-72 text-lg font-extralight'>Services with more 3 years of experience providing quality word to clients and companies</p>
                                            </div>
                                            <div className='w-96 h-64 sm:w-80  absolute mt-44'>
                                        
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I develope the user interface</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Web page development</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I create ux element interactions</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Design and mackups of product for companies</p></div>

                                            </div>
                                      </div>

                                    </div>
                                </div>
                            </>
                            ) : null}
                    </div>


                    <div onClick={() => SetModal2(!ShowModal2)} className='w-[330px] sm:mt-10 sm:w-[330px] flex justify-start  border-2  sm:ml-0  col-span-1 sm:col-span-3 mr-5  rounded-2xl h-[330px]'>
                        <div className='ml-5 mt-2' >
                            <img src="https://img.icons8.com/material-sharp/24/null/project-management.png" className='w-10 h-10 absolute mt-20 ' />
                            <div className='w-44 h-20 mt-36 '>
                                <h1 className=' text-2xl font-bold  text-black'>
                                Product 
                                </h1>
                                <p className='ml-5 font-bold mt-3 text-xl'>Managers</p>
                                {/* w-full bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none */}
                            </div>
                            <p className='mt-10 flex items-center text-gray-700 hover:text-black hover:cursor-pointer'>View More <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>
                        </div>
                        {
                            ShowModal2 ? (<>
                                <div className="flex transition-all overflow-hidden justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-screen h-screen flex justify-center items-center bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg outline-none focus:outline-none my-6 ">

                                        <div className='w-[30%] sm:w-full rounded-xl h-[450px] flex justify-center  bg-slate-50'>
                                            <div className='flex justify-end w-full '>
                                                <img onClick={() => SetModal2(!ShowModal2)} src={ImageClose} className="mt-5 transition-all hover:cursor-pointer mr-5 w-5 h-5" />
                                            </div>
                                            <div className='flex w-96 h-44  absolute justify-center  mt-10' >
                                                <h1 className='font-extrabold mt-2'>Abute Me</h1>
                                                <p className='absolute mt-10 text-center w-72 text-lg font-extralight'>Services with more 3 years of experience providing quality word to clients and companies</p>
                                            </div>
                                            <div className='w-96 h-64 sm:w-80  absolute mt-44'>
                                        
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I develope the user interface</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Web page development</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>I create ux element interactions</p></div>
                                                <div className='flex items-center mt-6'><img src={Check} className="w-5 h-5" /><p className='ml-2'>Design and mackups of product for companies</p></div>

                                            </div>
                                      </div>

                                    </div>
                                </div>
                            </>
                            ) : null}
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Service
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Send from '../../Image/icons8-email-send-24.png'
import Email from '../../Image/icons8-edit-message-24.png'
import Image from '../../Image/icons8-right-arrow-48.png'
import Whatsapp from '../../Image/icons8-whatsapp-24.png'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_71jcaoi', 'template_2pae612', form.current, 'KngdcgwVNcCwbLh5c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='w-full h-full sm:h-fit bg-white  overflow-hidden'>
            <div className='flex justify-center sm:items-center mt-10' >
                <h1 className=' text-3xl font-bold leading-[4rem] text-center text-black'>
                    Contact Me
                </h1>
                <p className='absolute mt-12 sm:mt-10 font-bold text-slate-600'>Get in touch</p>
            </div>
            <div className='w-full   mt-10 sm:mt-0  h-full flex justify-center items-center '>
                <div className='grid w-full h-full grid-cols-2 sm:gap-14 grid-rows-2'>
                    <div className='col-span-1  sm:h-[500px] overflow-hidden  sm:col-span-2 sm:row-span-1 row-span-2 flex justify-end sm:justify-center items-center '>
                        <div className='w-[60%] ml-80 md:ml-0 sm:ml-0  relative grid gap-4 sm:gap-0 sm:mt-10  sm:mr-0 h-full'>
                            <div className='w-[75%] md:w-[80%] flex justify-center font-bold text-2xl sm:w-full'><h1>Talk to me</h1></div>
                            <div className='w-[75%] md:w-[80%] rounded-xl sm:h-32 sm:w-full h-36 border-2 blur-40 flex justify-center items-center'>
                                <div className='w-[80%]  h-32  bg-white flex justify-center'>
                                    <img src={Email} className="w-6 h-6 mt-2 md:mt-3 " alt="" />
                                    <h1 className='absolute mt-8 md:mt-12 font-bold'>Email</h1>
                                    <p className='absolute mt-16 text-sm text-slate-500 md:mt-20 '> parsasoli.77@gmail.com  </p>
                                    <p className='mt-24 absolute flex items-center text-gray-700 hover:text-black hover:cursor-pointer'><a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdDCxpJMSsRnpQCLFDdCpZDNtlSzwRLQSMcmvVKCXssktFwkrdXFQSlXjszPFjczWKScl' target={'_blank'}>View More</a> <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>
                                </div>
                            </div>
                            <div className='w-[75%] md:w-[80%] rounded-xl sm:h-32 sm:w-full h-36 border-2 blur-10 flex justify-center items-center'>
                                <div className='w-[80%]  h-32  bg-white flex justify-center'>
                                    <img src={Whatsapp} className="w-6 h-6 mt-2 md:mt-3 " alt="" />
                                    <h1 className='absolute mt-8 md:mt-12 font-bold'>Whatsapp</h1>
                                    <p className='absolute mt-16 text-sm text-slate-500 md:mt-20 '>+98-904-636-4944</p>
                                    <p className='mt-24 absolute flex items-center text-gray-700 hover:text-black hover:cursor-pointer'>
                                    <a href='https://api.whatsapp.com/send/?phone=%2B989046364944&text&type=phone_number&app_absent=0' target={'_blank'}>View More</a> <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>

                                </div>
                            </div>
                            <div className='w-[75%] md:w-[80%] mb-20 sm:mb-0 rounded-xl sm:h-32 sm:w-full h-36 border-2 blur-10 flex justify-center items-center'>
                                <div className='w-[80%]  h-32  bg-white flex justify-center'>
                                    <img src={Email} className="w-6 h-6 mt-2 md:mt-3 " alt="" />
                                    <h1 className='absolute mt-8 md:mt-12'>Email</h1>
                                    <p className='absolute mt-16 text-sm text-slate-500 md:mt-20 '> parsasoli.77@gmail.com  </p>
                                    <p className='mt-24 absolute flex items-center text-gray-700 hover:text-black hover:cursor-pointer'>View More <span><img src={Image} className="w-3 ml-1 mt-1.5 h-3" /></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-2 mr-20 sm:mr-0 sm:col-span-2  sm:row-span-1 '>
                        <div className='col-span-1  sm:h-[500px] overflow-hidden  sm:col-span-2 sm:row-span-1 row-span-2 flex justify-center sm:justify-center items-center '>
                            <div className='w-[70%] md:w-[85%] relative grid gap-4 sm:gap-0 sm:mt-0  sm:mr-0 h-full'>
                                <div className='w-[70%] flex justify-center font-bold text-2xl  sm:w-full'><h1>Write me your project</h1></div>
                                <form ref={form} className="grid gap-8 sm:gap-0 sm:-mt-20" onSubmit={sendEmail}>
                                    <div className='w-[80%] rounded-xl sm:h-16 sm:w-full h-16 border-2 blur-40'>
                                        <input type="text" name="user_name" className='w-full outline-none  h-full' placeholder='Insert your name' />
                                    </div>
                                    <div className='w-[80%] rounded-xl sm:h-16 sm:w-full h-16 border-2 blur-10'>
                                        <input type="email" name="user_email" className='outline-none w-full  h-full' placeholder='Insert your email' />
                                    </div>
                                    <textarea name="message" className='w-[80%] rounded-xl sm:h-32 sm:w-full h-32 border-2 blur-10' maxLength={2000} placeholder="Write your project" />
                                    <button value="Send" className=' w-44 h-10 rounded-lg  bg-[#1f1f1f] transition-all hover:bg-black flex items-center justify-center text-white'> <span>Send Message</span>  <img className='ml-2 mt-0.5 w-5 h-5' src={Send} alt="" /> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <form ref={form} className="w-[70%]  mt-10"  onSubmit={sendEmail}>
<div className='w-full rounded-lg h-16 bg-blue-500'>
    <input type="text" name="user_name" className='w-[80%] h-full' />
</div>
<div className='w-full mt-10 h-20 bg-green-500'>
    <input type="email" name="user_email" />
    </div>
    <div className='w-full mt-10 h-20 bg-yellow-500'>
        <textarea name="message" />
        </div>
        <input type="submit" value="Send" />
</form> */}

export default Contact
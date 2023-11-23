import React from 'react'
import { motion } from 'framer-motion'
import amazon from '../../Images/Banner4/amazon.png'
import google from '../../Images/Banner4/google.png'
import microsoft from '../../Images/Banner4/microsoft.png'
import bgViolet from '../../Images/Banner4/bgViolet.svg'
import avatar from '../../Images/Banner4/avatar.gif'

const animateDiv = {
    hide: {
        y: 100,
        scale: 0,
        opacity: 0
    },
    show: {
        y: 0,
        scale: 1,
        opacity: 1
    }
}

const brandContainer = [
    {brandIcon: amazon, description: 'Ex-Amazon, SWE'},
    {brandIcon: microsoft, description: 'Ex-Microsoft, SWE'},
    {brandIcon: google, description: 'Google ASC, India'},
]

const Banner_4 = () => {
    return (
        <>
            <div className='bg-[#090c1a] pb-[4rem] relative'>

                <div className=''>
                    <img src={bgViolet} className='h-[116%] w-[40rem] opacity-60 absolute top-0 transform scale-x-[-1] animate-pulse' />
                </div>

                <div className='relative'>

                    {/* <div className='overflow-hidden '>
                        <img src="https://cdn.thecodehelp.in/ggcp5ffn7v6vdnrrd53d_e563995c50.svg" className='absolute top-0 w-full h-[150%] border'/>
                    </div> */}

                    <div className='flex flex-col gap-y-6 items-center justify-center'>

                        {/* header */}
                        <div className='mt-14 w-[88%] md:w-[70%] flex items-center justify-between font-mavenPro'>

                            <div className='flex gap-x-2 font-semibold  sm:text-[1.5rem] lg:text-[2.5rem]'>
                                <p className='text-white'>Meet Your </p>
                                <p className='text-blue-300 '>Instructor</p>
                            </div>

                            <div className='flex items-center justify-center'>
                                <button className='bg-blue-700 text-[1rem] md:text-[1.1rem] lg:text-xl rounded-lg text-white px-2 sm:px-6 lg:px-8 py-2 lg:py-3 flex items-center overflow-hidden active:scale-90 transition-all'>Know More</button>
                            </div>

                        </div>

                        <div className='w-[88%] md:w-[70%] h-[.05rem] rounded-full bg-white'></div>
                    
                    </div>

                    {/* Avatar */}
                    <div className='flex flex-col items-center justify-center gap-y-8 mt-12'>
                        <motion.img 
                        src={avatar}
                        initial={{scale: 1, y: 170}}
                        whileInView={{scale: 1, y: 0}}
                        transition={{duration: .4}}
                        className='rounded-full  sm:-[15rem] md:w-[22rem] h-[10rem] sm:h-[15rem] md:h-[12rem] object-cover overflow-hidden'/>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <p className='font-mooli tracking-wider text-white font-bold text-[1.2rem] sm:text-2xl lg:text-3xl'>Soumya Sankar Das</p>
                            <p className='text-gray-500 font-semibold text-xl lg:text-[1.7rem] font-lato tracking-wider'>Founder, NoThing</p>
                        </div>
                    </div>
                    
                    {/* Companies */}
                    <div className='flex items-center justify-center mt-[8rem] lg:mt-[10rem]'>
                        <div className='flex lg:flex-row flex-col gap-y-[4rem] w-[70%] justify-between'>

                            {brandContainer.map((item, i) => (
                                <motion.div
                                key={i}
                                    variants={animateDiv}
                                    initial='hide'
                                    whileInView='show'
                                    className='space-y-3 text-center flex flex-col items-center justify-center'>
                                    <img src={item.brandIcon} className='w-[8rem]'/>
                                    <div className='text-gray-400 font-semibold text-xl'>{item.description}</div>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
            {/* <div className=' w-[40%] px-4 bg-red-400 h-[.1rem] flex'></div> */}
        </>
    )
}

export default Banner_4
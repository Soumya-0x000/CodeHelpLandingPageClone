import React from 'react'
import { motion } from 'framer-motion'
import violetbg from '../../Images/Banner1/banner1_bgImg.svg'
import singleStanding from '../../Images/Banner1/banner1_1.svg'
import fstWebp from '../../Images/Banner1/banner1_2.webp'
import scndWebp from '../../Images/Banner1/banner1_3.webp'
import thrdWebp from '../../Images/Banner1/banner1_4.webp'
import fullImg from '../../Images/Banner1/banner1_main.webp'
import TypeAnimate from '../TypeAnimate'

const containerAnimate = {
    hover: {
        x: -9,
        y: -10, 
    }
}

const imgContainer = [
    {img: 'https://i.pinimg.com/originals/69/ff/bc/69ffbcfa290f2ae5f3bf9dc29c5a15a0.gif'},
    {img: 'https://i.pinimg.com/originals/ee/01/3f/ee013f8ea11b2e2544a34be0b15ab108.gif'},
    {img: 'https://i.pinimg.com/originals/14/c6/34/14c634da68855802a99e1f067b915f9b.gif'},
    {img: 'https://s-media-cache-ak0.pinimg.com/originals/cd/8f/77/cd8f775c199ac256e105da3ca0fdb98a.gif'},
    {img: 'https://steamuserimages-a.akamaihd.net/ugc/254843371595397822/14DBB99C8C41410B7B8DCB48241CFED77EE82D06/'},
]

const Banner_1 = () => {

  return (
    <>
        <div className='w-full xl:min-h-[45rem] 2xl:min-h-[53rem] bg-slate-900  flex justify-center items-center  py-[2rem] lg:py-[3rem] xl:py-0'>

            <div className='relative flex flex-col-reverse gap-y-6 md:flex-row lg:gap-x-[4rem] justify-center items-center w-full h-full'>

                <div className='flex flex-col items-start gap-y-6 justify-center h-full ml-1 md:pl-[2rem] lg:pl-[3rem] '>
                        
                    <motion.div
                        initial={{opacity: 0, scale: .6, x: -200}}
                        whileInView={{opacity: 1, scale: 1, x: 0}}
                        transition={{delay: 0, duration: .4}}
                        viewport={{once: true}}
                        className='font-lato flex gap-x-2 md:gap-x-3 text-[2.1rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-bold '>
                        <p className='text-blue-500 '>Learn</p>
                        <p className='text-white'>with</p>
                        <div className='text-white flex items-center justify-start text-[2.1rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] md:w-[8rem] xl:w-[17rem]'>
                            <TypeAnimate/>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: .6, x: -200}}
                        whileInView={{opacity: 1, scale: 1, x: 0}}
                        transition={{delay: .1, duration: .4}}
                        viewport={{once: true}}
                        className='text-[1.2rem] md:text-[1.4rem] lg:text-[2.1rem] font-semibold text-white '>
                        The Ultimate Guide To Ace <br/> SDE Interviews.
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: .6, x: -200}}
                        whileInView={{opacity: 1, scale: 1, x: 0}}
                        transition={{delay: .2, duration: .4}}
                        viewport={{once: true}}
                        className='space-x-3 flex-shrink-1'>
                        <button className='bg-indigo-800 text-white rounded-lg text-[.9rem] lg:text-xl px-5 lg:px-8 py-2 lg:py-5 active:scale-90 transition-all'>View Courses</button>
                        <button className='border border-indigo-700 text-white rounded-lg text-[.9rem] lg:text-xl px-5 lg:px-8 py-2 lg:py-5 active:scale-90 transition-all'>Watch Video</button>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: .6, x: -200}}
                        whileInView={{opacity: 1, scale: 1, x: 0}}
                        transition={{delay: .3, duration: .4}}
                        viewport={{once: true}}
                        className='flex items-center gap-x-[2rem] md:gap-x-[3rem]'>
                        <div className='flex items-center'>
                            {imgContainer.map((item, i) => (
                                <div 
                                key={i}
                                className='flex items-center'>
                                    <motion.div 
                                    variants={containerAnimate} 
                                    whileHover='hover' 
                                    className={`rounded-full w-12 h-12 md:w-14 md:h-14 overflow-hidden border border-indigo-400 hover:border-green-400 ${i === 0 ? '' : '-ml-2'} `}>
                                        <img src={item.img}  className='w-full h-full object-cover'/>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        <div className='sm:text-[.9rem] md:text-[1rem] mr-4 flex flex-col items-start justify-center'>
                            <p className='text-gray-300 font-semibold'>35000+</p>
                            <p className='text-gray-500 font-semibold'>Happy Students</p>
                        </div>
                    </motion.div>

                </div>

                <div className=' flex items-center '>
                    <img src={fullImg} className='xl:hidden max-h-[30rem]'/>

                    <div className='relative hidden xl:block'>
                        <img src={singleStanding} className=' xl:min-h-[38rem] z-50'/>

                        <div>
                            <img src={fstWebp} className='absolute top-[6%] right-[40%] animate-bounceSlow duration-100 xl:w-[9rem] 2xl:w-[11rem]' />
                            <img src={scndWebp} className='absolute top-[56%] right-[19%] animate-bounceSlow duration-100 xl:w-[9rem] 2xl:w-[11rem]' />
                            <img src={thrdWebp} className='absolute top-[58%] left-[18%] animate-bounceSlow duration-100 xl:w-[9rem] 2xl:w-[11rem]' />
                        </div>
                    </div>

                    <img src={violetbg} className='absolute animate-pulse right-0 duration-500 opacity-80 ' />
                </div>

            </div>
            
        </div>
    </>
  )
}

export default Banner_1
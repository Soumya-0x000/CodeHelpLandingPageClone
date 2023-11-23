import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import bgDot from '../../Images/Banner8/bgDot.svg'
import Youtube from '../../Images/Banner8/Youtube.png'
import LinkedIn from '../../Images/Banner8/LinkedIn.webp'
import Discord from '../../Images/Banner8/Discord.webp'
import Telegram from '../../Images/Banner8/Telegram.webp'

const platformContainer = [
    {icon: Youtube, name: 'Youtube'},
    {icon: LinkedIn, name: 'Linkedin'},
    {icon: Discord, name: 'Discord'},
    {icon: Telegram, name: 'Telegram'},
]

const Banner_8 = () => {
    
    const animateImg = {
        hidden: {
            y: 50,
            scale: 0,
            opacity: 0,
        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                stiffness: 83,
                type: "spring",
            }
        }
    }

    const textColors = ['red-500', 'blue-500', 'violet-500', 'cyan-500'];
    return (
        <>
            <div className='bg-gray-800 pb-[6rem]'>
                <div className=''>
                    <img src={bgDot} className='absolute left-0  sm:w-[28%] md:w-[26%] lg:w-[21%] xl:w-[15%]'/>
                    <div className='w-[50%] md:w-[60%] h-[.2rem] rounded-full bg-gray-600 absolute right-0'></div>
                </div>

                <div className='pt-[4rem] flex flex-col items-center justify-center text-center'>
                    <motion.div
                    initial={{y: 50, opacity: 0, scale: 0}}
                    whileInView={{y: 0, opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    className='flex flex-col gap-y-3'>
                        <p className='font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-gray-300 font-k2d tracking-wider'>Join our Coding family</p>
                        
                        <div className='space-y-1'>
                            <p className='font-semibold text-xl text-gray-500'>If you would like to keep up on the latest posts and courses,</p> 
                            <p className='font-semibold text-xl text-gray-500'>come by and connect with us on the following links.</p>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <div className='font-onest mt-[7rem] grid grid-cols-2 gap-x-[6rem] sm:gap-x-[18rem] gap-y-[5rem] md:gap-y-[7rem] lg:grid-cols-4 lg:gap-x-[10rem] ]'>
                        
                        {platformContainer.map((item, i) => (
                            <motion.div 
                                key={i}
                                variants={animateImg}
                                initial='hidden'
                                whileInView='visible'
                                className='flex flex-col items-center justify-center'>
                                <img src={item.icon} className='max-w-[6rem] cursor-pointer active:scale-90 transition-all'/>
                                <div className={`font-bold ${i === 0 ? 'text-red-500' : i === 1 ? 'text-blue-500' : i === 2 ? 'text-violet-500' : 'text-cyan-500'} tracking-wide text-xl flex items-center justify-center gap-x-2 hover:underline`}>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    <p>{item.name}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </>
  )
}

export default Banner_8
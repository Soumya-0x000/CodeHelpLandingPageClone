import React from 'react'
import SpinningWheel from './SpinningWheel'
import spin from '../../Images/Banner5/spin.png'
import { motion } from 'framer-motion'

const Banner_5 = () => {
  return (
    <>
        <div className='bg-[#1b2136] flex items-center justify-center gap-x-[10rem] max-h-[35rem] px-5 py-3 md:px-0 md:py-0'>

            <motion.div 
            initial={{y: -150, scale: 0}}
            whileInView={{y: 0, scale: 1}}
            transition={{duration: .4}}
            className='space-y-4 lg:space-y-8 py-6 text-center'>
                <div className='text-blue-400 font-semibold tracking-wider text-[1.4rem] md:text-[1.5rem] lg:text-2xl xl:text-3xl font-oxanium'>PLACEMENTS</div>
                
                <div className='text-gray-400 tracking-wide md:tracking-wider font-bold text-[1.3rem] md:text-xl lg:2xl xl:text-4xl font-lato'>
                    <p>Get Offers from</p>
                    <p>Top Companies</p>
                </div>

                <div className='text-gray-500 font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.6rem] font-onest'>Our finest get offers from top-notch companies.</div>
            </motion.div>

            {/* <div className=' overflow-hidden hover:animate-spinSlow'>
                <img src={spin} />
            </div> */}

        </div>
    </>
  )
}

export default Banner_5
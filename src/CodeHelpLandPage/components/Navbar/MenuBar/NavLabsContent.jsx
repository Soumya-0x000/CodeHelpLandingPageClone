import React from 'react'
import { motion } from 'framer-motion'

const NavLabsContent = () => {
  return (
    <>
        <motion.div
        initial={{y: -100, scale: 0, opacity: 0}}
        whileInView={{y: 0, scale: 1, opacity: 1}}
        className={`rounded-lg overflow-hidden w-[16rem] sm:w-[19rem] md:min-w-[20rem] font-robotoMono absolute -left-[3rem] sm:-left-[10rem] largesm:-left-[25.5rem] lg:-left-[11rem] largesm:-bottom-[2.6rem] lg:-bottom-[12rem]`}>

            <div className='bg-gray-800 flex flex-col gap-y-6 rounded-lg p-[.6rem] shadow-2xl'>

                <button className='flex flex-col gap-y-[.5rem] w-full items-center justify-between active:scale-95 transition-all'>
                    
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-[.9rem] md:text-[1.1rem] text-violet-300 font-extrabold'>Fruitbox Flex</p>
                        <p className='text-[.73rem] md:text-[.8rem] px-[1rem] py-[.1rem] font-extrabold rounded-full bg-red-300 text-red-950 font-mooli tracking-wider'>Popular</p>
                    </div>

                    <div className='text-[.7rem] md:text-[.8rem] text-left font-montserrat tracking-wider font-light text-green-200'>
                        A fun and interactive way to sharpen your flexbox CSS skills.
                    </div>

                </button>

                <button className='flex flex-col gap-y-[.5rem] w-full items-center justify-between active:scale-95 transition-all'>
                    
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-[.9rem] md:text-[1.1rem] text-violet-300 font-extrabold'>Quick Compiler</p>
                        <p className='text-[.73rem] md:text-[.8rem] px-[.9rem] py-[.1rem] font-extrabold rounded-full bg-yellow-200 text-yellow-800 font-mooli tracking-wider'>Beta</p>
                    </div>

                    <div className='text-[.7rem] md:text-[.8rem] text-left font-montserrat tracking-wider font-light text-green-200'>
                        Write and run code in multiple languages from anywhere.
                    </div>

                </button>

            </div>

        </motion.div>
    </>
  )
}

export default NavLabsContent
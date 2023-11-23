import React from 'react'
import { motion } from 'framer-motion'

const Float_QnA = () => {
  return (
    <>
        <motion.div className='fixed bottom-0 right-0 bg-violet-600 m-4 rounded-bl-full sm:rounded-t-2xl rounded-t-full sm:rounded-bl-2xl z-50'
          initial={{y: '100vh'}}
          animate={{y: 0,}}
          transition={{ type: 'spring', stiffness: 150, }}>
            <button className='text-white px-3 py-2 font-semibold sm:text-[1.1rem] hidden md:flex'>
                😕 Facing an issue ?
            </button>
            <button className='hidden sm:flex md:hidden text-[2rem] pr-2 text-white'>😕<p className='text-teal-200'>?</p></button>
            <button className='sm:hidden text-[2rem]'>😕</button>
        </motion.div>
    </>
  )
}

export default Float_QnA
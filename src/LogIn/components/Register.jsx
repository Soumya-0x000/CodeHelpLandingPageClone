import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
  return (
    <>
        <motion.button 
            onClick={() => navigate('/RegisterForm')}
            className='w-full py-3 text-white font-oxanium font-bold tracking-wider text-xl active:text-green-300 active:bg-slate-700 flex items-center justify-center bg-slate-600 hover:bg-green-800 transition-all'>
                Register
        </motion.button>
    </>
  )
}

export default Register
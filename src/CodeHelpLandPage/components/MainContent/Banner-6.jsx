import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import poster1 from '../../Images/Banner6/banner6_1.jpg'
import poster2 from '../../Images/Banner6/banner6_2.jpg'
import poster3 from '../../Images/Banner6/banner6_3.jpg'

const courseContainer = [
    {
        banner: poster2, 
        description: 'Data Structures & Algorithms BootCamp @Supreme Batch',
        orgnlPrice: '7000',
        crntPrice: '3500',
        discount: '50',
    },
    
    {
        banner: poster3, 
        description: ' Web Development Master Course @dot Batch',
        orgnlPrice: '6999',
        crntPrice: '4500',
        discount: '42',
    }
]

const Banner_6 = () => {
    return (
        <>
            <div className='bg-slate-900 pt-[4rem] pb-[10rem] flex flex-col items-center justify-center h-full'>

                <div className='flex flex-col items-center'>
                    <motion.div
                    initial={{y: 100}}
                    whileInView={{y: 0}} 
                    viewport={{once:true}}   
                    className='flex gap-x-2 font-semibold font-oxanium text-[1.1rem] xsm:text-[1.4rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] pb-[6rem]'>
                        <p className='text-white'>What would you like to</p>
                        <p className='text-blue-400'>learn ?</p>
                    </motion.div>

                    <div className='border px-4 py-5 bg-slate-800 bg-opacity-80 rounded-lg w-[16rem] xsm:w-[19rem] sm:w-[21rem] md:w-[25rem]'>
                        <div className=''>
                            <img src={poster1} className='rounded-lg' />
                        </div>

                        <div className='text-gray-300 text-[1rem] md:text-2xl font-lato tracking-wide font-semibold md:font-bold '>
                            Data Structures & Algorithms BootCamp @Supreme-2.0
                        </div>

                        <div className='h-[.1rem] mt-4 w-[82%] rounded-lg bg-gray-600'></div>

                        <div className='mt-2 flex gap-x-4'>
                            <div className='font-bold flex items-center justify-start gap-x-1 text-blue-400'><FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm h-[.8rem]'/>3600</div>
                            <div className='font-bold flex items-center justify-start gap-x-1 text-gray-500 line-through'><FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm h-[.8rem]'/>7000</div>
                            <div className='bg-green-700 px-3 py-1 rounded-full font-semibold'>
                                <p className='text-green-300'>50% off</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[.05rem] rounded-lg bg-gray-500 w-[90%] md:w-[70%] mt-[4rem] md:mt-[8rem]'></div>

                <div className='mt-[4rem] flex flex-col items-center'>
                    
                    <motion.div
                    initial={{y: 100}}
                    whileInView={{y: 0}} 
                    viewport={{once:true}}
                    className='flex gap-x-2 font-oxanium font-semibold text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] pb-[5rem]'>
                        <p className='text-white'>Recorded</p>
                        <p className='text-blue-400'>Courses</p>
                    </motion.div>

                    <div className='flex flex-col gap-y-[4rem] lg:flex-row gap-x-[10rem]'>
                        {courseContainer.map((item, i) => (
                            <div className='border px-4 py-5 bg-slate-800 bg-opacity-80 rounded-lg w-[16rem] xsm:w-[19rem] sm:w-[21rem] md:w-[25rem]' key={i}>
                                <div className=''>
                                    <img src={item.banner} className='rounded-lg' />
                                </div>

                                <div className='text-gray-300 text-[1rem] md:text-2xl font-lato tracking-wide font-semibold md:font-bold '>
                                    {item.description}
                                </div>

                                <div className='h-[.1rem] mt-4 w-[82%] rounded-lg bg-gray-600'></div>

                                <div className='mt-2 flex gap-x-4'>
                                    <div className='font-bold flex items-center justify-start gap-x-1 text-blue-400'><FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm h-[.8rem]'/>{item.crntPrice}</div>
                                    <div className='font-bold flex items-center justify-start gap-x-1 text-gray-500 line-through'><FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm h-[.8rem]'/>{item.orgnlPrice}</div>
                                    
                                    <div className='bg-green-700 px-3 py-1 rounded-full font-semibold'>
                                        <p className='text-green-300'>{item.discount}% off</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Banner_6
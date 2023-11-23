import React from 'react'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faAward, faBookOpenReader, faFileContract, faHandHoldingHand, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import img from '../../Images/Banner3/banner3.png'

const cardContainer = [
    {
        icon: faSitemap,
        course: 'Data Structure',
        details: 'Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.',
    },

    {
        icon: faHandHoldingHand,
        course: 'Placement Preparation',
        details: 'Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences.',
    },

    {
        icon: faCircleQuestion,
        course: 'Hand Picked Question',
        details: 'Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter.',
    },

    {
        icon: faFileContract,
        course: 'Curated Content',
        details: 'Learn in-depth conceptual overviews, how to approach an algorithm, how to implement it & how to optimize it.',
    },

    {
        icon: faAward,
        course: 'Learn from the best',
        details: 'Get access to lectures and get mentored by one of the best in the market, Love Babbar.',
    },

    {
        icon: faBookOpenReader,
        course: 'Learn Something new',
        details: 'Learn new concepts daily, increase your productivity & reach your full potential.',
    },
]

const Banner_3 = () => {
    
    const animateDiv = {
        hiddenY: {
            // opacity: 0,
            x: 100,
            scale: 0
        },
        visibleY: {
            // opacity: 1,
            x: 0,
            scale: 1,
            
        },
    };

    return (
        <>
            <div className='bg-slate-900 w-full h-full'>
                <div>

                    <div className='absolute'>
                        <img src={img}/>
                    </div>

                    <div className='flex flex-col items-center pt-9 gap-y-3'>

                        <div className='text-blue-400 text-[1.5rem] font-bold font-lato'>WHY CODE-HELP?</div>
                        
                        <div className='font-montserrat text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold space-y-1 sm:space-y-2 md:space-y-4 text-center'>
                            <p>Making learning easier and</p>
                            <p>more convenient for you.</p>
                        </div>

                    </div>

                    <div className='mt-[5.5rem] flex items-center justify-center'>
                        <div className='max-w-[75%] sm:max-w-[50%] lg:max-w-[66%] grid lg:grid-cols-2 xl:grid-cols-3 gap-x-[2rem] gap-y-10 md:gap-y-12 xl:gap-y-16 text-center mb-[4rem]'>
                            {cardContainer.map((item, i) => {
                                return(
                                    <motion.div 
                                    key={i}
                                    variants={animateDiv}
                                    initial='hiddenY'
                                    whileInView='visibleY' 
                                    className={`bg-slate-800 flex flex-col items-center justify-center gap-y-4 px-10 py-8 rounded-md border-b-4 h-[20rem] min-w-[17rem] max-w-[25rem] hover:scale-105 transition-all ${i===0?'border-green-300': i===1? 'border-red-300' : i===2? 'border-blue-300': i===3? 'border-yellow-300' : i===4? 'border-violet-300' : 'border-orange-300'}`}>

                                        <div className='h-[20%] w-full flex justify-center items-center'>
                                            <motion.div className={`rounded-full w-12 h-12 flex items-center justify-center ${i===0?'bg-green-300': i===1? 'bg-red-300' : i===2? 'bg-blue-300': i===3? 'bg-yellow-200' : i===4? 'bg-violet-300' : 'bg-orange-300'}`}
                                                whileHover={{rotate: 360, scale:1.2}}
                                                transition={{duration:.5}}>
                                                <FontAwesomeIcon icon={item.icon} className={`${i===0?'text-green-700': i===1? 'text-red-700' : i===2? 'text-blue-700': i===3? 'text-yellow-700' : i===4? 'text-violet-700' : 'text-orange-700'} text-xl`}/>
                                            </motion.div>
                                        </div>

                                        <div className='text-white font-semibold text-[1.1rem]'>{item.course}</div>

                                        <div className='text-gray-400'>{item.details}</div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Banner_3
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import img1 from '../../Images/Banner2/banner2_1.svg'
import img2 from '../../Images/Banner2/banner2_2.svg'

const imgContainer = [
    {img: img1},
    {img: img1},
    {img: img2},
    {img: img2},
]
const dataContainer = [
    {num: '900', title: 'Subscribers', platform: 'Youtube'},
    {num: '4', title: 'Followers', platform: 'Twitter'},
    {num: '100', title: 'Followers', platform: 'Instagram'},
    {num: '410', title: 'Followers', platform: 'LinkedIn'},
]

const Banner_2 = () => {

    const animateDiv = {  
        hiddenY: {
            opacity: 0,
            y: 30,
            scale: 0,
        },
        visibleY: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: .4
            }
        },
    };

    return (
        <>
            <div className='bg-indigo-900 relative w-full md:px-[5rem] py-16 flex items-center justify-center'>
                <div>
                    {imgContainer.map((imgData, index) => (
                        <div
                        key={index}
                        className={`absolute hidden sm:block 
                            ${index === 0 ? 'top-0 left-0 w-[12rem]' : ''} 
                            ${index === 1 ? 'bottom-0 right-0 w-[12rem]' : ''} 
                            ${index === 2 ? 'bottom-0 left-0 w-[7rem]' : ''} 
                            ${index === 3 ? 'top-0 right-0 w-[7rem]' : ''}`}>
                            <img src={imgData.img} className={`w-full h-full ${index === 3 ? 'rotate-180' : ''}`} />
                        </div>
                    ))}
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-16 sm:w-full xl:w-[80%] gap-y-10 sm:gap-0 text-center'>
                    {dataContainer.map((data, i) => (
                        <motion.div
                            key={i} 
                            variants={animateDiv}
                            initial="hiddenY"
                            whileInView='visibleY'
                            className={`text-white ${data.num === '410' ? 'sm:border-r-0' : 'sm:border-r-2'} flex flex-col items-center`}>
                                
                            <div className=' font-bold text-4xl xl:text-5xl font-montserrat'>
                                <CountUp end={Number(data.num)} duration={2.5} separator="," prefix="" />k+
                            </div>

                            <div className=' font-semibold md:text-[1.1rem] xl:text-[1.4rem] text-[.94rem] font-k2d tracking-wide'>{data.title}</div>

                            <div className=' font-semibold md:text-[1.1rem] xl:text-[1.4rem] text-[.94rem] font-k2d tracking-wide underline'>on {data.platform}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Banner_2
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const buttonVariants = {
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    hide: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: .85
    }
};

const buttonData = [
    { text: 'Dashboard', bgColor: 'violet-700' },
    { text: 'Login', bgColor: 'blue-700' },
];

const NavMenuBarBtn = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <motion.div className='flex mb-4 lsm:mb-3 sm:my-5 sm:w-full justify-between gap-x-10 sm:px-[.95rem] lg:px-0 lg:gap-x-4 transition-all'>
                    {buttonData.map((button, index) => (
                        <motion.div
                            key={index}
                            variants={buttonVariants}
                            whileTap='tap'
                            initial="hide"
                            animate='show'
                            exit="exit"
                            onClick={() => (index === 1 ? navigate('/login') : '')}
                            className={`cursor-pointer bg-${button.bgColor} shadow-xl text-white px-3 xsm:px-4 lsm:px-6 sm:px-8 py-2 rounded-full text-[.8rem] xsm:text-[.9rem] lsm:text-[1.1rem] font-semibold hover:shadow-md hover:shadow-violet-900 transition-all`}>
                            {button.text}
                            {index === 1 && (
                                <FontAwesomeIcon icon={faArrowRightToBracket} className='pl-1' />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default NavMenuBarBtn;

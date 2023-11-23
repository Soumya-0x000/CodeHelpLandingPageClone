import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll)
    }, []); // an empty dependency array to run the effect only once

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isVisible ? 'visible' : 'hidden'}
        exit="hidden"
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 p-3 bg-blue-600 text-white rounded-full cursor-pointer">
            <FontAwesomeIcon icon={faArrowUpLong} />
        </motion.div>
    );
};

export default ScrollTopButton;

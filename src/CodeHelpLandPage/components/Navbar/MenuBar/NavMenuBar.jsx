import React, { useState } from "react";
import NavLabsContent from "./NavLabsContent";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const menuItemVariants = {
    dropDownShow: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.3,
        },
    },
    hide: {
        y: -100,
        scale: 0,
        opacity: 0,
        transition: {
            delay: 0.2,
            duration: 0.3,
        },
    },
};

const menuItems = [
    { title: "About us" },
    { title: "Courses" },
    { title: "Labs" },
    { title: "Contact" },
];

const NavMenuBar = () => {
    const [labsDropDown, setLabsDropDown] = useState(false);

    return (
        <>
            <div className="w-full pt-[3rem] lsm:pt-[2rem] flex items-center justify-center">
                <motion.div className="flex items-center justify-between flex-row mt-8 px-[1rem] xsm:px-[3rem] sm:px-[3rem] pt-[1rem] h-full">
                    <div className=" grid grid-cols-2 gap-x-[8rem] gap-y-[3rem]">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={menuItemVariants}>
                                <button
                                    onMouseEnter={ item.title === 'Labs'? () => setLabsDropDown(!labsDropDown) : undefined}
                                    onMouseLeave={ item.title === 'Labs' ? () => setLabsDropDown(!labsDropDown) : undefined}
                                    className={`text-white hover:text-green-300 font-semibold sm:text-[1.1rem] hover:scale-110 active:scale-95 transition-all`}>
                                    {<div className="flex items-center justify-center">
                                        {item.title}
                                        {item.title === 'Labs' && (
                                            <div>
                                                <FontAwesomeIcon icon={faAngleUp} className={` ml-2  ${labsDropDown ? "rotate-180 scale-1" : "scale-1"} transition-all`} />

                                                <div className={`fixed mt-1   ${labsDropDown ? 'block' : 'hidden'}`}>
                                                    <NavLabsContent />
                                                </div>
                                            </div>
                                        )}
                                    </div>}
                                </button>
                            </motion.div>
                        ))}

                    </div>
                    
                </motion.div>
            </div>
        </>
    );
};

export default NavMenuBar;

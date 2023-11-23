import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const PswdVisibility = ({setShowPswd, showPswd}) => {
    return (
        <>
            <div className='absolute right-8 top-[.8rem]'>
                <button 
                onClick={(a) =>{a.preventDefault(); 
                setShowPswd(!showPswd)}}>
                    <FontAwesomeIcon
                    icon={ showPswd ? faEye : faEyeSlash } 
                    className={` ${showPswd ? 'text-red-400' : 'text-green-400'} text-[1.1rem] active:scale-90 transition-all`}/>
                </button>
            </div>
        </>
    )
}

export default PswdVisibility
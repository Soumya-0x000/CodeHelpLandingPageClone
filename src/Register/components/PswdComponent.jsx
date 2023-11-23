import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PswdComponent = ({pswdMatch, content, showPswdIcon, pswdIcon, pswd, handleInput, name, placeholder}) => {
    return (
        <div className="mb-3.5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {content}
            </label>

            <div className='w-full h-[2.3rem] relative'>
                <input 
                type={pswdIcon ? "text" : "password"}
                value={String(pswd)}
                onChange={handleInput}
                minLength={8}
                maxLength={60}
                name={name}
                className={`shadow-sm bg-gray-700 text-sm rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 w-full h-full pl-[1rem] pr-[3rem] placeholder-gray-400  ${content === 'Repeat password' ? (pswdMatch ? 'text-green-300' : 'text-red-400') : 'text-green-300'}`}
                placeholder={placeholder}
                required
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}/>     
            
                <div className='absolute right-3 top-[.4rem]'>
                    <button onClick={(a) =>{a.preventDefault(); showPswdIcon(!pswdIcon)}}>
                        <FontAwesomeIcon icon={pswdIcon ? faEye : faEyeSlash} className={`${pswdIcon ? 'text-yellow-400' : 'text-green-400'} active:scale-90 transition-all`}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PswdComponent
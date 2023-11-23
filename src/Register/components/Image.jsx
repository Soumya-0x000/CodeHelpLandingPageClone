import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

const Image = ({handleImageUpload, img, imgFileName, setImgFileName, setImgDataURL, imgDataURL}) => {
    
    return (
        <>
            <div className="mb-3.5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload your image</label>

                {/* Image input section */}
                <div className='relative bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 w-full p-2 flex justify-between'>

                    {/* core input area */}
                    <div className='flex items-center justify-center w-[26%]'>
                        {/* Chose image */}
                        <input type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id='imgUpload'
                        required/>
                    
                        {/* Customize image choosing button */}
                        <label htmlFor="imgUpload"
                            className='flex items-center justify-center text-white font-semibold bg-violet-700 text-[.91rem] rounded-lg w-full h-full py-1 active:scale-90 transition-all tracking-wider'>Choose File
                        </label>
                    </div>
                    
                    {/* Display image name */}
                    <div className={`flex justify-center items-center text-sm sm:text-[.8rem] md:text-[.9rem] lg:text-[1rem] ${ img ? 'text-green-400 text-sm' : 'text-red-400 text-[1rem]'} w-[50%] overflow-hidden hover`}>
                        <p>{ img ? imgFileName : 'No file has been chosen' }</p>
                    </div>

                    {/* Remove input image */}
                    <button 
                    className='text-yellow-300 active:text-red-500 rounded-lg active:scale-90 transition-all'
                    onClick={(a) => {
                        setImgFileName('Image has been removed');
                        setImgDataURL();
                        a.preventDefault();
                    }}>
                        <FontAwesomeIcon icon={faXmarkCircle} className='text-[1.3rem]'/>
                    </button>

                </div>

                {/* Display image */}
                <div className='w-full rounded-2xl mt-3'>
                    {img && <img src={imgDataURL} className={`w-full rounded-lg ${ imgDataURL ? '' : 'hidden' }`} />}
                </div>
            </div>       
        </>
    )
}

export default Image
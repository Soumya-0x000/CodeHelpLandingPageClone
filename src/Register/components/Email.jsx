import React from 'react'

const Email = ({email, handleInput}) => {
    return (
        <>
            <div className="mb-3.5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                <input 
                type="email"
                value={email}
                onChange={handleInput}
                name="emailInput"
                className="bg-gray-700 text-sm rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 w-full pl-[1rem] py-[.5rem] placeholder-gray-400 text-white"
                placeholder="data@outlook.com"
                required/>
            </div>
        </>
    )
}

export default Email
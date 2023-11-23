import React from 'react'

const Name = ({name, handleInput}) => {
    return (
        <div>
            {/* Name Input */}
            <div className="mb-3.5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
                </label>

                {/* Name input field */}
                <input type="text"
                    value={name}
                    onChange={handleInput}
                    name="nameInput"
                    className="bg-gray-700 text-sm rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 w-full pl-[1rem] py-[.5rem] placeholder-gray-400 text-white"
                    placeholder="Soumya Sankar Das"
                    required/>
            </div>

        </div>
    )
}

export default Name
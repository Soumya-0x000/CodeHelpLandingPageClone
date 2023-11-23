import React from 'react'

const AgreementNcheckbox = ({setCheckboxValue, checkboxValue}) => {
    return (
        <>
            <div className="flex items-start mb-3.5">

                {/* User agreement checkbox input field */}
                <div className="flex items-center h-5">
                    <input 
                    id="terms"
                    type="checkbox"
                    value=""
                    className="cursor-pointer w-7 h-[1.3rem] appearance-none border-[.2rem] border-yellow-500 rounded-full checked:border-yellow-300 checked:bg-green-900 checked:scale-90 checked:rounded-md focus:outline-none transition-all"
                    onClick={() => setCheckboxValue(!checkboxValue)}
                    required/>
                </div>

                {/* Checkbox text */}
                <label className="ml-2 text-sm font-medium text-white">
                    I agree with the{" "}
                    <a href="#" className="text-white hover:underline hover:text-blue-800 hover:bg-blue-300 hover:rounded-md hover:px-2 transition-all">
                        terms and conditions
                    </a>
                </label>
            </div>
        </>
    )
}

export default AgreementNcheckbox
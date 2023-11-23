import React from 'react'

const SetResetColor = ({showColorOptions, setFormColor, formColor, setselectedColor1, setselectedColor2, setselectedColor3, setOpacity}) => {
    return (
        <>
            <div className={`px-2 w-full h-9 mt-[.4rem] font-semibold text-violet-800 flex gap-x-4 ${showColorOptions ? 'flex' : 'hidden'} transition-all`}>
                <button className='bg-gradient-to-l from-green-300 to-blue-300 rounded-full w-full h-full text-[1rem] lg:text-lg active:scale-90 transition-all'
                        onClick={(a) => {a.preventDefault(); setFormColor(!formColor)}}>
                Change Form Color
                </button>

                <button className='bg-gradient-to-l from-orange-300 to-violet-300 rounded-full w-full h-full text-[1rem] lg:text-lg active:scale-90 transition-all'
                        onClick={(a) => {a.preventDefault()
                                        setselectedColor1(0)
                                        setselectedColor2(0)
                                        setselectedColor3(0)
                                        setOpacity(0) }}>
                Reset Form Color
                </button>
            </div>   
    </>
    )
}

export default SetResetColor
import React from 'react'

const Name = ({liftName, setliftName, name, setName}) => {
    return (
        <>
            <div className={`w-full relative flex items-center justify-center ${liftName ? 'pt-6 font-mavenPro' : ''} transition-all`}>
                <input 
                type="text"
                className={`bg-black pl-5 py-3 rounded-full w-[90%] text-slate-400 focus:outline-none ${liftName ? 'rounded-lg' : ''} focus:shadow-cyan-500`}
                onClick={() => setliftName(true)}
                value={name}
                onChange={(e) => setName(e.target.value)}/> 

                <p className={`absolute left-[3.5rem] ${liftName ? '-translate-y-[2.5rem] scale-125 -translate-x-[1.7rem] text-white' : 'text-slate-500'} transition-all`}>User name</p>
            </div>
        </>
    )
}

export default Name
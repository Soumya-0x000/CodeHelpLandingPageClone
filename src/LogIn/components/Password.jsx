import React from 'react'
import PswdVisibility from './PswdVisibility'

const Password = ({liftPswd, setShowPswd, showPswd, setliftPswd, pswd, setPswd}) => {
    return (
        <>
            <div className={`w-full relative flex items-center justify-center ${liftPswd ? 'pt-4 font-mavenPro' : ''} transition-all`}>
                                    
                <div className='relative w-full flex items-center justify-center'>
                    <input 
                    type={showPswd ?  "text" : "password"}
                    className={`bg-black pl-5 pr-10 py-3 rounded-full w-[90%] text-slate-400 focus:outline-none ${liftPswd ? 'rounded-lg' : ''}`}
                    onClick={() => setliftPswd(true)}
                    value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                    minLength={8}
                    maxLength={50}/>

                    <PswdVisibility setShowPswd={setShowPswd} showPswd={showPswd}/>
                </div>
                
                <p className={`absolute left-[3.5rem] ${liftPswd ? '-translate-y-[2.5rem] scale-125 -translate-x-[1.7rem] text-white' : 'text-slate-500'} transition-all`}>Password</p>

            </div>
        </>
    )
}

export default Password
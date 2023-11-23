import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Img from './Image/image.webp'
import Register from './components/Register';
import Checkbox from './components/Checkbox';
import Submit from './components/Submit';
import Name from './components/Name';
import Password from './components/Password';

const Login = () => {

    const [liftName, setliftName] = useState(false);
    const [name, setName] = useState('');
    
    const [liftPswd, setliftPswd] = useState(false);
    const [pswd, setPswd] = useState('');
    const [showPswd, setShowPswd] = useState(false);

    const [checkboxValue, setCheckboxValue] = useState(false);

    return (
        <>
            <div className='bg-slate-800 h-screen w-screen flex items-center justify-center'>
                <motion.div 
                initial={{scale: 0.6, y: -500, opacity: 0}}
                animate={{scale: 1, y: 0, opacity: 1}}
                transition={{duration: .35, }}
                className='w-[25rem] rounded-xl overflow-hidden flex flex-col justify-between items-center gap-y-2'>
                    
                    <div className='w-full bg-slate-700'>
                        <img src={Img} className='w-full' />

                        <form className='w-full gap-y-12 flex flex-col items-center justify-between pt-8'>
                            
                            <div className='w-full flex flex-col gap-y-9'>
                                <Name liftName={liftName} setliftName={setliftName} name={name} setName={setName} />

                                <Password liftPswd={liftPswd} setShowPswd={setShowPswd} showPswd={showPswd} setliftPswd={setliftPswd} pswd={pswd} setPswd={setPswd}/>
                            </div>

                            <div className='flex flex-col gap-y-4 mb-2'>
                                <Checkbox setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue}/>
                                
                                <Submit name={name} pswd={pswd} checkboxValue={checkboxValue}/>
                            </div> 

                        </form>
                    </div>
                    
                    <Register/>
                </motion.div>
            </div>
        </>
    )
}

export default Login
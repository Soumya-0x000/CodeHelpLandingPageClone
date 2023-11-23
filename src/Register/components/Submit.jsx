import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Submit = ({pswdMatch, checkboxValue, isSubmitDisabled, setShowColorOptions, showColorOptions, name, email, pswd, imgDataURL}) => {
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToPass = {
            name: name,
            email: email,
            pswd: pswd,
            imgURL: imgDataURL
        };

        if (checkboxValue) {
            if(pswdMatch) {
                if (name) { 
                    if (email) { 
                        navigate('/registeredData', {state: dataToPass})
                    }  else {
                        alert('Please enter a valid email address.')
                    }
                } else {
                    alert('Please enter a name.')   
                }
            } else {
                alert('Passwords did not match. Check the passwords again.')
            }
        } else {
            alert('Checkbox not checked. Submission aborted.')
        }
    }

    return (
        <>
            <div className='w-full flex justify-between'>
                 
                {/* Register */}
                <button 
                type="submit" 
                className={`text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:scale-90 transition-all ${pswdMatch && checkboxValue ? '' : 'bg-blue-900 cursor-not-allowed'} `}
                onClick={handleSubmit}
                disabled={isSubmitDisabled}>
                    Register new account
                </button>

                {/* Main color button */}
                <div className='flex justify-center'>
                    <button 
                    className='active:text-2xl transition-all' 
                    onClick={(e) => {e.preventDefault(); setShowColorOptions(!showColorOptions)}}>
                        <FontAwesomeIcon icon={faSquareCaretDown} className={`active:text-violet-400 text-green-300 text-xl ${showColorOptions ? 'rotate-180' : ''}`}/>
                    </button>
                </div>

                {/* log In */}
                <button 
                type="submit" 
                className={`text-gray-700 font-bold bg-orange-400 hover:bg-cyan-600 hover:text-neutral-200 rounded-lg text-md px-4 py-2 active:scale-90 transition-all`}
                onClick={(a) => {a.preventDefault(); navigate('/')}}>
                    Log In
                </button>

            </div>
        </>
    )
}

export default Submit
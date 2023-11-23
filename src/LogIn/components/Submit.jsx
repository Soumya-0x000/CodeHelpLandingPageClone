import React from 'react'
import { useNavigate } from 'react-router-dom';

const Submit = ({name, pswd, checkboxValue}) => {

    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
        const dataToPass = {
            name: name,
            pswd: pswd,
        }
        e.preventDefault();
        if(name.trim() !== '' && pswd.trim() !== '') {
            if(checkboxValue) {
                console.log(dataToPass);
                navigate('/registeredData', {state: dataToPass})
            } else {
                alert('Check the checkbox')
            }
        } else {
            alert('Fill all input fields.....')
        }
    };

    return (
        <>
            <button 
            className='w-full bg-gradient-to-r from-sky-400 to-lime-400 rounded-full active:scale-95 transition-all font-mavenPro font-semibold py-1 text-[1.1rem]'
            onClick={handleSubmit}>
                <input type="submit" className={`w-full h-full ${ checkboxValue ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}/>
            </button>
        </>
    )
}

export default Submit
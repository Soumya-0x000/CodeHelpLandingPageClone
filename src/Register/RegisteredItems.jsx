import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const RegisteredItems = () => {
    const location = useLocation();
    const prop = location.state;
    
    const content = [
        { title: 'Name:', value: prop.name },
        { title: 'Email ID:', value: prop.email },
        { title: 'Password:', value: prop.pswd },
    ];

    const [value, setValue] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 bg-gradient-to-r from-blue-900 to-green-400 overflow-hidden h-screen">
            <div className="rounded-lg bg-gradient-to-l from-blue-500 to-violet-400 bg-opacity-20 shadow-2xl flex flex-col justify-between overflow-hidden transition-all">
                <div className="flex items-center justify-center bg-gradient-to-l from-blue-700 to-violet-600 text-white py-2 lg:py-3 xl:py-3.5 px-12 font-semibold tracking-wide transition-all">
                    <div className="md:text-[1rem] lg:text-xl xl:text-[1.5rem]">You Have Successfully Registered Your Account</div>
                </div>

                <div className="flex flex-col justify-between md:text-[1rem] lg:text-xl xl:text-[1.1rem]">
                    {content.map((data, index) => (
                        (data.title === 'Email ID:' && !data.value) ? null : (
                            <div key={index} className="bg-green-300 mx-2 my-2 rounded-lg flex items-center justify-start overflow-hidden text-neutral-700">
                                <div className="py-1 md:py-2 min-w-[6rem] md:min-w-[8rem] bg-green-400 h-full font-semibold mr-2 flex justify-center items-center flex-shrink-0">{data.title}</div>
                                
                                <div className="text-blue-900 font-semibold min-w-[9rem] md:min-w-[13rem]">{data.value}</div>
                            </div>
                        )
                    ))}
                </div>
            </div>

            <div className={`rounded-md relative w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%] text-red-300 font-semibold text-lg space-y-2 ${prop.imgURL ? '' : 'hidden'}`}>
                <div className="w-full h-[3rem] flex justify-center">
                    <button className="w-[80%] h-full rounded-lg bg-gradient-to-r from-violet-600 to-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-700 active:scale-90 transition-all ease-in-out" onClick={() => setValue(!value)}>
                        <h2 className="text-[1.8rem]">{value ? 'Show' : 'Hide'}</h2>
                    </button>
                </div>

                <div className={`rounded-md w-full overflow-hidden ${value ? 'opacity-0' : ''} transition duration-300 ease-in-out`}>
                    <img src={prop.imgURL} className="w-full rounded-md hover:scale-110 transition-all" alt="User Image" />
                </div>
            </div>
        </div>
    );
};

export default RegisteredItems;

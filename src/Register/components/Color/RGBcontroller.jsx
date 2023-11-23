import React from 'react'

const RGBcontroller = ({handleColorChange, selectedColor1, selectedColor2, selectedColor3}) => {

    const colorOption = [
        {color: selectedColor1, name: 'ColorInput_1st'},
        {color: selectedColor2, name: 'ColorInput_2nd'},
        {color: selectedColor3, name: 'ColorInput_3rd'}
    ]
    
    return (
        <>
            <div className='px-2 flex flex-col items-center gap-y-3 w-full'>
                
                {colorOption.map((data, index) => (
                    <div key={index} className='flex justify-center items-center w-full gap-x-3'>
                        <input 
                        type="range"
                        className={`w-[86%] bg-gradient-to-r ${index === 0 ? 'from-red-500 to-violet-400' : index === 1 ? 'from-green-400 to-blue-400' : 'from-blue-400 to-teal-400'} appearance-none h-[.5rem] rounded-md`}
                        min="0"
                        max="255"
                        step="1"
                        value={data.color}
                        onChange={handleColorChange}
                        name={data.name}/>
                        
                        <div className={`w-[12%] h-7 rounded-full flex justify-center items-center border-2 border-red-400`}
                        style={{ backgroundColor: index===0?`rgb(${data.color}, 0, 0)`:index===1?`rgb(0, ${data.color}, 0)`:`rgb(0, 0, ${data.color})`}}>
                            <p className='text-sm'>
                                {
                                    index === 0 ? 
                                    <span className='font-semibold' style={{color: `rgb(0, ${selectedColor2}, ${selectedColor3})`}}>{selectedColor1}</span> :
                                    index === 1 ?
                                    <span className='font-semibold' style={{color: `rgb(${selectedColor1}, 0, ${selectedColor3})`}}>{selectedColor2}</span> :
                                    <span className='font-semibold' style={{color: `rgb(${selectedColor1}, ${selectedColor2}, 0)`}}>{selectedColor3}</span>
                                } 
                            </p>
                        </div>    
                    </div>
                ))}

            </div>
        </>
    )
}

export default RGBcontroller
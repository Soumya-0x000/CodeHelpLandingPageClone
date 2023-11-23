import React from 'react'

const Opacity = ({selectedColor1, selectedColor2, selectedColor3, opacity, setOpacity}) => {
    
    return (
        <>
            <div className='mt-3 w-full px-2 mb-2 flex items-center justify-center gap-x-2'>

                <div className={`w-[20%] h-7 rounded-full flex justify-center items-center border-2 border-red-400`}
                        style={{ backgroundColor: `rgba(${selectedColor1}, ${selectedColor2}, ${selectedColor3}, ${opacity})`}}>
                </div>

                <input  
                type="range"
                id="colorRange"
                className='w-[80%] bg-gradient-to-r from-green-500 to-yellow-400 appearance-none h-[.8rem] rounded-md'
                min="0"
                max="100"
                step="1"
                value={opacity * 100}
                onChange={(e) => {setOpacity(e.target.value/100)}}/>

            </div>
        </>
    )
}

export default Opacity
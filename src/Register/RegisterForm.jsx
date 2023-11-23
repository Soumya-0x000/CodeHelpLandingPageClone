import { useEffect, useState } from 'react'
import bgImg from './Img/blinkingStars.gif'
import Name from './components/Name';
import Email from './components/Email';
import PswdComponent from './components/PswdComponent';
import Image from './components/Image';
import AgreementNcheckbox from './components/AgreementNcheckbox';
import Submit from './components/Submit';
import SetResetColor from './components/Color/SetResetColor';
import Opacity from './components/Color/Opacity';
import RGBcontroller from './components/Color/RGBcontroller';

const RegisterForm = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState("");

    const [pswd, setPswd] = useState("");
    const [showPswd, setShowPswd] = useState();

    const [retypePswd, setRetypePswd] = useState("");
    const [showRetypePswd, setShowRetypePswd] = useState();

    const [img, setImg] = useState(false);
    const [imgFileName, setImgFileName] = useState();
    const [imgDataURL, setImgDataURL] = useState();

    const [checkboxValue, setCheckboxValue] = useState(false);

    const pswdMatch = pswd === retypePswd

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const validateForm = () => {
        if (name.trim() !== '' && email.trim() !== '' && pswd.trim() !== '' && retypePswd.trim() !== '' ) {
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(true)
        }
    };

    useEffect(() => {
        validateForm();
    }, [name, email, pswd, retypePswd])

    const handleInput = (a) => {
        const {name, value} = a.target;

        if (name === "nameInput"){
            setName(value);
        } else if (name === "emailInput") {
            setEmail(value);
        } else if (name === "pswdInput"){
            setPswd(value);
        } else if (name === "retypePswdInput"){
            setRetypePswd(value);
        }
    }

    const handleImageUpload = (event) => {
        event.preventDefault();
        const imgName = event.target.files[0];

        if (imgName.name) {
        setImg(true);
        setImgFileName(imgName.name);

        const reader = new FileReader();
        reader.onload = (x) => {
            setImgDataURL(x.target.result);
        };

        reader.readAsDataURL(imgName);
        } else {
        setImg(false);
        setImgFileName('');
        setImgDataURL('');
        }
    }

    const [showColorOptions, setShowColorOptions] = useState(false);

    const [formColor, setFormColor] = useState(false);
    const [selectedColor1, setselectedColor1] = useState('');
    const [selectedColor2, setselectedColor2] = useState('');
    const [selectedColor3, setselectedColor3] = useState('');

    const [opacity, setOpacity] = useState('');

    const handleColorChange = (event) => {
        const {name, value} = event.target;

        if (name == 'ColorInput_1st') {
            setselectedColor1(value);
        } else if (name == 'ColorInput_2nd') {
            setselectedColor2(value)
        } else if (name == 'ColorInput_3rd') {
            setselectedColor3(value);
        }
    };

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${bgImg})`}}>
                <div className="w-[25rem] md:w-[28rem] lg:w-[35rem] p-2 rounded-lg transition-all border border-dashed my-8 h-auto max-h-[45rem] overflow-y-scroll scrollbar-none">

                    <form className='flex flex-col'>

                        {/* Main Form */}
                        <div className='px-2 py-1 rounded-lg ' 
                        style={{backgroundColor : `rgba(${selectedColor1}, ${selectedColor2}, ${selectedColor3}, ${opacity})`}}>
                            <Name name={name} handleInput={handleInput}/>

                            <Email name={name} handleInput={handleInput}/>

                            <PswdComponent content={"Your password"} showPswdIcon={setShowPswd} pswdIcon={showPswd} pswd={pswd} handleInput={handleInput} name={"pswdInput"} placeholder={'Password'}/>

                            <PswdComponent pswdMatch={pswdMatch} content={"Repeat password"} showPswdIcon={setShowRetypePswd} pswdIcon={showRetypePswd} pswd={retypePswd} handleInput={handleInput} name={"retypePswdInput"} placeholder={'Retype Password'}/>
                            
                            <Image handleImageUpload={handleImageUpload} img={img} imgFileName={imgFileName} setImgFileName={setImgFileName} setImgDataURL={setImgDataURL} imgDataURL={imgDataURL}/>

                            <AgreementNcheckbox setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue}/>

                            <Submit pswdMatch={pswdMatch} checkboxValue={checkboxValue} isSubmitDisabled={isSubmitDisabled} setShowColorOptions={setShowColorOptions} showColorOptions={showColorOptions} name={name} email={email} pswd={pswd} imgDataURL={imgDataURL}/>
                        </div>

                        {/* Form Color set button */}
                        <SetResetColor showColorOptions={showColorOptions} setFormColor={setFormColor} formColor={formColor} setselectedColor1={setselectedColor1} setselectedColor2={setselectedColor2} setselectedColor3={setselectedColor3} setOpacity={setOpacity} />

                        {/* Color changing section*/}
                        <div className={`mt-2 w-full bg-slate-800  rounded-lg flex flex-col items-center gap-y-2 ${formColor && showColorOptions ? '' : 'hidden'} overflow-hidden`}>

                            <label className='w-[40%] text-md font-medium text-gray-900 dark:text-white flex justify-center rounded-b-lg bg-blue-900 border-x-2 border-b-2 border-blue-500 py-1'>Select color</label>

                            <RGBcontroller handleColorChange={handleColorChange} selectedColor1={selectedColor1} selectedColor2={selectedColor2} selectedColor3={selectedColor3} />
                        
                            <Opacity selectedColor1={selectedColor1} selectedColor2={selectedColor2} selectedColor3={selectedColor3} opacity={opacity} setOpacity={setOpacity}/>

                        </div>

                    </form>

                </div>
            </div>
        </>
        
    )
}

export default RegisterForm;
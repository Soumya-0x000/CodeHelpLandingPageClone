import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
    return (
        <TypeAnimation
            sequence={[ 'Soumya', 1000, 'SSD', 1000, 'Somu', 1000 ]}
            speed={30}
            repeat={Infinity}/>
    );
};

export default TypeAnimate;
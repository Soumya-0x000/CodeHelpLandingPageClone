import { useRef } from 'react';
import { faArrowLeftLong, faArrowRightLong, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gif1 from '../../Images/Banner7/gif1.gif'
import gif2 from '../../Images/Banner7/gif2.gif'
import gif3 from '../../Images/Banner7/gif3.gif'
import gif4 from '../../Images/Banner7/gif4.gif'
import gif5 from '../../Images/Banner7/gif5.gif'
import gif6 from '../../Images/Banner7/gif6.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

const slideDetails = [
    {
        description: 'It is completely beginner friendly, no need of hesitation if you have no knowledge of code. From nothing to a confident coder, it is all you need. I highly recommend this to every fresher and also to someone who has even the smallest doubt.',
        name: 'Soumya Sankar',
        avatar: gif1,
        title: 'DSA course',
    },
    
    {
        description: 'During entire session it is mandatory that we should Practice more questions rather than theory so that work is superbly done by Babbar bhaiya',
        name: 'Soumya Sankar',
        avatar: gif2,
        title: 'DSA Batch',
    },
    
    {
        description: 'It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course',
        name: 'Soumya Sankar',
        avatar: gif3,
        title: 'Interview Preparation Batch',
    },
    
    {
        description: 'This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend.',
        name: 'Soumya Sankar',
        avatar: gif4,
        title: 'Web Dev Batch',
    },

    {
        description: 'It is completely beginner friendly, no need of hesitation if you have no knowledge of code. From nothing to a confident coder, it is all you need. I highly recommend this to every fresher and also to someone who has even the smallest doubt.',
        name: 'Soumya Sankar',
        avatar: gif5,
        title: 'Recursion and Backtracking',
    },

    {
        description: 'I completed an exceptional AI course and extend heartfelt gratitude to my dedicated teacher. Their guidance and expertise enriched my understanding, equipping me with valuable skills. I am excited to apply this knowledge and contribute to the world of artificial intelligence.',
        name: 'Soumya Sankar',
        avatar: gif6,
        title: 'AI course',
    },
]

const navigatingIcon = [
    {icon: faArrowLeftLong},
    {icon: faArrowRightLong},
]

const Banner_7 = () => {

    const slideRef = useRef(null);
    
    const slidePrev = () => {
        slideRef.current.swiper.slidePrev();
    };
    
    const slideNext = () => {
        slideRef.current.swiper.slideNext();
    };

    return (
        <>
            <div className='bg-gray-800 pb-[6rem]'>

                <div className='flex flex-col gap-y-6 items-center justify-center'>

                    <div className='mt-14 w-[88%] md:w-[70%] flex items-center justify-between'>

                        <div className='flex flex-col font-semibold'>
                            <p className='text-blue-300 text-[.8rem] sm:text-[.9rem] lg:text-[1.25rem] font-lato'>WHAT STUDENTS SAYS</p>
                            <p className='text-white text-[1.4rem] sm:text-[1.7rem] lg:text-[2.4rem] font-lato md:tracking-wide'>Recent Reviews</p>
                        </div>

                        <div className='flex gap-x-5 items-center justify-center'>
                            {navigatingIcon.map((item, i) => (
                                <button 
                                key={i}
                                className={`bg-${ i === 0 ? 'gray-700' : 'blue-700'} text-[1.1rem] rounded-full text-white px-3 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-3 flex items-center overflow-hidden active:scale-90 transition-all`}
                                onClick={ i === 0 ? slidePrev : slideNext}>
                                    <FontAwesomeIcon icon={item.icon}/>
                                </button>
                            ))}
                        </div>

                    </div>

                    <div className='w-[88%] md:w-[70%] h-[.1rem] rounded-full bg-white'></div>

                </div>

                {/* Testimonial */}
                <div className='flex items-center justify-center'>
                    <div className='mt-[3rem] sm:mt-[6rem] w-[87%] sm:w-[74%] md:w-[90%] xl:w-[83%] flex items-center justify-center rounded-lg p-3'>
                        <Swiper
                        dir='rtl'
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        direction='horizontal'
                        pagination={{ clickable: true, type: 'progressbar' }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1536: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        ref={slideRef}
                        className="mySwiper rounded-lg">
                            {slideDetails.map((slide, i) => (
                                <SwiperSlide dir='ltr' key={i}>
                                    <div className='h-[23rem] sm:h-[20rem] bg-slate-900 overflow-hidden rounded-lg flex flex-col justify-between px-4 md:px-7 pt-5 pb-8 shadow-2xl'>
                                    
                                        <p className='font-semibold text-neutral-400 text-justify text-[.85rem] sm:text-[1rem] md:text-[.9rem] xl:text-[1rem]'>
                                            {slide.description}
                                        </p>

                                        <div className='flex flex-col sm:flex-row gap-y-2 justify-between items-center'>

                                            <div className='flex flex-col sm:flex-row items-center justify-center gap-x-2 xl:gap-x-5'>

                                                <div className='w-[4rem] sm:w-[4rem] h-[3rem] sm:h-[3rem] md:h-[4rem] rounded-full bg-center bg-cover overflow-hidden'>
                                                    <img src={slide.avatar} className='w-full h-full object-cover' />
                                                </div>

                                                <div className='font-semibold flex flex-col items-center sm:items-start justify-center gap-y-1'>
                                                    <p className='text-gray-300 sm:text-[.9rem] xl:text-[1rem]'>{slide.name}</p>
                                                    <p className='text-gray-400 text-[.9rem] xl:text-[.85rem]'>{slide.title}</p>
                                                </div>
                                            </div>

                                            <div className='text-orange-400 text-[.7rem] sm:text-[1rem] md:text-[.8rem] lg:text-[1rem] xl:text-[1rem]'>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>

                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner_7
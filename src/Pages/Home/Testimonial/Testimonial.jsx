import './Testimonial.css'
import { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Testimonial = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className='bg-color lg:pt-[110px] pt-[34px] lg:pb-[122px] pb-[32px]'>
            <div className='flex flex-col lg:flex-row lg:gap-20 gap-6'>
                <div>
                    <h2 className='poppins-bold text-gradient leading-[130%] lg:text-[67px] text-[38px] lg:w-[480px] text-center lg:pl-[144px] lg:pt-7 pt-4'>Become a Part of Our Success
                        Stories</h2>
                    
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={22}
                    navigation={{
                        clickable: true,
                        nextEl: '.testimonial--btn-next',
                        prevEl: '.testimonial--btn-prev'
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[FreeMode, Navigation]}
                    className='mySwiper'
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <SingleTestimonial item={item}></SingleTestimonial>
                        </SwiperSlide>
                    ))}
                </Swiper>
                 
            </div>
            <div className='lg:pl-[144px] pl-40 lg:pt-0 pt-[27px]'>
                <button className='testimonial--btn-prev rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white mr-6'><FaArrowLeft></FaArrowLeft></button>
                <button className='testimonial--btn-next rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white'><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Testimonial;
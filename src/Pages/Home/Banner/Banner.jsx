import './Banner.css'
import { FaArrowDown } from "react-icons/fa6";

import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        
        window.onload = () => {

            const text = document.querySelector(".text p");
    
            text.innerHTML = text.innerText
                .split("")
                .map(
                    (char, i) => `<span style="transform:rotate(${i * 15.8}deg)">${char}</span>`
                )
                .join("");
        };

    }, []);

    return (
        <div className='relative'>
            <div className='section'>
                <div className='section-bg'>
                    <div className='section-bg--video'>
                        <video src="./assets/education.mp4" type="video/mp4" autoPlay muted loop></video>
                    </div>
                </div>
                <div className='section-content pt-[31px] lg:pt-[93px] py-6 lg:pl-[144px] px-6 pb-[206px]'>
                    <div className='text-center lg:text-left'>
                        <h2 className='text-[#00399f] text-center tracking-tight lg:text-left text-[45px] lg:text-[90px] font-bold lg:leading-[110px] leading-[130%]'>Start Your Path to<br></br> Global Education</h2>
                        <p className='font-normal text-left text-[14px] leading-[160%] lg:text-[21px] text-white pl-6 lg:pl-0 pt-[14px] lg:pb-[61px] pb-[19px]'>We take pride in our ability to help students achieve their<br></br> academic goals and succeed in life.</p>
                        <div className="buttons-group-container">
                            <div className="buttons-group">

                                <button>Enquire</button>
                                <button>Apply</button>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='hidden lg:block'>
                <div className="circle">
                    <div className="icon"><FaArrowDown></FaArrowDown></div>
                    <div className="text-one">
                        <p className='poppins-semibold'>DREAM BIG STUDY ABROAD.</p>
                    </div>
                </div>
            </div>
            <script src='Banner-old.js'></script>
        </div>
    );
};

export default Banner;
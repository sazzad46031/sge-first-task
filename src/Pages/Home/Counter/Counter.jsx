import CountUp from "react-countup";
import './Counter.css'
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Counter = () => {
    const [counterState, setCounterState] = useState(false)
    return (
        <div className="bg-[#0522E6] max-w-screen-xl mx-auto rounded-[64px] mt-[143px] lg:relative lg:z-20">
            <div className="flex flex-col lg:block">
                <div className="lg:absolute lg:-top-24 lg:-z-10 order-2">
                    <img src="./assets/cuate1.png" alt="cuate" />
                </div>
                <h2 className="poppins-bold text-[67px] py-[101px] text-right pr-[66px] order-1">Our Core Strength</h2>
            </div>
            <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}>
                <div className="flex justify-around flex-wrap gap-10 pb-[46px]">
                    <div className="text-center child-one">
                        <img className="mx-auto" src="./assets/vector1.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                            { counterState && <CountUp start={0} end={16} duration={5}></CountUp>}
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Global Offices</p>
                    </div>
                    <div className="text-center child-two">
                        <img className="mx-auto" src="./assets/vector2.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={100} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">UK Education Fair</p>
                    </div>
                    <div className="text-center child-three">
                        <img className="mx-auto" src="./assets/vector3.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={50000} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Courses Offered</p>
                    </div>
                    <div className="text-center child-four">
                        <img className="mx-auto" src="./assets/vector4.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={350} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Global Counsellors</p>
                    </div>
                    <div className="text-center child-five">
                        <img className="mx-auto" src="./assets/vector5.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={150} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Recruiting University</p>
                    </div>
                    <div className="text-center child-six">
                        <img className="mx-auto" src="./assets/vector6.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={5000} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Student Served</p>
                    </div>
                </div>
            </ScrollTrigger>

        </div>
    );
};

export default Counter;
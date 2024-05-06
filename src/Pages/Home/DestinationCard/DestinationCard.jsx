import './DestinationCard.css'
import { MdKeyboardArrowRight } from "react-icons/md";
const DestinationCard = () => {
    return (
        <div className='bg-color mt-20 pt-[131px] lg:pb-[126px] pb-[40px] relative'>
            <div className='text-center'>
                <h2 className='lg:poppins-bold poppins-semibold lg:text-[50px] text-[28px] text-gradient'>Choose Your Destination</h2>
                <p className='poppins-bold lg:text-[67px] text-[38px] text-white pb-[100px]'>We’ll Plan the Rest</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-x-[170px] gap-x-4 lg:gap-y-[66px] gap-y-8 max-w-[1154px] mx-auto'>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>UK</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/uk.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>USA</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/usa.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Canada</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/canada.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Australia</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/australia.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Germany</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/germany.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[120px] pt-[69px] poppins-bold text-center lg:text-[38px] text-[20px]'>New<br></br> Zealand</p>
                        <button className='lg:pl-28 pl-[62px] lg:pt-[27px] pt-[20px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/newzealand.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className='text-center pt-[102px]'>
                <button className='text-[#1F1F1F] bg-white hover:bg-[#004ACB] rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]'>Explore More</button>
            </div>
            <div className='absolute -top-28 right-[298px] lg:block hidden'>
                <img src="./assets/plane.png" alt="plane" />
            </div>
            <div className='absolute top-[100px] left-96 lg:block hidden'>
                <img src="./assets/planepath.png" alt="path" />
            </div>
        </div>
    );
};

export default DestinationCard;
import './Tab.css'

const Tab = () => {
    return (
        <div className='pt-[129px] max-w-screen-xl mx-auto'>
            <div className='text-center mb-[57px]'>
                <label className='inter-bold text-[20px] rounded-[32px] py-[10px] px-[120px] bg-white text-[#004ACB] mr-[22px]' htmlFor="students">For Students</label>
                <label className='inter-bold text-[20px] rounded-[32px] py-[10px] px-[120px] bg-white text-[#004ACB]' htmlFor="partners">For Partners</label>
            </div>

            <input className="div-inputs" id="students" type="radio" name="tab" defaultChecked></input>
            <div className="color_div text-center lg:text-left">
                <div className='flex flex-col lg:flex-row justify-between gap-[28px]'>
                    <div className='order-2 lg:order-1'>
                        <p className='poppins-semibold text-[28px] text-[#3560FF] mb-[14px]'>For Students</p>
                        <h2 className='poppins-semibold text-[20px] lg:text-[38px] text-[#081831] leading-[130%] text-left lg:px-0 px-6'>Get complete guidance in<br></br>
                            your study abroad journey-<br></br> from start to finish
                        </h2>
                        <p className='mulish-regular text-[12px] lg:text-[16px] text-[1F1F1F] pt-[14px] text-left lg:px-0 px-6'>Shabuj Global Education helps you with Course & University<br></br> Selection, Interview and Test Preparation, Visa Application and<br></br> Admission and more- so you can join your dream university<br></br> with ease!</p>
                        <button className='bg-[#2563EB] text-white rounded-[32px] px-[85px] py-2 mt-6 mx-auto'>Start Now</button>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img className='w-[148px] lg:w-[447px] mx-auto' src="./students.png" alt="students" />
                    </div>
                </div>
            </div>

            <input className="div-inputs" id="partners" type="radio" name="tab"></input>
            <div className="color_div text-center lg:text-left">
                <div className='flex flex-col lg:flex-row justify-between gap-[28px]'>
                    <div className='order-2 lg:order-1'>
                        <p className='poppins-semibold text-[28px] text-[#3560FF] mb-[14px]'>For Partners</p>
                        <h2 className='poppins-semibold text-[20px] lg:text-[38px] text-[#081831] leading-[130%] text-left lg:px-0 px-6'>Wow your students with<br></br> Shabuj Global Education's<br></br> trusted admission process</h2>
                        <p className='mulish-regular text-[12px] lg:text-[16px] text-[1F1F1F] pt-[14px] text-left lg:px-0 px-6'>No more lack of trust and transparency- we treat your<br></br> business as our own. With SGE's 1500+ strong university<br></br> network, experienced counsellors, and dedicated customer<br></br> support, you can just focus on increasing your student reach-<br></br> and leave the processing part to us!</p>
                        <button className='bg-[#2563EB] text-white rounded-[32px] px-[85px] py-2 mt-6'>Start Now</button>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img className='w-[148px] lg:w-[447px] mx-auto' src="./partner.png" alt="partners" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;
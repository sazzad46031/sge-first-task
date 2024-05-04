import './Connection.css'

const Connection = () => {
    return (
        <div className='max-w-screen-xl lg:mx-auto text-center bg-one relative my-[175px] mx-6'>
            <h2 className='outfit-bold lg:text-5xl text-[38px] text-white pt-[64px] lg:pb-[18px] pb-[9px]'>Ready to take the leap?</h2>
            <p className='inter-regular lg:text-2xl text-[14px] text-white lg:pb-[33px] pb-[21px]'>Connect with our finest counsellors and biggest<br></br>
                study abroad community</p>
            <button className='text-[#1F1F1F] bg-white rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]'>Talk to a Counsellor</button>
            <div className='absolute -left-20 -top-40 hidden lg:block'>
                <img src="./image1.png" alt="" />
            </div>    
        </div>
    );
};

export default Connection;
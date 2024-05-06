

const SingleTestimonial = ({item}) => {
    const {image, name, comment} = item
    return (
        <div className="bg-[#D9D9D9] bg-rounded bg-gradient relative text-center">
            <img className="mx-auto max-w-[80%] pt-44 mb-[27px]" src="./assets/author.png" alt=""/>
            <p className="poppins-semibold lg:text-[28px] text-[11px] text-center mb-[19px]">{name}</p>
            <p className="mulish-regular lg:text-base text-[6px] mx-auto pb-[36px]">{comment}</p>
            <div className="absolute top-20 left-20">
                <img src="./assets/quote.png" alt="" />
            </div>
        </div>
    );
};

export default SingleTestimonial;
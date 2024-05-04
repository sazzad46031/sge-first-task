import './Contact.css'

const Contact = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="text">
                It’s Time to Start Your Journey With Us
                </div>
                <p className='text-center text-[16px]'>Book Your FREE Consultation with Certified Counsellors</p>
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">Mobile Number</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">Preferred Study Destination</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required></input>
                                <div className="underline"></div>
                                <label htmlFor="">Preferred Study Year</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Write your message</label>
                            <br />
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="Book Free Counselling"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>    
            </div>
        </div>    
            );
};

            export default Contact;
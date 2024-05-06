import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import './Navbar.css'
const Navbar = () => {
    const [click, setclick] = useState(false)
    const handleclick = () => setclick(!click)
    const content = <>
        <div className="lg:hidden z-50 block absolute top-16 w-full left-0 right-0 bg-slate-300 backdrop-blur-lg bg-opacity-30">
            <ul className='text-center text-xl p-8'>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Study Destination</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Services</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">Test Prep</li>
                </Link>
                <Link>
                    <li className="my-4 py-4 border-b border-sky-200 text-sky-400 hover:text-sky-950 transition-all duration-150 hover:rounded hover:bg-sky-200">About Us</li>
                </Link>
                
            </ul>
        </div>
    </>
    return (
        <div className="max-w-[1154px] mx-auto">
        <nav className='z-50'>
            <div className='h-10vh flex justify-between lg:py-5 lg:px-0 px-5 py-5'>
                <div className='flex items-center'>
                    <img src="./assets/logo.png" alt="logo" />
                </div>
                <div className="lg:flex justify-center items-center font-normal hidden">
                    <ul className='flex gap-8 items-center mr-16 text-[15px]'>
                        <Link className="flex items-center gap-2">
                        <div className="group text-[15px]">
                                <div className="flex items-center gap-2">
                                    <button className="inter-semibold text-[#041527] cursor-pointer">Study Destination</button>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[650px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link>
                        <div className="group">
                                <div className="flex items-center gap-2">
                                    <button className="inter-semibold text-[#041527] cursor-pointer">Services</button>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[750px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link>
                        <div className="group">
                                <div className="flex items-center gap-2">
                                    <button className="inter-semibold text-[#041527] cursor-pointer">Test Prep</button>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[850px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div className="group">
                                <div className="flex items-center gap-2">
                                    <button className="inter-semibold text-[#041527] cursor-pointer">About Us</button>
                                    <span><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                                <div className="hidden group-hover:flex flex-col absolute top-20 left-[950px] p-10 bg-sky-100 z-20 text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test Taker</h3>
                                            <a href="#">Find your test</a>
                                            <a href="#">Test taker support</a>
                                            <a href="#">Test taker resource</a>
                                            <a href="#">Test prep store</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Test sponsors</h3>
                                            <a href="#">Overview</a>
                                            <a href="#">Test delivery</a>
                                            <a href="#">Test development</a>
                                            <a href="#">Test security</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">About</h3>
                                            <a href="#">Company</a>
                                            <a href="#">Customer stories</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Leadership team</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="mb-4 text-2xl">Knowledge hub</h3>
                                            <a href="#">Blog</a>
                                            <a href="#">Resource</a>
                                            <a href="#">News</a>
                                            <a href="#">Events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                        <button className="text-white px-[25px] py-[10px] bg-[#93C5FD] hover:bg-[#004ACB] rounded-lg">Login<FaArrowRight className="hidden hover:inline-flex"></FaArrowRight></button>
                    </ul>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition-none" onClick={handleclick}>
                    {click ? <FaTimes className= 'text-black'></FaTimes> : <CiMenuFries className='text-black'></CiMenuFries>}
                </button> 
            </div>
        </nav>
    </div>
    );
};

export default Navbar;
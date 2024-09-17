import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, resume } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`
                ${styles.paddingX} w-full flex
                items-center fixed top-0 z-20 
                bg-primary
                border border-secondary
            `}
        >
            <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-white text-[20px] py-4 font-bold cursor-pointer flex'>
                        Gino &nbsp;
                        <span> / Junior Developer</span>
                    </p>  
                </Link>
                <ul className="list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"} 
                            hover:text-black hover:bg-secondary py-1 px-3 text-[20px] font-medium cursor-pointer`}
                        style={{ height: '40px'}}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <img 
                        src={toggle ?  close : menu} alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer" 
                        onClick={()=> setToggle(!toggle)}
                    />
                    <div className={`${
                        !toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] z-10 border`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-5 	">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"} 
                                        font-medium cursor-pointer text-[22px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

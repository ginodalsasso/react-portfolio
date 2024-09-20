import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { LanguageContext } from "./Language"; 

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    // Accès au contexte de langue
    const { language, constants, toggleLanguage } = useContext(LanguageContext);


    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center fixed top-0 bg-primary border h-[70px] z-20`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[18px] xs:text-[20px] font-bold cursor-pointer flex">
                        Gino &nbsp;
                        <span> / {language === "en" ? "Junior Developer" : "Développeur Junior"}</span>
                    </p>
                </Link>
                </div>
                

                <ul className="list-none hidden lg:flex flex-row items-center gap-2">
                    {constants.navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-white" : "text-secondary"
                            } hover:text-black hover:bg-secondary text-[20px] font-medium cursor-pointer py-2 px-4 my-1 transition-all`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <li>
                        {/* Ajout du bouton de changement de langue */}
                        <button
                            onClick={toggleLanguage}
                            className="text-white border py-1 px-4 ml-8 text-[12px] font-bold hover:bg-secondary hover:text-black transition-all"
                            >
                            {language === "en" ? "EN" : "FR"}
                        </button>
                    </li>
                </ul>

                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-primary absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] z-10 border`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-5">
                            {constants.navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-medium cursor-pointer text-[22px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            {/* Ajout du bouton de changement de langue */}
                            <button
                                onClick={toggleLanguage}
                                className="text-white border mr-2 py-1 px-4 text-[12px]  font-bold hover:bg-secondary hover:text-black  transition-all"
                                >
                                {language === "en" ? "EN" : "FR"}
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

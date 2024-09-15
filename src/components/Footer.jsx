import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className={`
            ${styles.paddingX} w-full flex
            items-center justify-center	 bottom-0 z-20 
            bg-primary
            border border-secondary
        `}
        >
            <div className="flex flex-col items-center mb-2">
                <div className="flex gap-3">
                    <Link
                        to="/privacy-policy"
                        className="text-secondary underline mt-2"
                        >
                        Privacy Policy
                    </Link>
                    <Link
                        to="/legal-notice"
                        className="text-secondary underline mt-2"
                        >
                        Legal Notice
                    </Link>
                </div>
                <p>&copy; 2024 Gino's Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

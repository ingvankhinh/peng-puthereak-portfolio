import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import {
    switchToEnglish,
    switchToKhmer,
} from "../../features/language/actions";

const variants = {
    en: {
        left: "2%",
        transition: { duration: 0.3, ease: "anticipate" },
    },
    kh: {
        left: "49%",
        transition: { duration: 0.3, ease: "anticipate" },
    },
};

const LanguageSelector = ({ language, switchToEnglish, switchToKhmer }) => {
    return (
        <div className="flex p-1 border-dark-blue border-opacity-40 border-2 w-32 relative dark:border-champagne dark:border-opacity-40">
            <button
                onClick={switchToEnglish}
                className={`flex-1 text-center mr-1 py-1 ${
                    language === "en"
                        ? "text-champagne dark:text-dark-blue"
                        : "text-dark-blue  hover:bg-dark-blue hover:bg-opacity-20 dark:text-champagne dark:hover:bg-champagne dark:hover:bg-opacity-20"
                }`}
                style={{ zIndex: 21 }}
            >
                <i className="fas fa-flag-usa" />
            </button>
            <button
                onClick={switchToKhmer}
                className={`flex-1 text-center py-1 ${
                    language === "kh"
                        ? "text-champagne dark:text-dark-blue"
                        : "text-dark-blue  hover:bg-dark-blue hover:bg-opacity-20 dark:text-champagne dark:hover:bg-champagne dark:hover:bg-opacity-10"
                }`}
                style={{ zIndex: 21 }}
            >
                <i className="fab fa-canadian-maple-leaf" />
            </button>
            <motion.div
                animate={language}
                initial={language}
                variants={variants}
                className="absolute h-full top-0 left-0 p-1"
                style={{ zIndex: 20, width: "50%" }}
            >
                <div className="h-full bg-dark-blue w-full dark:bg-champagne dark:bg-opacity-80" />
            </motion.div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { language: state.language };
};

export default connect(mapStateToProps, { switchToEnglish, switchToKhmer })(
    LanguageSelector
);

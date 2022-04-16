import React from "react";
import { motion } from "framer-motion";

const variants = {
    initial: { opacity: 0 },
    open: () => {
        let base = 0;
        if (typeof window !== "undefined") {
            const { outerWidth, outerHeight } = window;
            base = outerWidth > outerHeight ? outerWidth : outerHeight;
        }

        return {
            opacity: 1,
            scale: (base + 500) / (64 / 2.2),
            transition: { duration: 1.4, ease: "anticipate" },
        };
    },

    close: {
        opacity: 0,
        scale: 1,
        transition: { duration: 1.4, ease: "anticipate" },
    },
};

const NavigationCircle = ({ active }) => {
    return (
        <motion.div
            style={{ zIndex: "-1" }}
            className="fixed bg-champagne rounded-full w-16 h-16 dark:bg-dark-blue-light"
            variants={variants}
            animate={active ? "open" : "close"}
            initial="initial"
        />
    );
};

export default NavigationCircle;

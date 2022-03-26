import React from "react";
import { motion, useCycle } from "framer-motion";

import Navigation from "../components/Navigation";
import QuickSetting from "../components/QuickSetting";

const Master = ({ children }) => {
    const [settingVisibility, toggleSettingVisibility] = useCycle(
        "hidden",
        "visible"
    );

    return (
        <div className="min-h-screen bg-champagne bg-opacity-20 flex relative dark:bg-dark-blue dark:bg-opacity-100 md:flex-col">
            <div
                className="h-full sticky top-0 left-0 md:w-full "
                style={{ zIndex: "500" }}
            >
                <Navigation />
                <div
                    className="absolute top-0 left-0 h-full w-full bg-champagne bg-opacity-20 dark:bg-dark-blue"
                    style={{ zIndex: 9 }}
                />
                <div
                    className="absolute top-0 left-0 h-full w-full bg-white"
                    style={{ zIndex: 8 }}
                />
            </div>
            <div className="flex flex-grow relative">
                <div
                    className="fixed right-3 top-16 hidden md:block"
                    style={{ zIndex: "410" }}
                >
                    <motion.button
                        onClick={toggleSettingVisibility}
                        className="border-2 border-dark-blue border-opacity-30 bg-champagne text-dark-blue hover:bg-champagne hover:bg-opacity-90 dark:border-champagne dark:border-opacity-30 dark:bg-dark-blue dark:text-champagne dark:hover:bg-dark-blue dark:hover:bg-opacity-90"
                    >
                        <motion.i
                            variants={{
                                hidden: {
                                    rotate: 0,
                                    transition: { duration: 0.5 },
                                },
                                visible: {
                                    rotate: 360,
                                    transition: { duration: 0.5 },
                                },
                            }}
                            initial="hidden"
                            animate={settingVisibility}
                            className="py-1 px-2 fas fa-cog text-2xl"
                        />
                    </motion.button>
                </div>
                <div
                    className={`fixed right-10 top-5 md:top-20 md:left-10 sm:left-7 ${
                        settingVisibility === "hidden" ? "md:hidden" : ""
                    }`}
                    style={{ zIndex: "409" }}
                >
                    <QuickSetting />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
};

export default Master;

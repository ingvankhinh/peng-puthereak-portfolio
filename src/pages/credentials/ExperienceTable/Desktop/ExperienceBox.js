import React from "react";
import { motion } from "framer-motion";

const ExperienceBox = (props) => {
    const { experience, onClick: setCurrentSelectedExperience, index } = props;
    const startDate = experience.startDate.label;
    const endDate = experience.endDate.label;

    return (
        <motion.div
            onClick={() => setCurrentSelectedExperience(index)}
            className="border-1	leading-none bg-white text-dark-blue text-opacity-50 z-10 hover:bg-opacity-35 hover:text-opacity-100 absolute hover:w-max px-4 py-2 transition ease-in duration-280 cursor-pointer flex flex-col justify-center"
            whileHover={{
                width: "max-content",
                transition: { duration: 0.3 },
                zIndex: 20,
            }}
            whileTap={{ scale: 0.98 }}
            style={props.style}
        >
            <div className="top-0 left-0 w-full h-full bg-dark-blue bg-opacity-50 absolute"></div>
            <span
                style={{ maxWidth: "11ch" }}
                className="font-semibold block whitespace-nowrap overflow-ellipsis overflow-hidden w-full"
            >
                {experience.title}
            </span>
            <span className="text-xs font-light whitespace-nowrap overflow-ellipsis overflow-hidden">
                {startDate} - {endDate}
            </span>
        </motion.div>
    );
};

export default ExperienceBox;

import React from "react";

const ExperienceBox = ({
    active,
    className,
    experience,
    onClick: setCurrentSelectedExperience,
    index,
}) => {
    let title, startDate, endDate;

    if (active) {
        className +=
            " border-1 border-champagne text-champagne text-opacity-100 bg-opacity-100";
    }

    if (experience) {
        title = experience.title;
        startDate = experience.startDate.label;
        endDate = experience.endDate.label;
    }

    return (
        <div
            onClick={() => setCurrentSelectedExperience(index)}
            className={`${className} cursor-pointer w-full h-max relative bg-dark-blue px-3 py-2 leading-none`}
        >
            <span className="font-semibold block whitespace-nowrap overflow-ellipsis overflow-hidden w-full mb-1">
                {title}
            </span>
            <span className="text-xs font-light whitespace-nowrap overflow-ellipsis overflow-hidden">
                {startDate} - {endDate}
            </span>
        </div>
    );
};

export default ExperienceBox;

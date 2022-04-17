import React from "react";
import ExperienceBox from "./ExperienceBox";

const ExperienceTableMobile = ({
    content,
    index: currentlySelectedIndex,
    onChange: setCurrentSelectedExperience,
}) => {
    const renderExperienceBox = () => {
        return (
            content &&
            content.map((experience, index) => {
                const bgOpacity = [30, 20];

                return (
                    <ExperienceBox
                        className={`bg-opacity-${bgOpacity[index % 2]}`}
                        key={index}
                        index={index}
                        active={currentlySelectedIndex === index}
                        onClick={setCurrentSelectedExperience}
                        experience={experience}
                    />
                );
            })
        );
    };

    return (
        <div
            className="relative w-full flex flex-col"
            style={{ height: "calc((100vh - 220px) * .4)" }}
        >
            <div className="w-full h-full bg-white absolute top-0"></div>
            <div className="w-full relative overflow-y-scroll no-scrollbar text-dark-blue text-opacity-70">
                {renderExperienceBox()}
            </div>
        </div>
    );
};

export default ExperienceTableMobile;

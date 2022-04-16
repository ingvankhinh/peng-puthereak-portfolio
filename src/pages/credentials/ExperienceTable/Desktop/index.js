import React, { useState, useEffect, useRef } from "react";
import ExperienceBox from "./ExperienceBox";

const ExperienceTableDesktop = ({
    onChange: setCurrentSelectedExperience,
    content,
}) => {
    const timelineRef = useRef();
    // Mouse position over the Timeline
    const [mousePostion, setMousePosition] = useState({
        lastClick: { x: 0, y: 0 },
        current: { x: 0, y: 0 },
    });

    const [timelineBeginYear, setTimelineBeginYear] = useState(null);
    const [timelineEndYear, setTimelineEndYear] = useState(null);

    // If an experience span over 4 month => Ebox-width = 4 * eBoxOneMonthWidth;
    const [eBoxOneMonthWidth, setEBoxOneMonthWidth] = useState(null);

    useEffect(() => {
        let timelineBeginYear = 9999,
            timelineEndYear = 0;

        content.forEach((experience) => {
            const startDate = experience.startDate.date;
            const endDate = experience.endDate.date;
            const startYear = parseInt(startDate.split("/")[1]);
            const endYear = parseInt(endDate.split("/")[1]);

            if (startYear < timelineBeginYear) {
                timelineBeginYear = startYear;
            }

            if (endYear > timelineEndYear) {
                timelineEndYear = endYear;
            }

            return;
        });

        setTimelineBeginYear(timelineBeginYear);
        setTimelineEndYear(timelineEndYear);
    }, []);

    useEffect(() => {
        if (!timelineBeginYear || !timelineEndYear || !timelineRef) {
            return;
        }

        const calculateOneMonthWidth = () => {
            const totalMonths = (timelineEndYear - timelineBeginYear + 1) * 12;
            const oneMonthWidth = timelineRef.current.clientWidth / totalMonths;

            setEBoxOneMonthWidth(oneMonthWidth);
        };

        calculateOneMonthWidth();

        if (typeof window !== "undefined") {
            window.addEventListener("resize", calculateOneMonthWidth);
        }
    }, [timelineBeginYear, timelineEndYear, timelineRef]);

    const getMousePosition = (page, offset) => {
        const mouseXPosition = page.pageX - offset.x;
        const mouseYPosition = page.pageY - offset.y;

        return { x: mouseXPosition, y: mouseYPosition };
    };

    const renderExperienceBox = () => {
        if (!timelineBeginYear || !timelineEndYear || !timelineRef) {
            return;
        }
        let boxLevel = 0;
        const experienceBoxHeight = timelineRef.current.offsetHeight / 5;

        return content.map((experience, index) => {
            const startDate = experience.startDate.date;
            const endDate = experience.endDate.date;

            const [startMonth, startYear] = startDate
                .split("/")
                .map((s) => parseInt(s));

            const [endMonth, endYear] = endDate
                .split("/")
                .map((s) => parseInt(s));

            const monthSpan =
                (endYear - startYear) * 12 + (endMonth - startMonth);

            const monthStartPosition =
                (startYear - timelineBeginYear) * 12 + startMonth;

            boxLevel < 3 ? boxLevel++ : (boxLevel = 1);

            return (
                <ExperienceBox
                    key={index}
                    index={index}
                    onClick={setCurrentSelectedExperience}
                    style={{
                        height: experienceBoxHeight,
                        maxHeight: "max-content",
                        width: eBoxOneMonthWidth * monthSpan,
                        minWidth: eBoxOneMonthWidth * monthSpan,
                        bottom: boxLevel * experienceBoxHeight,
                        left: eBoxOneMonthWidth * monthStartPosition,
                    }}
                    experience={experience}
                />
            );
        });
    };

    const renderTimelineYears = () => {
        return Array(timelineEndYear - timelineBeginYear + 1)
            .fill()
            .map((e, i) => {
                const year = timelineBeginYear + i;

                return (
                    <span
                        className="flex-grow text-center"
                        value={year}
                        key={year}
                    >
                        {year}
                    </span>
                );
            });
    };

    return (
        <div className="relative w-full h-2/5">
            {/* -- White Background -- */}
            <div className="w-full h-full bg-white absolute"></div>
            {/* White Background */}
            {/* Timeline */}
            <div
                className="w-full bg-dark-blue bg-opacity-50 absolute"
                style={{ height: "15%" }}
            >
                <div className="h-full flex items-center font-semibold text-dark-blue text-opacity-60">
                    {/* We will emphasize the year that's currently associated to the experience */}
                    {renderTimelineYears()}
                </div>
            </div>
            <div
                ref={timelineRef}
                onClick={(e) => {
                    const page = e.nativeEvent;
                    const offset = timelineRef.current.getBoundingClientRect();

                    setMousePosition({
                        ...mousePostion,
                        lastClick: getMousePosition(page, offset),
                    });
                }}
                onMouseMove={(e) => {
                    const page = e.nativeEvent;
                    const offset = timelineRef.current.getBoundingClientRect();

                    setMousePosition({
                        ...mousePostion,
                        current: getMousePosition(page, offset),
                    });
                }}
                className="group w-full bg-dark-blue bg-opacity-40 absolute"
                style={{ top: "15%", height: "85%" }}
            >
                <div
                    className="opacity-0 group-hover:opacity-100 h-full w-0.5 bg-champagne bg-opacity-40 absolute top-0 transition ease-out duration-700"
                    style={{
                        transform: `translateX(${mousePostion.current.x}px)`,
                    }}
                ></div>
                {/* -- Highligter -- */}
                <div
                    className=" h-full w-0.5 bg-champagne bg-opacity-80 absolute top-0 transition ease-out duration-700"
                    style={{ left: mousePostion.lastClick.x }}
                ></div>
                {/* -- Toolbar -- */}
                {renderExperienceBox()}
            </div>
        </div>
    );
};

export default ExperienceTableDesktop;

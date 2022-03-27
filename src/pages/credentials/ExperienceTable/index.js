import React, { useState, useRef } from "react";
import ExperienceBox from "./ExperienceBox";

const ExperienceTable = () => {
    const experienceBoxRef = useRef();
    const [mousePostion, setmousePostion] = useState({
        lastClick: {
            x: 0,
            y: 0,
        },
        current: {
            x: 0,
            y: 0,
        },
    });

    const getMousePosition = (page, offset) => {
        const mouseXPosition = page.pageX - offset.x;
        const mouseYPosition = page.pageY - offset.y;

        return { x: mouseXPosition, y: mouseYPosition };
    };

    return (
        <div className="relative w-full h-2/5">
            {/* -- White Background -- */}
            <div className="w-full h-full bg-white absolute"></div>
            {/* White Background */}
            {/* -- Timeline -- */}
            <div
                className="w-full bg-dark-blue bg-opacity-50 absolute"
                style={{ height: "15%" }}
            >
                <div className="h-full flex justify-evenly items-center	font-semibold text-dark-blue text-opacity-60">
                    {/* We will emphasize the year that's currently associated to the experience */}
                    <span>2019</span>
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                </div>
            </div>
            {/* Timeline */}
            {/* Experiences */}
            <div
                ref={experienceBoxRef}
                onClick={(e) => {
                    const page = e.nativeEvent;
                    const offset =
                        experienceBoxRef.current.getBoundingClientRect();

                    setmousePostion({
                        ...mousePostion,
                        lastClick: getMousePosition(page, offset),
                    });
                }}
                onMouseMove={(e) => {
                    const page = e.nativeEvent;
                    const offset =
                        experienceBoxRef.current.getBoundingClientRect();

                    setmousePostion({
                        ...mousePostion,
                        current: getMousePosition(page, offset),
                    });
                }}
                className="group w-full bg-dark-blue bg-opacity-40 absolute"
                style={{ top: "15%", height: "85%" }}
            >
                {/* Toolbar */}
                {/* Highligter */}
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
                {/* Experience Box */}
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "180px",
                        left: "40px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "120px",
                        left: "240px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "80px",
                        left: "480px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "50px",
                        left: "710px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "20px",
                        left: "940px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "130px",
                        left: "1150px",
                    }}
                />
                <ExperienceBox
                    style={{
                        height: "max-content",
                        width: "220px",
                        top: "20px",
                        left: "1300px",
                    }}
                />
                {/* -- Experience Box -- */}
            </div>
            {/* -- Experiences -- */}
        </div>
    );
};

export default ExperienceTable;

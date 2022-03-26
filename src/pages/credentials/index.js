import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
import { connect } from "react-redux";

import Master from "../../layouts/Master";

const Credentials = ({ language }) => {
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
        <Master>
            <div className="w-full h-full px-28 py-20 2xl:px-24 xl:px-20 lg:px-16 md:px-10 md:flex-col sm:px-7">
                {/* --  Experience Detail -- */}
                <div className="flex w-full h-3/5 pb-7 gap-7">
                    <div className="w-1/2 h-full bg-dark-blue">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/nCbxKfeHajE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-4xl text-dark-blue text-opacity-90 font-bold mb-3 dark:text-champagne dark:text-opacity-90 lg:text-3xl kh-font-heading">
                            Vice president of Ignite
                        </h3>
                        <p className="text-dark-blue font-bold dark:text-champagne dark:text-opacity-60 mb-2 kh-font-description">
                            May, 2020 - June, 2021
                        </p>
                        <p className="text-dark-blue text-opacity-60 dark:text-champagne dark:text-opacity-60 mb-4 kh-font-description">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="flex gap-1 text-dark-blue text-opacity-60">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    class="bi bi-bell-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-arrow-through-heart-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
                                    />
                                </svg>
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-bag-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Experience Detail */}
                {/* -- Timeline Box -- */}
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
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none text-champagne text-opacity-80 absolute px-4 py-3 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "180px",
                                left: "40px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "120px",
                                left: "240px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none	text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "80px",
                                left: "480px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none	text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "50px",
                                left: "710px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none	text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "20px",
                                left: "940px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none	text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "130px",
                                left: "1150px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        <div
                            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none	text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
                            style={{
                                height: "max-content",
                                width: "220px",
                                top: "20px",
                                left: "1300px",
                            }}
                        >
                            <span className="font-semibold">
                                Vice President ...
                            </span>
                            <br></br>
                            <span className="text-xs font-light">
                                May 2020 - June 2021
                            </span>
                        </div>
                        {/* -- Experience Box -- */}
                    </div>
                    {/* -- Experiences -- */}
                </div>
                {/* Timeline Box */}
            </div>
        </Master>
    );
};

const mapStateToProps = (states) => {
    return { language: states.language };
};

export default connect(mapStateToProps, null)(Credentials);

import React from "react";

const ExperienceDetail = () => {
    return (
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
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
    );
};

export default ExperienceDetail;

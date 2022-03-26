import "./style.css";
import React from "react";
import { connect } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import Master from "../../layouts/Master";
import Button from "../../components/Button";

import homePageContent from "../../content/page/home.json";

const HomePage = ({ language }) => {
    const content = homePageContent[language.toUpperCase()];

    return (
        <Master>
            <div className="relative flex h-full px-28 2xl:px-24 xl:px-20 lg:px-16 md:px-10 md:flex-col sm:px-7 kh-font-heading">
                <div
                    className="absolute w-full h-full bg-dark-blue bg-opacity-30 top-0 left-0 dark:bg-champagne dark:bg-opacity-30 background-triangle"
                    style={{ zIndex: 1 }}
                />
                <div
                    className="absolute w-full h-full bg-dark-blue bg-opacity-20 top-0 left-0 dark:bg-champagne dark:bg-opacity-10 background-square"
                    style={{ zIndex: 1 }}
                />
                <div
                    className="flex-1 relative mt-40 xl:absolute xl:w-2/3 lg:w-3/4 md:w-full md:relative md:mt-20 md:mb-12"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-7xl font-bold mb-4 text-opacity-90 text-dark-blue dark:text-champagne dark:text-opacity-90 md:text-5xl sm:text-4xl">
                        {content.name}
                    </h1>
                    {language === "kh" ? (
                        <div className="mb-8 md:mb-6 sm:mb-4" />
                    ) : (
                        ""
                    )}
                    <p className="mb-4 text-opacity-60 text-dark-blue dark:text-champagne dark:text-opacity-60 w-9/12 3xl:w-10/12 2xl:w-11/12 xl:w-full sm:text-sm kh-font-description">
                        {content.description}
                    </p>
                    <Button className="kh-font-heading">
                        <i className="fas fa-play mr-2" />
                        {content.introButtonText}
                    </Button>
                </div>
                <div className="hidden xl:flex-1 xl:block" />
                <div
                    className="flex-1 flex flex-col justify-end items-center"
                    style={{ zIndex: 1 }}
                >
                    <StaticImage
                        src="../../content/images/profile-colored.png"
                        className="w-9/12 3xl:w-10/12 2xl:w-11/12 xl:w-full filter grayscale hover:grayscale-0"
                        alt="Profile"
                        placeholder="tracedSVG"
                        style={{ zIndex: 2 }}
                    />
                </div>
            </div>
        </Master>
    );
};

const mapStateToProps = (states) => {
    return { ...states };
};

export default connect(mapStateToProps, null)(HomePage);

import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import NavigationLink from "./NavigationLink";
import Button from "../../Button";

import navigationContent from "../../../content/navigation.json";

const variants = {
    holder: {
        initial: { display: "none" },
        open: {
            display: "",
        },
        close: {
            display: "none",
            transition: { delay: 0.9 },
        },
    },
    leftSide: {
        initial: { opacity: 0, x: -80 },
        open: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8, ease: "anticipate" },
        },
        close: {
            opacity: 0,
            x: -60,
            transition: { delay: 0.2, duration: 0.6, ease: "anticipate" },
        },
    },
    rightSide: {
        initial: { opacity: 0, x: -80 },
        open: () => {
            const openAnimation = {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.8, ease: "anticipate" },
            };
            if (window.document.body.offsetWidth <= 1023) {
                openAnimation.transition = {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "anticipate",
                };
            }

            return openAnimation;
        },
        close: () => {
            const closeAnimation = {
                opacity: 0,
                x: -60,
                transition: { delay: 0.3, duration: 0.5, ease: "anticipate" },
            };
            if (window.document.body.offsetWidth <= 1023) {
                closeAnimation.transition = {
                    delay: 0.2,
                    duration: 0.6,
                    ease: "anticipate",
                };
            }

            return closeAnimation;
        },
    },
};

const NavigationHotMenu = ({
    language,
    navigation,
    active,
    style,
    className,
}) => {
    const content = navigationContent[language.toUpperCase()];
    const { currentPath } = navigation;

    return (
        <motion.div
            animate={active ? "open" : "close"}
            variants={variants.holder}
            initial="initial"
            style={style}
            className={`${className} lg:flex-col flex w-full h-full items-center px-28 py-10 md:px-0 md:py-10 lg:justify-center lg:block`}
        >
            <motion.div
                variants={variants.leftSide}
                className="mr-32 text-4xl font-medium flex flex-col relative -top-3.5 lg:text-center lg:mr-0 md:mr-0 lg:text-3xl lg:mb-6 md:mb-2 kh-font-heading"
            >
                <NavigationLink
                    href="/"
                    current={currentPath === "/" ? true : false}
                >
                    {content.links.home}
                </NavigationLink>
                <NavigationLink
                    current={currentPath === "/works" ? true : false}
                    href="/works"
                >
                    {content.links.works}
                </NavigationLink>
                <NavigationLink
                    current={currentPath === "/credentials" ? true : false}
                    href="/credentials"
                >
                    {content.links.credentials}
                </NavigationLink>
                <NavigationLink
                    current={currentPath === "/randoms" ? true : false}
                    href="/randoms"
                >
                    {content.links.randoms}
                </NavigationLink>
            </motion.div>

            <motion.div
                className="h-full text-dark-blue text-opacity-80 relative flex-grow dark:text-champagne flex flex-col justify-center lg:text-center lg:justify-start lg:h-auto"
                variants={variants.rightSide}
            >
                <div className="mb-14  lg:order-2 kh-font-description">
                    <h3 className="text-4xl font-semibold mb-8 lg:text-3xl lg:mb-4 kh-font-heading">
                        {content.info.label}
                    </h3>
                    <p className="mb-4 lg:mb-2">
                        <i className="fas fa-phone-alt mr-2" />
                        <span>{content.info.phoneNumber}</span>
                    </p>
                    <p className="mb-4 lg:mb-2">
                        <i className="fas fa-home mr-2" />
                        <span>{content.info.address}</span>
                    </p>
                    <p className="mb-4 lg:mb-2 font-sans tracking-normal">
                        <i className="fas fa-envelope mr-2" />
                        <span>{content.info.email}</span>
                    </p>
                </div>
                <div className="w-2/5 3xl:w-3/5 xl:w-full lg:mb-6 lg:px-4 lg:order-1 kh-font-description">
                    <h3 className="text-4xl font-semibold mb-8 lg:mb-4 lg:text-3xl kh-font-heading">
                        {content.contactLabels.main}
                    </h3>
                    <form className="flex flex-col">
                        <input
                            className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne lg:mb-2"
                            placeholder={content.contactLabels.nameInput}
                            type="text"
                        />
                        <input
                            className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne lg:mb-2"
                            placeholder={content.contactLabels.emailInput}
                            type="email"
                        />
                        <textarea
                            className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne lg:mb-2"
                            placeholder={content.contactLabels.messageInput}
                            rows="5"
                        />
                        <Button>
                            <i className="fas fa-arrow-up mr-2" />
                            {content.contactLabels.submitButton}
                        </Button>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

const mapStateToProps = (state) => {
    return { language: state.language, navigation: state.navigation };
};

export default connect(mapStateToProps)(NavigationHotMenu);

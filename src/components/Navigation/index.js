import React from "react";
import { connect } from "react-redux";
import { toggleNavigation } from "../../features/navigation/actions";
import SocialLink from "./SocialLink";
import NavigationCircle from "./NavigationCircle";
import NavigationHotMenu from "./NavigationHotMenu";

import "./index.css";

const Navigation = ({ navigation, toggleNavigation }) => {
    const active = navigation.state === "active" ? true : false;

    return (
        <div className="relative" style={{ zIndex: 10 }}>
            <div className="h-screen px-5 py-10 w-max border-r-1 border-dark-blue border-opacity-20 flex flex-col justify-between dark:border-champagne md:h-full md:flex-row md:px-5 md:py-4 md:w-full md:border-r-0 md:border-b-2">
                <div className="md:order-2" />
                <div className="relative md:order-1 md:-top-1">
                    <NavigationCircle active={active} />
                    <button className="absolute" onClick={toggleNavigation}>
                        <i
                            className={`fas text-2xl text-dark-blue text-opacity-40 dark:text-champagne hover:text-opacity-80 ${
                                active ? "fa-times" : "fa-bars"
                            }`}
                        />
                    </button>
                </div>
                <div className="flex flex-col items-center md:flex-row md:order-3">
                    <SocialLink href="#">
                        <i className="fab fa-twitter mb-4 md:mb-0 md:mr-3" />
                    </SocialLink>
                    <SocialLink href="#">
                        <i className="fab fa-instagram mb-4 md:mb-0 md:mr-3" />
                    </SocialLink>
                    <SocialLink href="#">
                        <i className="fab fa-youtube mb-4 md:mb-0 md:mr-3" />
                    </SocialLink>
                    <SocialLink href="#">
                        <i className="fab fa-facebook" />
                    </SocialLink>
                </div>
            </div>
            {/* This div is hot menu holder */}

            <NavigationHotMenu
                className="absolute overflow-y-scroll no-scrollbar navigation-hot-menu"
                active={active}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { navigation: state.navigation };
};

export default connect(mapStateToProps, { toggleNavigation })(Navigation);

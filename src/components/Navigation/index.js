import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { toggleNavigation } from "../../features/navigation/actions";
import SocialLink from "./SocialLink";
import NavigationCircle from "./NavigationCircle";
import NavigationHotMenu from "./NavigationHotMenu";

const Navigation = ({ navigation, toggleNavigation }) => {
    const active = navigation.state === "active" ? true : false;
    const mainParentRef = useRef();
    const [mainParentWidth, setMainParentWidth] = useState(0);
    const [mainParentHeight, setMainParentHeight] = useState(0);

    useEffect(() => {
        const setDimension = () => {
            const { offsetWidth, offsetHeight } = mainParentRef.current;
            if (offsetWidth !== mainParentWidth) {
                setMainParentWidth(offsetWidth);
            }
            if (offsetHeight !== mainParentHeight) {
                setMainParentHeight(offsetHeight);
            }
            return;
        };

        setDimension();

        window.addEventListener("resize", setDimension);
    }, []);

    return (
        <div className="relative" ref={mainParentRef} style={{ zIndex: 10 }}>
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
                className="absolute overflow-y-scroll no-scrollbar"
                active={active}
                style={(() => {
                    if (mainParentWidth > mainParentHeight) {
                        return {
                            top: mainParentHeight,
                            left: 0,
                            width: window.document.body.offsetWidth,
                            height: window.innerHeight - mainParentHeight,
                        };
                    } else {
                        return {
                            top: 0,
                            left: mainParentWidth,
                            width:
                                window.document.body.offsetWidth -
                                mainParentWidth,
                            height: window.innerHeight,
                        };
                    }
                })()}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { navigation: state.navigation };
};

export default connect(mapStateToProps, { toggleNavigation })(Navigation);

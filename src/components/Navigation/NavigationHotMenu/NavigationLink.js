import React from "react";
import { connect } from "react-redux";
import { Link, navigate } from "gatsby";
import { motion } from "framer-motion";
import {
    setCurrentPath,
    closeNavigation,
} from "../../../features/navigation/actions";

const variants = {
    initial: { opacity: 0.2 },
    hover: { opacity: 1, x: 5 },
    tap: { x: 0 },
};

const NavigationLink = ({
    children,
    current,
    href,
    navigation,
    setCurrentPath,
    closeNavigation,
}) => {
    const onLinkClick = (e) => {
        e.preventDefault();
        closeNavigation();
        setTimeout(() => {
            setCurrentPath(href);
            navigate(href);
        }, 790);
    };

    if (current) {
        return (
            <Link
                to={href}
                onClick={onLinkClick}
                className="mb-6 text-dark-blue p-3 dark:text-champagne lg:mb-0 lg:p-2"
            >
                {children}
            </Link>
        );
    }

    return (
        <motion.span
            className="mb-6 text-dark-blue p-3 dark:text-champagne lg:mb-0 lg:p-2"
            variants={variants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
        >
            <Link to={href} onClick={onLinkClick}>
                {children}
            </Link>
        </motion.span>
    );
};

const mapStateToProps = (state) => {
    return { navigation: state.navigation };
};

export default connect(mapStateToProps, { setCurrentPath, closeNavigation })(
    NavigationLink
);

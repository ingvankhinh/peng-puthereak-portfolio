import React from "react";
import { connect } from "react-redux";

import { toggleMode } from "../../features/mode/actions";

const ModeToggler = ({ mode, toggleMode }) => {
    const icon =
        mode === "dark" ? (
            <i className="fas fa-moon" />
        ) : (
            <i className="fas fa-sun text-2xl" />
        );

    return (
        <button
            onClick={toggleMode}
            className="rounded-full text-dark-blue w-10 h-10 flex items-center justify-center hover:bg-dark-blue hover:bg-opacity-20 dark:hover:bg-champagne dark:hover:bg-opacity-20 dark:text-champagne"
        >
            {icon}
        </button>
    );
};

const mapStateToProps = (state) => {
    return { mode: state.mode };
};

export default connect(mapStateToProps, { toggleMode })(ModeToggler);

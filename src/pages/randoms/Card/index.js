import React from "react";

const Card = (props) => {
    return (
        <div className="overflow-hidden	card bg-dark-blue text-champagne dark:bg-champagne dark:text-dark-blue dark:bg-opacity-30 mb-4 h-auto">
            {props.children}
        </div>
    );
};

export default Card;

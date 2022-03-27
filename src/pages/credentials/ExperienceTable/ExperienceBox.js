import React from "react";

const ExperienceBox = (props) => {
    return (
        <div
            className="cursor-pointer bg-dark-blue bg-opacity-60 leading-none text-champagne text-opacity-60 absolute px-4 py-2 transition ease-in duration-280 hover:bg-opacity-100 hover:text-opacity-100"
            style={props.style}
        >
            <span className="font-semibold">Vice President ...</span>
            <br></br>
            <span className="text-xs font-light">May 2020 - June 2021</span>
        </div>
    );
};

export default ExperienceBox;

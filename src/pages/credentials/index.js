import React, { useState } from "react";
import { connect } from "react-redux";

import Master from "../../layouts/Master";
import ExperienceDetail from "./ExperienceDetail";
import {
    ExperienceTableDesktop,
    ExperienceTableMobile,
} from "./ExperienceTable";

import CredentialsPageContent from "./../../content/pages/credentials.json";

const Credentials = ({ language }) => {
    const [currentSelectedExperience, setCurrentSelectedExperience] =
        useState(0);
    const content = CredentialsPageContent[language.toUpperCase()];

    return (
        <Master>
            <div className="w-full h-full px-28 py-20 2xl:px-24 xl:px-20 lg:px-16 md:px-10 md:flex-col sm:px-7">
                <ExperienceDetail
                    experience={content[currentSelectedExperience]}
                    index={currentSelectedExperience}
                />
                {typeof window !== "undefined" && window.innerWidth <= 1023 ? (
                    <ExperienceTableMobile
                        index={currentSelectedExperience}
                        onChange={setCurrentSelectedExperience}
                        content={content}
                    />
                ) : (
                    <ExperienceTableDesktop
                        index={currentSelectedExperience}
                        onChange={setCurrentSelectedExperience}
                        content={content}
                    />
                )}
            </div>
        </Master>
    );
};

const mapStateToProps = (states) => {
    return { ...states };
};

export default connect(mapStateToProps)(Credentials);

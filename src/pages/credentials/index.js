import React from "react";

import Master from "../../layouts/Master";
import ExperienceDetail from "./ExperienceDetail";
import ExperienceTable from "./ExperienceTable";

const Credentials = () => {
    return (
        <Master>
            <div className="w-full h-full px-28 py-20 2xl:px-24 xl:px-20 lg:px-16 md:px-10 md:flex-col sm:px-7">
                <ExperienceDetail />
                <ExperienceTable />
            </div>
        </Master>
    );
};

export default Credentials;

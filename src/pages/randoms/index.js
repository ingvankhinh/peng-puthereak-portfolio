import React from "react";
import { connect } from "react-redux";

import Master from "../../layouts/Master";

const Card = (props) => {
    return (
        <div className="overflow-hidden	card bg-dark-blue text-champagne dark:bg-champagne dark:text-dark-blue dark:bg-opacity-30 mb-4 h-auto">
            {props.children}
        </div>
    );
};

// each card will have 30% width;
// there will be 5% gap;

const Randoms = ({ language }) => {
    return (
        <Master>
            <div className="w-full h-full px-28 py-20 2xl:px-24 xl:px-20 lg:px-16 md:px-10 md:flex-col sm:px-7">
                <div className="card-holder">
                    <Card>
                        <iframe
                            height="500px"
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                    <Card>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/mO_9VAlhICQ"
                        ></iframe>
                    </Card>
                </div>
            </div>
        </Master>
    );
};

const mapStateToProps = (states) => {
    return { language: states.language };
};

export default connect(mapStateToProps, null)(Randoms);

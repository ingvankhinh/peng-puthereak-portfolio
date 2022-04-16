import React from "react";

import Master from "../../layouts/Master";
import Card from "./Card";

// each card will have 30% width;
// there will be 5% gap;

const Randoms = () => {
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

export default Randoms;

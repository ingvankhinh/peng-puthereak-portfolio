import React from "react";
import { motion } from "framer-motion";

const technologyIcons = {
    AE: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
  </svg>`,
    PS: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bluetooth" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"/>
  </svg>`,
    LR: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
  </svg>`,
    CR: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
    <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
  </svg>`,
};

const animate = {
    initial: { opacity: "0" },
    animate: { opacity: "100%" },
    transition: { duration: 0.2 },
};

const ExperienceDetail = ({ index, experience }) => {
    const { title, content, startDate, endDate } = experience;

    const technologies = content.technologies.map((technology) => {
        return (
            <span
                key={technology}
                className="mr-1 font-bold text-dark-blue"
                dangerouslySetInnerHTML={{
                    __html: technologyIcons[technology],
                }}
            ></span>
        );
    });

    return (
        <div
            key={index}
            className="flex w-full h-3/5 pb-7 gap-7 lg:flex-col lg:gap-2 lg:pb-5"
        >
            <motion.div
                {...animate}
                className="w-1/2 h-full bg-dark-blue lg:w-full"
            >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nCbxKfeHajE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </motion.div>
            <div className="w-1/2 lg:w-full">
                <motion.h3
                    {...animate}
                    transition={{ delay: 0.1 }}
                    className="text-4xl text-dark-blue text-opacity-90 font-bold mb-3 dark:text-champagne dark:text-opacity-90 lg:text-3xl kh-font-heading lg:mb-0"
                >
                    {title}
                </motion.h3>
                <motion.p
                    {...animate}
                    transition={{ delay: 0.15 }}
                    className="text-dark-blue font-bold dark:text-champagne dark:text-opacity-60 mb-2 kh-font-description lg:mb-0"
                >
                    {startDate.label} - {endDate.label}
                </motion.p>
                <motion.p
                    {...animate}
                    transition={{ delay: 0.2 }}
                    className="text-dark-blue text-opacity-60 dark:text-champagne dark:text-opacity-60 mb-4 kh-font-description lg:mb-1"
                >
                    {content.description}
                </motion.p>
                <motion.div
                    {...animate}
                    transition={{ delay: 0.25 }}
                    className="flex gap-1 text-dark-blue text-opacity-60"
                >
                    {technologies}
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceDetail;

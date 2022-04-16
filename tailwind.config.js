const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        screens: {
            "3xl": { max: "1725px" },
            // => @media (max-width: 1725px) { ... }

            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "768px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        fontFamily: {
            sans: ["Josefin Sans", "sans-serif"],
            bayon: ["Bayon", "sans-serif"],
            kantumruy: ["Kantumruy", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            white: "white",
            "dark-blue": {
                DEFAULT: "#1E2640",
                light: "#293457",
                lightest: "#1E264099",
            },
            champagne: {
                DEFAULT: "#F3EAC0",
                light: "#F3EAC0CC",
                lightest: "#F3EAC099",
            },
            "desert-sun": {
                DEFAULT: "#DC9750",
            },
        },
        extend: {},
    },
    //Specifying properties for that uses dark mode
    variants: {
        extend: {
            grayscale: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};

import { _type as type } from "./types";
import { store } from "../../state/store";

const _langauges = ["en", "kh"];

//you can set the style in html main element so when the language get switch it will change font weight...

const style = window.document.createElement("style");
const styles = `
    .kh-font-heading {
        font-family: "Bayon", "Sora", "sans-serif";
        letter-spacing: 0.025em;
        line-height: 1.5;
    }
    .kh-font-description {
        font-family:  "Kantumruy", "Sora", "sans-serif";
        letter-spacing: 0.04em;
        line-height: 1.8rem;
    }
`;
style.innerHTML = styles;

const addStylesToDocument = (language) => {
    if (window) {
        if (language === "kh") {
            window.document.head.append(style);
        } else {
            style.remove();
        }
    }
};

export const toggleLanguage = () => {
    const { language: currentLanguage } = store.getState();
    const language =
        _langauges.indexOf(currentLanguage) === 0
            ? _langauges[1]
            : _langauges[0];

    addStylesToDocument(language);
    return { type: type.switchLanguage, payload: language };
};

export const switchToEnglish = () => {
    addStylesToDocument(_langauges[0]);

    return { type: type.switchLanguage, payload: _langauges[0] };
};

export const switchToKhmer = () => {
    addStylesToDocument(_langauges[1]);

    return { type: type.switchLanguage, payload: _langauges[1] };
};

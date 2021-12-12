import { _type as type } from "./types";

export const languageReducer = (state, action) => {
    switch (action.type) {
        case type.switchLanguage:
            return action.payload;
        default:
            return state ? state : "en";
    }
};

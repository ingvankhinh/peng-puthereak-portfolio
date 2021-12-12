import { _type as type } from "./types";

export const modeReducer = (state, action) => {
    switch (action.type) {
        case type.switchMode:
            return action.payload;
        default:
            return state ? state : "light";
    }
};

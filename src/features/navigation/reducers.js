import { _type as type } from "./types";

const _defaultState = {
    state: "inactive",
    currentPath: window.location.pathname,
};

export const navigationReducer = (state, action) => {
    switch (action.type) {
        case type.switchNavigationState:
            state.state = action.payload;
            return { ...state };
        case type.setCurrentPath:
            state.currentPath = action.payload;
            return { ...state };
        default:
            return state ? state : _defaultState;
    }
};

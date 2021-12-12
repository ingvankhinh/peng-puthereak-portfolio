import { _type as type } from "./types";
import { store } from "../../state/store";

const _navigationStates = ["active", "inactive"];

export const toggleNavigation = () => {
    const { navigation } = store.getState();
    const newState =
        _navigationStates.indexOf(navigation.state) === 0
            ? _navigationStates[1]
            : _navigationStates[0];

    return {
        type: type.switchNavigationState,
        payload: newState,
    };
};

export const openNavigation = () => {
    const newState = _navigationStates[0];

    return {
        type: type.switchNavigationState,
        payload: newState,
    };
};

export const closeNavigation = () => {
    const newState = _navigationStates[1];

    return {
        type: type.switchNavigationState,
        payload: newState,
    };
};

export const setCurrentPath = (path) => {
    return {
        type: type.setCurrentPath,
        payload: path,
    };
};

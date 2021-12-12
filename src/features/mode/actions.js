import { _type as type } from "./types";
import { store } from "../../state/store";

const _mode = ["light", "dark"];

const toggleDocumentClass = (mode) => {
    if (window) {
        if (mode === _mode[1]) {
            return window.document.documentElement.classList.add("dark");
        } else {
            window.document.documentElement.classList.remove("dark");
        }
    }
    return;
};

export const toggleMode = () => {
    const { mode: currentMode } = store.getState();
    const mode = _mode.indexOf(currentMode) === 0 ? _mode[1] : _mode[0];

    toggleDocumentClass(mode);
    return { type: type.switchMode, payload: mode };
};

export const switchToLight = () => {
    toggleDocumentClass(_mode[0]);

    return { type: type.switchMode, payload: _mode[0] };
};

export const switchToDark = () => {
    toggleDocumentClass(_mode[1]);

    return { type: type.switchMode, payload: _mode[1] };
};

import { combineReducers } from "redux";
import { languageReducer } from "../features/language/reducers";
import { modeReducer } from "../features/mode/reducers";
import { navigationReducer } from "../features/navigation/reducers";

export default combineReducers({
    language: languageReducer,
    mode: modeReducer,
    navigation: navigationReducer,
});

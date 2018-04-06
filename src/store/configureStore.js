import { createStore, combineReducers } from 'redux';
import Cards from "../reducers/Cards";
import Lists from "../reducers/List";
import Boards from "../reducers/Board";
import user from "./user";
import isGuest from "./isGuest";
import currentBoardId from "./currentBoardId";

export default () => {
    const store = createStore(
        combineReducers({
            Cards,
            Lists,
            Boards,
        })
    );

    return store;
};
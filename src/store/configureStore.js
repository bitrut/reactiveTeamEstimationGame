import { createStore, combineReducers } from 'redux';
import Cards from "../reducers/Cards";
import Lists from "../reducers/List";
import Boards from "../reducers/Board";
import isGuest from "../reducers/isGuest";
import user from "../reducers/user";

export default () => {
    const store = createStore(
        combineReducers({
            Cards,
            Lists,
            Boards,
            user,
            isGuest,
        })
    );

    return store;
};
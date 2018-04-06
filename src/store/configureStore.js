import { createStore, combineReducers } from 'redux';
import Cards from "../reducers/Cards";
import Lists from "../reducers/List";
import Boards from "../reducers/Board";

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
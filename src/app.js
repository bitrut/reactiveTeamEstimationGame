import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import App from './playground/myBoard';
import Router from './routers/AppRouter';
import shortid from "shortid";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import example from './createWelcomeBoard';

const store = configureStore();

const example_board = example(0);

const boardId = shortid.generate();
store.dispatch({
    type: "ADD_BOARD",
    payload: {
      ...example_board
    }});

example_board.lists.forEach(element => {
    store.dispatch({
        type: "ADD_LIST",
        payload: {
            ...element,
            boardId: example_board.boardId,
        }
    });
    element.cards.forEach(e => {
        store.dispatch({
            type: "ADD_CARD",
            payload: {
                ...e,
                listId: element.listId
            }
        })
    });
});

const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
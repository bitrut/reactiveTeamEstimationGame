import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import App from './playground/myBoard';
import Router from './routers/AppRouter';
import './styles/styles.scss'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
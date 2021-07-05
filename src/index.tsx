import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {App} from './App';

// import {store} from './redux/store';
import { store } from './redux/redux-store';

import {StateType} from './redux/store';


const rendererEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rendererEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rendererEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

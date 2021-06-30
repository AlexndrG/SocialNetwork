import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {App} from './App';
import {StateType, store} from './redux/state';


const rendererEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rendererEntireTree(store.getState())

store.subscribe(rendererEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from "./redux/store/ConfigureStore";
import {Provider} from "react-redux";

import {HashRouter} from 'react-router-dom'

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App props={store}/>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);

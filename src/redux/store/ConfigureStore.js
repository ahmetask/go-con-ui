import {createBrowserHistory} from 'history';
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {api} from "../../service/Api";
import rootReducer from "../reducer/RootReducer";
import {routerMiddleware} from "react-router-redux";
import * as ActionTypes from "../action/ActionTypes";
import {toast} from "react-toastify";

export const history = createBrowserHistory({
    basename: "/"
});

const stateLogger = store => next => action => {
    console.log("State Logger Action > ", action);
    let result = next(action);
    console.log("State Logger Next State > ", store.getState());
    return result
};

const navigationMiddleware = store => next => action => {
    let result = next(action);
    switch (action.type) {
        case ActionTypes.GET_CONFIG_SUCCESS:
            window.location.replace("/#/edit");
            break
        default :
            break
    }
    return result;

};

const notificationMiddleware = store => next => action => {
    if (action.message) {
        toast(action.message, {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: false,
            autoClose: 3000,
            type: action.level || "success",
            closeOnClick: true,
            pauseOnHover: false
        });
    }

    return next(action);
};

export default function configureStore() {
    const initialState = {};
    const enhancers = [];
    const middleware = [
        thunk,
        api,
        navigationMiddleware,
        stateLogger,
        notificationMiddleware,
        routerMiddleware(history)
    ];

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    )
};


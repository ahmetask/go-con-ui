import * as ActionTypes from "../redux/action/ActionTypes"
import * as ApiAction from "../redux/action/ApiAction"
import * as ApiActions from "../redux/action/ApiAction"
import axios from "axios/index";
import * as ApiConstants from "./Constants";
import * as Message from "../resources/message/Message"

export const api = store => next => action => {
    next(action);
    switch (action.type) {
        case ActionTypes.GET_CONFIGS:
            next(ApiAction.apiProcessing(ActionTypes.GET_CONFIGS_PROCESS));
            axios.get(ApiConstants.ENDPOINT.CONFIG + "/specs")
                .then(response => {
                    let decodedContent = atob(response.data.content);
                    decodedContent = JSON.parse(decodedContent)
                    next(ApiAction.apiSuccess(ActionTypes.GET_CONFIGS_SUCCESS, decodedContent));
                })
                .catch(() => {
                    next(ApiAction.apiFailure(ActionTypes.GET_CONFIGS_FAILURE, Message.GET_CONFIGS_ERROR));
                });
            break;
        case ActionTypes.GET_CONFIG:
            next(ApiAction.apiProcessing(ActionTypes.GET_CONFIG_PROCESS));
            axios.get(ApiConstants.ENDPOINT.CONFIG + "/" + action.parameters.appName)
                .then(response => {
                    next(ApiAction.apiSuccess(ActionTypes.GET_CONFIG_SUCCESS, response.data));
                })
                .catch(() => {
                    next(ApiAction.apiFailure(ActionTypes.GET_CONFIG_FAILURE, Message.GET_CONFIG_ERROR));
                });
            break;
        case ActionTypes.SAVE_CONFIG:
            next(ApiAction.apiProcessing(ActionTypes.SAVE_CONFIG_PROCESS));
            let request = {
                appName: action.data.spec.appName,
                namespace: action.data.spec.namespace,
                port: action.data.spec.port,
                config: action.data.content
            }

            axios.post(ApiConstants.ENDPOINT.CONFIG, request)
                .then(() => {
                    next(ApiAction.apiSuccess(ActionTypes.SAVE_CONFIG_SUCCESS));
                })
                .catch(() => {
                    next(ApiAction.apiFailure(ActionTypes.SAVE_CONFIG_FAILURE, Message.SAVE_CONFIG_ERROR));
                });
            break;
        case ActionTypes.REFRESH_CONFIGS:
            next(ApiAction.apiProcessing(ActionTypes.REFRESH_CONFIGS_PROCESS));
            axios.head(ApiConstants.ENDPOINT.CONFIG)
                .then(() => {
                    next(ApiAction.apiSuccess(ActionTypes.REFRESH_CONFIGS_SUCCESS));
                    store.dispatch(ApiActions.get(ActionTypes.GET_CONFIGS));
                })
                .catch(() => {
                    next(ApiAction.apiFailure(ActionTypes.REFRESH_CONFIGS_FAILURE, Message.REFRESH_CONFIGS));
                });
            break;
        case ActionTypes.REFRESH_CONFIG:
            next(ApiAction.apiProcessing(ActionTypes.REFRESH_CONFIG_PROCESS));
            axios.head(ApiConstants.ENDPOINT.CONFIG + "/" + action.parameters.appName)
                .then(() => {
                    next(ApiAction.apiSuccess(ActionTypes.REFRESH_CONFIG_SUCCESS));
                })
                .catch(() => {
                    next(ApiAction.apiFailure(ActionTypes.REFRESH_CONFIG_FAILURE, Message.REFRESH_CONFIG));
                });
            break;
        default:
            break
    }
};

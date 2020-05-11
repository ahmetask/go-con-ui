import * as ActionTypes from "../action/ActionTypes";

const initialState = {
    config: {},
    configs: [],
    mode: 0,
    configsLoading: false,
    configLoading: false
};

const config = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_CONFIG_PROCESS:
        case ActionTypes.REFRESH_CONFIG_PROCESS:
            return {...state, configLoading: true}
        case ActionTypes.SAVE_CONFIG_SUCCESS:
        case ActionTypes.SAVE_CONFIG_FAILURE:
        case ActionTypes.REFRESH_CONFIG_SUCCESS:
        case ActionTypes.REFRESH_CONFIG_FAILURE:
            return {...state, configLoading: false}
        case ActionTypes.GET_CONFIG_PROCESS:
            return {...state, configLoading: true, config: {}, mode: 0};
        case ActionTypes.GET_CONFIG_SUCCESS:
            let decodedContent = atob(action.data.content);
            decodedContent = JSON.parse(decodedContent)
            action.data.content = decodedContent
            return {
                ...state,
                mode: 1,
                configLoading: false,
                config: action.data,
            };
        case ActionTypes.GET_CONFIG_FAILURE:
            return {...state, configLoading: false, config: {}, mode: 0};
        case ActionTypes.GET_CONFIGS_PROCESS:
            return {...state, configsLoading: true, configs: []};
        case ActionTypes.GET_CONFIGS_SUCCESS:
            return {
                ...state,
                configsLoading: false,
                configs: action.data,
            };
        case ActionTypes.GET_CONFIGS_FAILURE:
            return {...state, configsLoading: false, configs: []};
        case ActionTypes.CLEAR_CONFIG:
            return {...state, config: {}};
        default:
            return state;
    }
};


export default config;

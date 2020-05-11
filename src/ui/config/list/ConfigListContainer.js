import ConfigList from "./ConfigList";
import {connect} from "react-redux";

import * as ApiActions from "../../../redux/action/ApiAction";
import * as ActionTypes from "../../../redux/action/ActionTypes";

const mapStateToProps = (state, ownProps) => {
    return {
        configs: state.config.configs,
        configsLoading: state.config.configsLoading,
    }
};

const mapDispatchToProps = dispatch => {
    dispatch(ApiActions.get(ActionTypes.GET_CONFIGS));
    return {
        getConfig(appName) {
            dispatch(ApiActions.get(ActionTypes.GET_CONFIG, {appName: appName}));
        },
        refreshAll() {
            dispatch(ApiActions.head(ActionTypes.REFRESH_CONFIGS));
        }
    }
};

const ConfigListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigList);

export default ConfigListContainer;

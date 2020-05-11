import Config from "./Config";
import {connect} from "react-redux";
import * as ApiActions from "../../../redux/action/ApiAction";
import * as ActionTypes from "../../../redux/action/ActionTypes";

const mapStateToProps = (state, ownProps) => {
    return {
        config: state.config.config,
        configLoading: state.config.configLoading,
        mode: state.config.mode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        refresh(appName) {
            dispatch(ApiActions.get(ActionTypes.GET_CONFIG, {appName: appName}));
            dispatch(ApiActions.head(ActionTypes.REFRESH_CONFIG, {appName: appName}));
        },
        save(config) {
            dispatch(ApiActions.post(ActionTypes.SAVE_CONFIG, config));
        }
    }
};

const ConfigContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Config);

export default ConfigContainer;

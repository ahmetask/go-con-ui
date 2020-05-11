import MainPage from "./MainPage";
import {connect} from "react-redux";
import {clearConfig} from "../../redux/action/ConfigAction";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        clearConfig() {
            dispatch(clearConfig());
        },
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

export default MainContainer;

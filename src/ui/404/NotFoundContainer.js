import {connect} from "react-redux";

import NotFound from "./NotFound";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

const NotFoundContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFound);

export default NotFoundContainer;

import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";

class NotFound extends Component {
    render() {
        return (
            <div style={{height: "100vh"}}>
                <div style={{margin: "auto", width: "50%", textAlign: "center", paddingTop: "30vh"}}>
                    <div>
                        <a style={{paddingTop: "5px"}} href="/#" onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push("/")
                        }}>
                            <Icon size={"huge"} name='home'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;

import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainContainer from "./ui/main/MainContainer";

class App extends Component {
    render() {
        return (
            <div>
                <ToastContainer/>
                <Switch>
                    <Route path="/" component={MainContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;

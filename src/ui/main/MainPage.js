import React, {Component, createRef} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Icon, Menu, Sticky} from "semantic-ui-react";
import NotFoundContainer from "../404/NotFoundContainer";
import ConfigListContainer from "../config/list/ConfigListContainer";
import ConfigContainer from "../config/edit/ConfigContainer";

class MainPage extends Component {

    contextRef = createRef();

    handleMenuItemClick = (e, {name}) => {
        let path = "/" + name.toLowerCase();
        if (this.props.history.location.pathname === path || this.props.history.location.pathname + "/" === path) {
            window.location.reload();
        } else {
            this.props.clearConfig()
            this.props.history.replace(path);
        }
    };

    render() {
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <Menu>
                        <Menu.Item
                            name=''
                            active={true}
                            onClick={this.handleMenuItemClick}>
                            <Icon name='list'/>
                            List
                        </Menu.Item>
                        <Menu.Item
                            name='edit'
                            active={true}
                            onClick={this.handleMenuItemClick}>
                            <Icon name='add'/>
                            Create
                        </Menu.Item>
                    </Menu>
                </Sticky>
                <Switch>
                    <Route exact path="/" component={ConfigListContainer}/>
                    <Route exact path="/edit" component={ConfigContainer}/>
                    <Route component={NotFoundContainer}/>
                </Switch>
            </div>
        );
    }
}

export default MainPage;

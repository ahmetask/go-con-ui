import React, {Component} from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import {Button, Segment} from "semantic-ui-react";
import _ from 'lodash';

class Config extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    changeConfig = (data) => {
        this.setState({config: data.jsObject})
    }

    render() {
        const refresh = () => {
            if (this.props.mode === 1) {
                this.props.refresh(this.props.config.spec.appName)
            }
        }

        const save = () => {
            if (!_.isEmpty(this.state.config)) {
                this.props.save(this.state.config)
            }
        }

        const saveButton = () => {
            return < Button content=''
                            icon='save'
                            primary={true}
                            color={"red"}
                            onClick={save}
                            label={{as: 'a', basic: true, content: "Save"}}
                            labelPosition='right'
            />
        }
        return (
            <Segment loading={this.props.configLoading} style={{flex: 1}}>
                {
                    this.props.mode === 1 ?
                        <Button.Group>
                            < Button content=''
                                     icon='refresh'
                                     primary={true}
                                     color={"red"}
                                     onClick={refresh}
                                     label={{as: 'a', basic: true, content: "Refresh"}}
                                     labelPosition='right'
                            />
                            {saveButton()}
                        </Button.Group>
                        : saveButton()
                }
                <JSONInput
                    onChange={this.changeConfig}
                    width="100%"
                    id='config'
                    placeholder={this.props.config}
                    locale={locale}
                />
            </Segment>
        );
    }
}

export default Config;

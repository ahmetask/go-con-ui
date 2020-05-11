import React, {Component} from 'react';
import {Button, Segment, Table} from "semantic-ui-react";

class ConfigList extends Component {
    render() {
        const {configs} = this.props

        const getConfig = (appName) => {
            this.props.getConfig(appName)
        }

        const refreshAll = () => {
            this.props.refreshAll()
        }

        return (
            <Segment loading={this.props.configsLoading}>
                <Button content=''
                        icon='refresh'
                        color={"blue"}
                        onClick={refreshAll}
                        label={{as: 'a', basic: true, content: "Refresh All"}}
                        labelPosition='right'
                />
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>App Name</Table.HeaderCell>
                            <Table.HeaderCell>Namespace</Table.HeaderCell>
                            <Table.HeaderCell>Port</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            configs.map(function (item, i) {
                                return <Table.Row key={i}>
                                    <Table.Cell> <Button
                                        onClick={(e) => getConfig(item.appName)}
                                        content='Edit'
                                        icon='edit'
                                        color={"blue"}
                                        label={{as: 'a', basic: true, content: item.appName}}
                                        labelPosition='right'
                                    /></Table.Cell>
                                    <Table.Cell>{item.namespace}</Table.Cell>
                                    <Table.Cell>{item.port}</Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
            </Segment>

        );
    }
}

export default ConfigList;

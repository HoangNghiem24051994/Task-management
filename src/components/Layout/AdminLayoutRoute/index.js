import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../../Dashboard'
export default class AdminLayoutRoute extends Component {
    render() {
        let { component: YourComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps} render={routeProps => {
                    return (
                        <Dashboard {...remainProps}>
                            <YourComponent {...routeProps} />
                        </Dashboard>
                    )
                }}
            />

        )
    }
}

import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/styles';
 class AdminHomePage extends Component {
    render() {
        return (
            <div>
                <h1>home page</h1>
            </div>
        )
    }
}
export default withStyles(styles)(AdminHomePage)
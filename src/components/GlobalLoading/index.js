import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import * as uiAction from '../../actions/ui'
import LoadingIcon from '../../assets/images/loading.gif'
class GlobalLoading extends Component {
    render() {
        let {showLoading} = this.props;
        let { classes } = this.props;
        if (!showLoading) return null;
        return (
            <div className={classes.globalLoading}>
                <img src={LoadingIcon} alt="Loading" className={classes.icon} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showLoading: state.ui.showLoading
});
const mapDispatchToProps = dispatch => ({
    uiAction: bindActionCreators(uiAction, dispatch)
})


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(GlobalLoading)

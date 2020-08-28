import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from "@material-ui/core";
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux';
import * as uiAction from '.././../actions/ui'
import cn from 'classnames'
class Dashboard extends Component {

    ontoggleSidebar= value => {
        let {sidebarAction} = this.props;
        let {actHideSidebar, actShowSidebar} = sidebarAction;
         if (value === true) {
            actShowSidebar();
         } else {
             actHideSidebar();
         }
    }


    render() {
        let { children, name , classes, showSidebar} = this.props;
        return (
            <div>
                <Header name={name} showSidebar={showSidebar} ontoggleSidebar={this.ontoggleSidebar} />
                <div className={classes.wrapper}>
                    <Sidebar showSidebar={showSidebar} ontoggleSidebar={this.ontoggleSidebar} />
                    <div className={cn(classes.content, {[classes.shiftLeft] : showSidebar === false})}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showSidebar: state.ui.showSidebar
})
const mapDispatchToProps = dispatch => ({
   sidebarAction: bindActionCreators(uiAction, dispatch)
})

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps )
)(Dashboard)



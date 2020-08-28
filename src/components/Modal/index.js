import React, { Component } from "react";
import { withStyles, Modal, Typography} from "@material-ui/core";
import styles from "./styles";
import ClearIcon from '@material-ui/icons/Clear';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal'
import { connect } from 'react-redux';

class ModalComponent extends Component {


  render() {
    let { showModal, modalActions, classes,component, title} = this.props;
    let {actHideModal} = modalActions;
    return (
        <Modal
          open={showModal}
        >
          <div className={classes.modal}>
            <div className={classes.title}>
              <Typography variant="h5" className={classes.titleText}>
                {title}
              </Typography>                
              <ClearIcon onClick={actHideModal} className={classes.clearIcon}/>
            </div>
            {component}
          </div>

        </Modal>
    );
  }
}

const mapStateToProps = state => ({
    showModal: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
})
const mapDispatchToProps = dispatch => ({
    modalActions: bindActionCreators(modalActions, dispatch)
})


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
    )(ModalComponent)





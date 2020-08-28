import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles, Grid, Box, MenuItem } from "@material-ui/core";
import styles from "./styles";
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import renderTextField from "../FormHelper/TextField";
import renderSelectField from "../FormHelper/SelectField";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../actions/tasks'
import * as modalAction from '../../actions/modal'
// const minLength = min => value =>
//   value && value.length < min ? `Must be ${min} characters or more` : undefined;
// const minLength2 = minLength(2);
// const required = value => {  
//   let error = 'Vui long nhap title';
//   if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
//       error = null;
//   }
//   return error;
// }
const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length < 5) {
    errors.title = 'Must be 5 characters or more'
  }
  if (!values.description) {
    errors.description = 'Required'
  } else if (values.description.length < 5) {
    errors.description = 'Must be 5 characters or more'
  }
  return errors;
}


class TaskForm extends Component {

  handleSubmit = data => {
    let { taskActions, modalAction, taskEditting } = this.props;
    let { atcAddTask, updateTask } = taskActions;
    let { actHideModal } = modalAction;
    let { title, description, status } = data;

    if (taskEditting && taskEditting.id) {
      updateTask( title, description, status );
    } else {
      atcAddTask(title, description );
    }
    actHideModal();
  }

  handleClose = () => {
    let { modalAction } = this.props;
    let { actHideModal } = modalAction;
    actHideModal();
  }
  renderStatusSelection() {
    let xhtml = null;
    let { taskEditting, classes,  } = this.props;
    if (taskEditting && taskEditting.id) {
      xhtml = (
        <Field
          id="status"
          label="Status"
          margin="normal"
          name="status"
          component={renderSelectField}
          className={classes.select}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      )
    };

    return xhtml;
  }

  render() {
    let { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Grid container spacing={4} justify='center'>
            <Grid item md={11}>

              <Field
                id="title"
                label="Title"
                margin="normal"
                className={classes.textField}
                name="title"
                component={renderTextField}
              />
            </Grid>
            <Grid item md={11}>
              <Field
                id="description"
                label="Description"
                margin="normal"
                className={classes.textField}
                name="description"
                component={renderTextField}
                multiline
                rowsMax={4}
              />
            </Grid>
            <Grid item md={11}>
              {this.renderStatusSelection()}
            </Grid>
            <Grid item md={12} container justify='flex-end'>
              <Box mb={1}>
                <Button variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Save
                    </Button>
              </Box>
              <Box ml={1} mb={1} mr={1.51}>
                <Button onClick={this.handleClose} variant="contained" color="secondary" size="small">
                  Cancel
                    </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  taskEditting: state.tasks.taskEditting,
  initialValues: {
    title: state.tasks.taskEditting ? state.tasks.taskEditting.title : null,
    description: state.tasks.taskEditting ? state.tasks.taskEditting.description : null,
    status: state.tasks.taskEditting ? state.tasks.taskEditting.status : null,

  }
})
const mapDispatchToProps = dispatch => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  modalAction: bindActionCreators(modalAction, dispatch),
})

const FORM_NAME = 'TASK_MANAGEMENT'


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: FORM_NAME, validate }),
)(TaskForm)


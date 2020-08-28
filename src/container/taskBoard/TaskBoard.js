import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constans/index';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import TaskList from '../../components/taskList';
import TaskForm from '../../components/taskForm'
import { connect } from 'react-redux'
import * as taskActions from '../../actions/tasks'
import * as modalActions from '../../actions/modal'
import { bindActionCreators } from 'redux'
import SearchBox from '../../components/SearchBox'
// const listtask = [
//   {
//     id: 1,
//     title: 'read book',
//     description: 'read material ui book',
//     status: 0
//   },
//   {
//     id: 2,
//     title: 'play football',
//     description: 'play football with my friend',
//     status: 1
//   },
//   {
//     id: 3,
//     title: 'listen to music',
//     description: 'listen to music romantic',
//     status: 2
//   },
// ];



class TaskBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    let { taskActions } = this.props;
    let { actFetchListTask } = taskActions;
    actFetchListTask();
  }


  renderBoard() {
    let { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}  >
        {
          STATUSES.map((status, index) => {
            const taskFilter = listTask.filter((task) => task.status === status.value)
            return (
              <TaskList
                key={index}
                tasks={taskFilter}
                index={index}
                status={status}
                onUpdateTask={this.onUpdateTask}
                onDeleteTask={this.showModalDeleteTask}
              />
            )
          })
        }
      </Grid>
    );

    return xhtml;
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = (
      <SearchBox onChange={this.onChange} />
    )
    return xhtml;
  }
  onUpdateTask = task => {
    let { modalActions, taskActions } = this.props;
    let { atcUpdateTask } = taskActions;
    let { actShowModal, actChangeModalTitle, actChangeModalContent, } = modalActions;
    atcUpdateTask(task);
    actShowModal();
    actChangeModalTitle('Update task');
    actChangeModalContent(<TaskForm />);
  }
  showModalDeleteTask = task => {
    let { modalActions, classes } = this.props;
    let { actShowModal, actChangeModalTitle, actChangeModalContent, actHideModal } = modalActions;
    actShowModal();
    actChangeModalTitle('Delete task');
    actChangeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{' '}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
      </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1} mb={1} mr={1.51}>
            <Button variant="contained" onClick={actHideModal}>
              Hủy Bỏ
          </Button>
          </Box>
          <Box mb={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              Đồng Ý
          </Button>
          </Box>
        </Box>
      </div>
    );
    
  }

  handleDeleteTask = task => {
    let {id} = task;
    let { modalActions, taskActions } = this.props;
    let { actDeleteTask } = taskActions;
    let { actHideModal } = modalActions;
    actDeleteTask(id);
    actHideModal();
  }

  onChange = (event) => {
    let { value } = event.target;
    let { taskActions } = this.props;
    let { actFilterTask } = taskActions;
    actFilterTask(value);
  }
  handleClose = () => {
    let { modalActions } = this.props;
    let { actHideModal } = modalActions;
    actHideModal();
  }
  onOpenModal = () => {
    let { modalActions } = this.props;
    let { actShowModal, actChangeModalTitle, actChangeModalContent } = modalActions;
    let { taskActions } = this.props;
    let { atcUpdateTask } = taskActions;
    atcUpdateTask(null);
    actShowModal();
    actChangeModalTitle('Add new task');
    actChangeModalContent(<TaskForm />);
  }

  render() {
    return (
      <>

        <Box ml={2} mr={2} mt={1}>
          <Button variant="contained" color="primary" onClick={this.onOpenModal}>
            <AddIcon />
            Add new task
          </Button>

          <Grid item xs={12} >
            <Box mt={2} mb={2}>
              {this.renderSearchBox()}
            </Box>
            {this.renderBoard()}
          </Grid>
        </Box>
      </>

    )
  }
}

const mapStateToProps = state => ({
  listTask: state.tasks.listTask,
  showModal: state.modal.showModal,
})
const mapDispatchToProps = dispatch => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  modalActions: bindActionCreators(modalActions, dispatch)
})



export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))
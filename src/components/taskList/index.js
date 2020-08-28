import React, { Component } from 'react'
import TaskItem from '../taskItem/index'
import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import styles from './styles'
class TaskList extends Component {
  render() {
    let { tasks, index, status, onUpdateTask, onDeleteTask } = this.props;
    return (
      <>
        <Grid item md={4} xs={12} key={index}>
          <Box mt={1}>
            <div>
              {status.label}
            </div>
          </Box>
          <div>
            {
              tasks.map((task, index) => {
                return (
                  <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    status={status}
                    onUpdateTask={() => onUpdateTask(task)}
                    onDeleteTask={() => onDeleteTask(task)}
                  />
                )
              })
            }
          </div>
        </Grid>
      </>
    )
  }
}
export default withStyles(styles)(TaskList)
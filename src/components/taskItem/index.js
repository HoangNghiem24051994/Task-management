import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import styles from './styles'
class TaskItem extends Component {
  render() {
    let { task, index, status, classes, onUpdateTask, onDeleteTask } = this.props;
    return (
      <>
        <Box mt={1}>
          <Card key={index}>
            <CardContent>
              <Grid container justify="space-between" direction="row" >
                <Grid item md={8} >
                  <Typography component="h2">
                    {task.title}
                  </Typography>
                </Grid>
                <Grid item md={4} container justify="flex-end">
                  {
                    status.label
                  }
                </Grid>
              </Grid>
              <Grid container>
                <p>{task.description}</p>
            </Grid>
            </CardContent>
            
            <CardActions className={classes.cardActions}>
              <Fab color="primary" aria-label="add" size="small" onClick={onUpdateTask} >
                  <Icon fontSize="small">
                    edit_icon
                  </Icon>
              </Fab>
              <Fab color="secondary" aria-label="edit" size="small" onClick={onDeleteTask} >
                  <Icon fontSize="small">
                    delete_icon
                  </Icon>
              </Fab>
            </CardActions>
          </Card>
        </Box>
      </>
    )
  }
}



export default withStyles(styles)(TaskItem)
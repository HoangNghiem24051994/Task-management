import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTES } from '../../../constans/index'
import { NavLink } from 'react-router-dom'
class Sidebar extends Component {


  toggleDrawer = value => {
    this.props.ontoggleSidebar(value);
  }
  renderList() {
    let { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="nav">
          {
            ADMIN_ROUTES.map(item => {
              return (
                <NavLink key={item.path} to={item.path} exact={item.exact} className={classes.menuLink} activeClassName={classes.menuLinkActive}>

                  <ListItem key={item.path} className={classes.menuItem} button>
                    {item.name}
                  </ListItem>
                </NavLink>
              )
            })
          }
        </List>

      </div>
    )
    return xhtml;
  }
  render() {
    let { classes, showSidebar } = this.props;
    return (
      <div>
        <Drawer
          className={classes.drawer}
          open={showSidebar}
          onClose={() => this.toggleDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="persistent"
        >
          {this.renderList()}
        </Drawer>
      </div>
    )
  }
}
export default withStyles(styles)(Sidebar)
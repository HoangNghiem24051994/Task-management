import { ThemeProvider } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flex: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});

export default styles;

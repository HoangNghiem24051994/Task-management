import React from "react";
import { Provider } from "react-redux";
import styles from "./styles";
import theme from "../../commons/themes/themes";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import configStore from "../../redux/configStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from '../../components/GlobalLoading'
import Modal from "../../components/Modal";
import { BrowserRouter, Switch } from 'react-router-dom'
import { ADMIN_ROUTES} from '../../constans/index'
import AdminLayoutRoute from '../../components/Layout/AdminLayoutRoute'
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configStore();

const renderAdminRoutes = () =>  {
  let xhtml = null;
  xhtml = ADMIN_ROUTES.map(route => {
    return (
      <AdminLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      >

      </AdminLayoutRoute>
    )
  });
  return xhtml;
}

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ToastContainer autoClose={1000} />
            <GlobalLoading />
            <Modal />
            <Switch>
              {renderAdminRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default withStyles(styles)(App);

import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import styles from './styles'

class SearchBox extends Component {
   
    render() {
         let {onChange , classes} = this.props;
        return (
            <>
                <TextField 
                    className={classes.textField}
                    label="Keyword" 
                    onChange={onChange}
                />
            </>
        )
    }
}


export default  withStyles(styles)(SearchBox);

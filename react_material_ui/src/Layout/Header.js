import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                        <Toolbar>
                            <Typography>React Material UI</Typography>
                            <div style={{right: '0px',  position: 'fixed', paddingRight: '82px'}}>
                                <Button color="inherit">Sign Up</Button>
                                <Button color="inherit">Login</Button>
                            </div>
                        </Toolbar>                        
                </AppBar>
            </Fragment>
        )
    }
}


export default Header;
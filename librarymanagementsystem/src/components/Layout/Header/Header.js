import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'


export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar color="primary">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Sample Title</Typography>
                        <div>
                            <Button color="inherit">Sign Up</Button>
                            <Button color="inherit">Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

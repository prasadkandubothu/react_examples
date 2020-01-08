import React, { Component } from 'react'
import { Grid, AppBar, Box, Button, Toolbar, BottomNavigation } from '@material-ui/core'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={{ 
                    bottom: '0px', position: 'fixed', width: '100%',
                    backgroundColor: '#3f51b5', color: 'white',
                    textAlign: 'center'
                }}>
                    <p>Posted by: Hege Refsnes</p>
                    {/* <p>Contact information: <a href="mailto:someone@example.com">
                        someone@example.com</a>.</p> */}
                </footer>
            </div>
        )
    }
}

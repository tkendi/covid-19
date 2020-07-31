import React from 'react';
import { render } from '@testing-library/react';
import { Drawer, Divider, Link } from '@material-ui/core';
import classes from '*.module.css';

const drawer = () => {
    render() {
        return (
            <div>
                <Drawer className = {classes.drawer} variant = "permanent" classes = {{paper: classes.drawerPaper}} anchor = "left">
                    <div className = {classes.toolbar} />
                    <Divider />
                    <List>
                        <Link href = "/world" component = "button" variant = "body2">World Status</Link>
                        <Link href = "/korea" component = "button" variant = "body2">Korea Status</Link>
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default drawer;

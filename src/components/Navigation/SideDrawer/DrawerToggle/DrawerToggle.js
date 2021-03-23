import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <i 
        onClick={props.clicked}
        className={`fa fa-bars fa-2x ${classes.DrawerToggle}`} 
        aria-hidden="true"></i>
);

export default drawerToggle;
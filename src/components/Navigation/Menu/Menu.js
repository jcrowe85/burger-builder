import React from 'react';

const menu = (props) => (
    <i 
        onClick={props.openSideDrawer}
        class="fa fa-bars fa-2x" 
        aria-hidden="true"></i>
);

export default menu;
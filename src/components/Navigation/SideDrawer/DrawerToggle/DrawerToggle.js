import React from 'react';

const drawerToggle = (props) => (
    <i 
        onClick={props.clicked}
        className="fa fa-bars fa-2x" 
        aria-hidden="true"></i>
);

export default drawerToggle;
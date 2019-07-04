import React from 'react';
import Auxillary from '../../Hoc/Auxillary'
import classes from './Layout.css'

const layout = (props) => (
    <Auxillary>
        <div>Toolbar , Sidedrawer, Backdrop</div>
            <main className ={classes.Content}>
            {props.children}
            </main>
    </Auxillary>
);

export default layout;
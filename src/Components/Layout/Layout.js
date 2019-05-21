import React from 'react';
import Auxilllarys from '../../Hoc/auxilllarys'

const layout = (props) => (
    <Auxilllarys>
        <div>Toolbar , Sidedrawer, Backdrop</div>
            <main>
            {props.children}
            </main>
    </Auxilllarys>
);

export default layout;
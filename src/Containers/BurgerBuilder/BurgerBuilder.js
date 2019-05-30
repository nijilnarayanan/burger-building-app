import React, { Component } from 'react'
import Auxillary from '../../Hoc/Auxillary'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxillary>
                <Burger/>
                <div>Burger Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder
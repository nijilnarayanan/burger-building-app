import React, { Component } from 'react'
import Auxillary from '../../Hoc/Auxillary'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            cheese: 0,
            bacon: 0,
            salad: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Auxillary>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Burger Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder
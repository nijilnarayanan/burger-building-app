import React, { Component} from 'react';
import Proptypes from 'prop-types'
import classes from './BurgerIngredients.css'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

    switch(this.props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>; 
            break;
        case('bread-top'):
            ingredient = (
            <div className={classes.Bread.Top}>
                <div className={classes.seeds1}></div>
                <div className={classes.seeds2}></div>
            </div>    
            );
            break;
        case('meat'):
            ingredient = <div className={classes.Meat}></div>; 
            break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>; 
            break;
        case('bacon'):
            ingredient = <div className={classes.Bacon}></div>; 
            break;
        case('salad'):
            ingredient = <div className={classes.Salad}></div>; 
            break;
        default:
            ingredient = null;
        }   

        return ingredient
    }
}

BurgerIngredients.propTypes = {
    type: Proptypes.string.isRequired
}
export default BurgerIngredients;
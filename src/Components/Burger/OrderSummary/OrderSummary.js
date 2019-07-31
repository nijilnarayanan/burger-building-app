import React from 'react';
import Button from './../../Common/Button/Button'


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map((igkey) => {
        return (
        <li key ={igkey}>
            <span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
        </li>
    )});
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Success'clicked={props.purchaseContinue}>Continue</Button>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
        </div>
    )
}

export default orderSummary
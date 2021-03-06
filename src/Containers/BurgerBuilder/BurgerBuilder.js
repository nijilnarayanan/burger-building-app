import React, { Component } from 'react'
import Auxillary from '../../Hoc/Auxillary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/Common/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    cheese: 0.3,
    bacon: 1.2,
    salad: 0.6,
    meat: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            bacon: 0,
            salad: 0,
            meat: 0,
            cheese: 0
        },
        totalprice:4,
        purchasable:false,
        purchasing:false
    }

    UpdatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey]
        })
        .reduce((sum,el) => {
            return sum + el
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalprice;
        const newprice = oldPrice + priceAddition;
        this.setState({totalprice: newprice, ingredients: updatedIngredients})
        this.UpdatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        if(oldCount <=0) {
            return
        }
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalprice;
        const newprice = oldPrice - priceAddition;
        this.setState({totalprice:newprice, ingredients:updatedIngredients})
        this.UpdatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =() => {
        alert('Hi')
    } 

    render() {
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0 ;     // salad:true, meat:false
        }
        return (
            <Auxillary>
                <Modal 
                show={this.state.purchasing} 
                modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalprice}/>
                </Modal>    
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalprice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                />
            </Auxillary>
        );
    }
}

export default BurgerBuilder
import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active textName='Burger Builder'/>
    <NavigationItem link='/' textName='Checkout'/>
    </ul>
);

export default navigationItems;
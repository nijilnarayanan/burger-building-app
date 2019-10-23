import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../Assests/Images/logo.png'

const Logo = (props) => (
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt='logo'/>
    </div>
);

export default Logo;
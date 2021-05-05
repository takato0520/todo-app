import React from 'react'
import classes from './button.module.css'

const Button = (props) => {
    return (
        <div
            className={`${classes.icon} ${classes.iconplus}`}
            onClick={props.clicked} >
            <span className={classes.icon__mark}></span>
        </div>
    )
}

export default Button;
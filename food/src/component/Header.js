import classes from './Header.module.css';
import React from 'react'
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
    <header className={classes.header}>
   <h1>ReactMeals</h1>
   

    <HeaderCartButton onClick={props.onShowCart}/>
    
    </header>
    <div className={classes["main-image"]}>
        <img src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg" alt="food"/>
   

    </div>
    </>
  )
}

export default Header
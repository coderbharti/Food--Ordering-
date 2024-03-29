import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../store/Cart-context';




function HeaderCartButton(props) {

  const cartCtx =useContext(CartContext)
  const numberOfCartItems =cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  
   
  

  
  return (
    
  <button className={classes.button}  onClick={props.onClick}>
       
       <span> Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span> 
    </button>
    
  )
}

export default HeaderCartButton;

import './App.css';
import { useState} from 'react';
import Header from './component/Header';
import Meals from './component/Meals';
import Cart from './component/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const[cartIsShown,setCartIsShown] = useState(false);
  const showCartHandler =()=>{
    setCartIsShown(true)
  };
  const hideCartHandler =()=>{
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>

      {cartIsShown && <Cart onClose={hideCartHandler}/> }
   <Header onShowCart={showCartHandler}/>
   <main>

    <Meals/>
   </main>
  
    </ CartProvider>
    
   
      
       
     
    
  );
}

export default App;

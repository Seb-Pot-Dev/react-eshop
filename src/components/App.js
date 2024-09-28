import Banner from './Banner'
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState([]);
	return (
    <>
      <Banner />
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Footer />
    </>
  );
}

export default App;

import Header from './components/Header';
import Dresses from './components/Dresses';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';


function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Dresses />
      <Cart />
      <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

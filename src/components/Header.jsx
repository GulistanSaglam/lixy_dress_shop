import { useContext } from 'react';
import logo from '../assets/logo.png';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';



export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="Dress Shop"/>
            <h1>Lixy Dress Shop</h1>
        </div>
        <nav>
            <Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}
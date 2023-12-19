import { useContext } from 'react';

import { currencyFormatter } from "../util/formatting"
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function DressItem({dress}) {
    const cartCtx = useContext(CartContext);

    function handleAddDressToCart() {
        cartCtx.addItem(dress);
    }

    return <li className="dress-item">
        <article>
            <img src={`http://localhost:3000/${dress.image}`} alt={dress.name} />
            <div>
                <h3>{dress.name}</h3>
                <p className="dress-item-price">
                    {currencyFormatter.format(dress.price)}
                </p>
                <p className="dress-item-description">{dress.description}</p>
            </div>
            <p className="dress-item-actions">
                <Button onClick={handleAddDressToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
}
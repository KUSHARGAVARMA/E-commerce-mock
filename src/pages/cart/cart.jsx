import { useCart } from '../../hooks/useCart';
import  './Cart.css';

const Cart = () => {
    const { cart } = useCart();
    console.log(cart);
    const cartItems = Object.values(cart);
  
   
return (
<>
<div className="container">
    <h1>Items in Cart</h1>
    <div className="cart-table-container">
        <table>
        <thead>
            <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {cartItems.map((item) => (
            <tr key={item.id}>
                <td>
                <div className="image-container">
                    {item.image ? (
                    <img src={item.image} alt={item.title} />
                    ) : (
                    <div>Loading Image...</div>
                    )}
                </div>
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
    </>);
};

export default Cart;


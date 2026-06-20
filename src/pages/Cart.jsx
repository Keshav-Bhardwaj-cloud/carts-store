import { useContext } from "react"
import CartContext from "../context/CartContext"
function Cart(){
    const { cart , setCart} = useContext(CartContext);
    console.log(cart)
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price*item.quantity, 0);
    }

    function removeFromCart(itemId) {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    }

    function increaseQuantity(itemId) {
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    }

    function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);

    if (item.quantity === 1) {
        setCart(
            cart.filter(item => item.id !== itemId)
        );
    } else {
        setCart(
            cart.map(item =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }
}

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <p style={{fontSize: "1.2rem", fontWeight: "600", color: "var(--accent)"}}>Total: ${calculateTotal().toFixed(2)}</p>

            {cart.length === 0 ? (
                <p style={{textAlign: "center", padding: "2rem"}}>Your cart is empty</p>
            ) : (
                <div className="cart-items-grid">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Qty: {item.quantity}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart
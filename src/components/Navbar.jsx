import {Link } from 'react-router-dom'
import { useContext } from "react";
import CartContext from "../context/CartContext";



function Navbar(){
    const { cart } = useContext(CartContext);
    




    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart({cart.reduce((total,item)=> total + item.quantity, 0)})</Link>
            
        </nav>
    )
}

export default Navbar

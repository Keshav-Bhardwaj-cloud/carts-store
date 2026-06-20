import { createContext , useState , useEffect} from "react";

const CartContext = createContext(null);

export function CartProvider({children}){
    const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
        return JSON.parse(savedCart);
    }

    return [];
});
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
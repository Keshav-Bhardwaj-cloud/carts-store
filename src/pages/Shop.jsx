import { fetchData } from "../services/api"
import { useState, useEffect } from "react"
import ProductList from "../components/ProductList"
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Shop(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cart, setCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    useEffect(() => {
        async function getProducts() {
            try {
                const data = await fetchData();
                setProducts(data);
            } catch (err) {
                setError(err.message);

            }finally{
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    function addToCart(product) {

        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {

            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ]);

    }
}
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className="shop-container">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
            />
            <div className="shop-header">
                <h1>Shop</h1>
                <p className="cart-count">Items in cart: <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span></p>
            </div>
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} addToCart={addToCart} />
            ) : (
                <div>No products found.</div>
            )}
        </div>
    )
}

export default Shop
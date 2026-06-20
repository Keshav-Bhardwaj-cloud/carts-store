import { useParams, Link } from "react-router-dom";
import { fetchData } from "../services/api";
import { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProductDetails() {
            try {
                const data = await fetchData();
                const selectedProduct = data.find(item => item.id === parseInt(id));
                setProduct(selectedProduct);
            } catch (err) {
                console.error(err);
            }
        }

        getProductDetails();
    }, [id]);

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    return (
        <div className="product-details-page">
            <h1>Product Details</h1>
            {product ? (
                <div className="product-details-card">
                    <img src={product.image} alt={product.title} />
                    <div className="product-details-copy">
                        <div>
                            <h2>{product.title}</h2>
                            {product.category && (
                                <span className="detail-tag">{product.category}</span>
                            )}
                        </div>
                        <p className="product-details-price">${product.price.toFixed(2)}</p>
                        <p>{product.description}</p>
                        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                        <Link to="/shop">Back to Shop</Link>
                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
}
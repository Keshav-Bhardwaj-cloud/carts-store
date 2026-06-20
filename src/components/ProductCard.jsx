import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

function ProductCard({ product ,addToCart}) {
    const cartContext = useContext(CartContext);
    console.log(cartContext)
    return (
        <div className="productcard">
            <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-image-wrapper">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="image-overlay" aria-hidden></div>
                </div>
                <div className="product-content">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                        <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </Link>
            <div className="card-actions">
                <button className="add-to-cart-btn" onClick={(e) => {e.preventDefault(); addToCart(product)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
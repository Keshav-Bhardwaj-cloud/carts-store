import { Link } from 'react-router-dom'

function Home(){
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our Store</h1>
                    <p className="hero-subtitle">Discover premium products with unbeatable quality and prices</p>
                    <Link to="/shop" className="hero-btn">Start Shopping</Link>
                </div>
                <div className="hero-accent"></div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">🚚</div>
                    <h3>Fast Shipping</h3>
                    <p>Quick and reliable delivery to your doorstep</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💳</div>
                    <h3>Secure Payment</h3>
                    <p>Safe and encrypted transactions guaranteed</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h3>Quality Assured</h3>
                    <p>All products verified and premium quality</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Explore Our Collections</h2>
                <p>Find exactly what you're looking for</p>
                <Link to="/shop" className="cta-btn">Browse Products</Link>
            </section>
        </div>
    )
}

export default Home
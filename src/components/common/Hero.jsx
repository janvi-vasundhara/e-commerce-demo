import { Link } from "react-router-dom"
import '../../styles/common/Hero.css'

function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Summer Collection 2026</h1>
  
          <p>
            Discover the latest fashion trends with up to 50% OFF on selected
            products.
          </p>
  
          <Link to="/products" className="hero__cta">Shop Now</Link>
        </div>
  
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
            alt="Hero Banner"
          />
        </div>
      </section>
    );
  }
  
  export default Hero;
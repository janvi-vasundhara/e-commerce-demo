import '../../styles/product/ProductCard.css'

function ProductCard({ product }) {
    return (
        <li className="product-card">
            <div className="product-card__inner">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-card__image"
                />
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__price">${product.price.toFixed(2)}</p>
            </div>
        </li>
    )
}

export default ProductCard

import ProductCard from "./ProductCard"
import '../../styles/product/ProductList.css'

function ProductList({ products }) {
    if (products.length === 0) {
        return <p className="product-list__empty">No products found.</p>
    }

    return (
        <section className="product-list">
            <ul className="product-list__grid">
                {
                    products.map((product) => { return <ProductCard product={product} key={product.id} /> })
                }
            </ul>
        </section>
    )
}

export default ProductList

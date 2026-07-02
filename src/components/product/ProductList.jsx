import ProductCard from "./ProductCard"
import '../../styles/product/ProductList.css'

function ProductList({ products }) {
    console.log("products:", products);
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

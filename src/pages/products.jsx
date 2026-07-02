import { useState } from "react"
import Header from "../components/common/Header"
import Navbar from "../components/common/Navbar"
import SearchBar from "../components/common/SearchBar"
import ProductList from "../components/product/ProductList"
import Footer from "../components/common/Footer"
import products from "../data/products"
import "../styles/pages/Products.css"

function Products() {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <section className="products-page">
          <h1 className="products-page__title">All Products</h1>
          <p className="products-page__subtitle">
            Browse our full collection of {products.length} products
          </p>
        </section>
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filteredProducts} />
      </main>

      <Footer />
    </>
  )
}

export default Products

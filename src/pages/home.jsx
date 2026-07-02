import { useState } from "react"
import Header from "../components/common/Header"
import Navbar from "../components/common/Navbar"
import Hero from "../components/common/Hero"
import SearchBar from "../components/common/SearchBar"
import ProductList from "../components/product/ProductList"
import Footer from "../components/common/Footer"
import products from "../data/products"

function Home() {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Hero />
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filteredProducts} />
      </main>

      <Footer />
    </>
  )
}

export default Home

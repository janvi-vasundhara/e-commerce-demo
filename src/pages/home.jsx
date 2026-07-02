import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import SearchBar from "../components/common/SearchBar";
import ProductList from "../components/product/ProductList";
import Footer from "../components/common/Footer";
import products from "../data/products";

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Hero />
        <SearchBar />
        <ProductList products={products} />
      </main>

      <Footer />
    </>
  );
}

export default Home;
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Products from "./pages/products"
import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

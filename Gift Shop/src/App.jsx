import { ProductsList } from "./Componets/Products.jsx"
import { products as initalProducts } from "./Mocks/products.json"
import { useState } from "react"
import { Header } from "./Componets/Header.jsx"
//import { Filterxt } from "./Context/FilterContext.jsx";
import { useFilter } from "./hooks/useFilter.js"
import { Cart } from "./Componets/Cart.jsx"
import { CartProvider } from "./Context/CartContex.jsx"

function App() {
  const [products] = useState(initalProducts)
  const { filterProducts } = useFilter()

  const filteredProduct = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <ProductsList products={filteredProduct} />
    </CartProvider>
  )
}

export default App

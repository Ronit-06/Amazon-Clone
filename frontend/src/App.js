import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CartProductPage from "./pages/CartProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/:id" element={<CartProductPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

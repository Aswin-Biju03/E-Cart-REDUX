import "./App.css";
import { Routes,Route } from "react-router-dom";
import Products from "./Pages/Products"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import View from "./Pages/View"
import PageNotFound from "./Pages/PageNotFound"
import Footer from "./Components/Footer"

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/products/:id" element={<View/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
  <Footer/>
  </>;
}

export default App;

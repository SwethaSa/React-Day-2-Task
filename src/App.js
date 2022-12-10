import Footer from "./Footer";
import data from "./data.json";
import { useState } from "react";
import NaviBar from "./Navbar";
import BlackNav from "./BlackNav.js";
import Cards from "./Product";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const myProducts = (e) => {
    if (e.target.innerText === "Add to cart") {
      addItem(e);
    } else if (e.target.innerText === "Remove from cart") {
      removeItem(e);
    }
  };

  const addItem = (e) => {
    setCartCount(() => cartCount + 1);
    e.target.innerText = "Remove from cart";
    e.target.classList.value = "btn btn-outline-danger";
  };

  const removeItem = (event) => {
    setCartCount(() => cartCount - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "btn btn-outline-dark";
  };
  return (
    <>
      <NaviBar cartCount={cartCount} />
      <BlackNav />
      <Cards data={data} myProducts={myProducts} />
      <Footer />
    </>
  );
}

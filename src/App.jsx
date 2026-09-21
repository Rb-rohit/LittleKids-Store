import { useEffect, useState } from "react";
import { useLocation } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const { pathname } = useLocation();
  const addCart = (product) => setCart((items) => {
    const existing = items.find((item) => item.id === product.id);
    return existing
      ? items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...items, { ...product, qty: 1 }];
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const productMatch = pathname.match(/^\/products\/([^/]+)$/);
  let page;
  if (pathname === "/") page = <Home addCart={addCart} />;
  else if (pathname === "/shop") page = <Shop addCart={addCart} />;
  else if (productMatch) page = <Product addCart={addCart} productId={productMatch[1]} />;
  else if (pathname === "/about") page = <About />;
  else if (pathname === "/contact") page = <Contact />;
  else if (pathname === "/cart") page = <Cart cart={cart} setCart={setCart} />;
  else page = <Home addCart={addCart} />;

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", minHeight: "100vh", background: "#FFFAF5" }}>
      <Navbar cnt={count} />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import CartComponent from "./components/CartComponent";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <NavbarComponent setShowCart={handleShowCart} />
      <Header />
      {showCart && <CartComponent setShowCart={handleShowCart} />}
      <Footer />
    </div>
  );
}

export default App;

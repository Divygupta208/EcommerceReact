import { useContext, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Cart } from "./store/CartContext";
import { Link, NavLink, Navigate, redirect } from "react-router-dom";
import CartComponent from "./CartComponent";

function NavbarComponent() {
  const { cart, isLoggedIn } = useContext(Cart);
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = cart.reduce(
    (total, item) => total + parseInt(item.quantity, 10),
    0
  );

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Nav className="mx-auto gap-5 navbar-collapsed">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "inactive";
              }}
            >
              <h4>Home</h4>
              <div className="nav-line"></div>
            </NavLink>

            <NavLink
              to="/store"
              className={({ isActive }) => {
                return isActive ? "active" : "inactive";
              }}
            >
              <h4>Store</h4>
              <div className="nav-line"></div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "active" : "inactive";
              }}
            >
              <h4>About</h4>
              <div className="nav-line"></div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "active" : "inactive";
              }}
            >
              <h4>Contact-Us</h4>
              <div className="nav-line"></div>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return isActive ? "active" : "inactive";
              }}
            >
              <h4>Log-in</h4>
              <div className="nav-line"></div>
            </NavLink>
          </Nav>
          <Button
            onClick={handleShowCart}
            variant="outline-info"
            className="d-flex p-1 gap-2 justify-content-evenly  align-items-center"
          >
            <h6>Cart</h6>
            <Badge bg="secondary">{totalQuantity}</Badge>
          </Button>
        </Container>
      </Navbar>
      {showCart && <CartComponent setShowCart={handleShowCart} />}
    </>
  );
}

export default NavbarComponent;

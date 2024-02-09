import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Nav className="mx-auto gap-4 navbar-collapsed">
            <Nav.Link href="#home">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#Store">
              <h4>Store</h4>
            </Nav.Link>
            <Nav.Link href="#About">
              <h4>About</h4>
            </Nav.Link>
          </Nav>
          <Button
            onClick={props.setShowCart}
            variant="outline-info"
            className="d-flex p-1 gap-2 justify-content-evenly  align-items-center"
          >
            <h6>Cart</h6>
            <Badge bg="secondary">0</Badge>
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

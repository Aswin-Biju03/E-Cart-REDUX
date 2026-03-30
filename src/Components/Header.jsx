import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function Header({insideProducts}) {
  return (
    <div>
      <Navbar expand="lg" className="bg-primary fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="text-light text-decoration-none">
              <FontAwesomeIcon icon={faTruckFast} /> E-Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                {insideProducts && <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products here"
                />}
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"/wishlist"}
                  className="text-light text-decoration-none"
                >
                  <FontAwesomeIcon icon={faHeart} /> WishList
                  <Badge pill bg="secondary">
                    10
                  </Badge>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"/cart"}
                  className="text-light text-decoration-none"
                >
                  <FontAwesomeIcon icon={faCartShopping} /> Cart
                  <Badge pill bg="secondary">
                    10
                  </Badge>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

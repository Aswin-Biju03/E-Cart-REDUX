import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../redux/slice/productSlice";
function Header({ insideProducts }) {
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);

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
                {insideProducts && (
                  <input
                    onChange={(e) => dispatch(searchProduct(e.target.value))}
                    type="text"
                    className="form-control"
                    placeholder="Search Products here"
                  />
                )}
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"/wishlist"}
                  className="text-light text-decoration-none"
                >
                  <FontAwesomeIcon icon={faHeart} /> WishList
                  <Badge pill bg="secondary">
                    {userWishlist?.length}
                  </Badge>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/cart"} className="text-light text-decoration-none">
                  <FontAwesomeIcon icon={faCartShopping} /> Cart
                  <Badge pill bg="secondary">
                    {userCart?.length}
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

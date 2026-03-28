import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { faFacebookF,faTwitter, faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      style={{ height: "350px" }}
      className="bg-primary text-light d-flex justify-content-center align-items-center flex-column"
    >
      <div className="d-flex justify-content-evenly mb-5 w-100">
        <div style={{ width: "400px" }}>
          <h3 className="text-light">
            <FontAwesomeIcon icon={faTruckFast} className="me-2" />
            E-Cart
          </h3>
          <p>
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors.
          </p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div>
          <h3 className="text-light">Links</h3>

          <div className="d-flex flex-column gap-2">
            <Link
              to="/"
              target="_blank"
              className="text-light text-decoration-none"
            >
              Home
            </Link>
            <Link
              to="/wishlist"
              target="_blank"
              className="text-light text-decoration-none"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              target="_blank"
              className="text-light text-decoration-none"
            >
              Cart
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-light">Guides</h3>

          <div className="d-flex flex-column gap-2">
            <a
              href={"https://react.dev/"}
              target="_blank"
              className="text-light text-decoration-none"
            >
              React
            </a>
            <a
              href={"https://redux.js.org/"}
              target="_blank"
              className="text-light text-decoration-none"
            >
              Redux
            </a>
            <a
              href={"https://reactrouter.com/"}
              target="_blank"
              className="text-light text-decoration-none"
            >
              React Router
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-light">Contact Us</h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <Button className="btn">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-light ms-1"
              />
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

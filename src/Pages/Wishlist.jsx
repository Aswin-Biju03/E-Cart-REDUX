import React from "react";
import Header from "../Components/Header";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeartCircleCheck,
  faHeartCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Wishlist() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <>
          <h1 className="pt-5 text-primary">User Wishlist</h1>
          <div className="row pt-5">
            <div className="col-md-3 mb-2">
              <Card>
                <Card.Img
                  style={{ height: "250px" }}
                  variant="top"
                  src="https://static.vecteezy.com/system/resources/previews/047/084/204/non_2x/shopping-cart-full-of-items-on-transparent-background-free-png.png"
                />
                <Card.Body className="text-center">
                  <Card.Title>Card Title</Card.Title>
                  <div className="d-flex justify-content-evenly">
                    <button className="btn text-danger fs-4">
                      <FontAwesomeIcon icon={faHeartCircleXmark} />
                    </button>
                    <button className="btn btn-success fs-4">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Wishlist;

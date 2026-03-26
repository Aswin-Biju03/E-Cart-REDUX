import React from "react";
import Header from "../Components/Header";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Header />
      <div className="m-5">
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
                <Link to={'/products/id'} className='btn btn-primary'>View More</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

import React from "react";
import Header from "../Components/Header";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function View() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div style={{ height: "80vh" }} className="row pt-5 align-items-center">
          <div className=" col-lg-6 text-center">
            <img
              className="img-fluid"
              src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
              alt="product"
            />
            <div className="d-flex justify-content-evenly mt-5">
              <div className="button btn btn-info">Add to wishlist</div>
              <div className="button btn btn-success">Add to Cart</div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Title</h3>
            <h2 className="text-danger">$ 30</h2>
            <h4>Brand: </h4>
            <h4>Category : </h4>
            <h4>Description :</h4>
            <h3>Client Reviews :</h3>
            <div className="border rounded p-2 shadow">
              <p>
                <span className="fw-bolder">name:</span>message
              </p>
              <p>
                Rating : 4{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-warning"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;

import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="text-danger my-5">User Cart Summary</h1>
        <div className="row pt-5">
          <div className="col-md-8 border rounded p-5">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>
                    <img
                      width={"50px"}
                      height={"50px"}
                      src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
                      alt=""
                    />
                  </td>
                  <td>
                    <div className="d-flex">
                      <button className="btn btn-outline-danger fs-1">-</button>
                      <input
                        style={{ width: "50px" }}
                        type="text"
                        className="form-control"
                        value={20}
                      />
                      <button className="btn btn-outline-success fs-1">
                        +
                      </button>
                    </div>
                  </td>
                  <td>$ 30</td>
                  <td>
                    <button className="btn text-danger"> X</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="float-end mt-3">
              <button className="btn btn-danger">Empty Cart</button>
              <Link to={"/"} className="btn btn-success ms-5">
                Shop More
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-5 shadow">
              <h3>
                Total <span>4</span> Items :{" "}
                <span className="text-danger">$</span>
              </h3>
              <h3>
                Total Amount : <span className="text-danger">$</span>
              </h3>
              <hr />
              <div className="d-grid">
                <button className="btn btn-success">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

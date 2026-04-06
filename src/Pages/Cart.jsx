import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeCartItem,
  emptyCart,
} from "../redux/slice/cartSlice";
import Swal from "sweetalert2";

function Cart() {
  const userCart = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCartTotal(userCart.reduce((acc, cur) => acc + cur.totalPrice, 0));
  }, [userCart]);

  const handledecrementCart = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCart(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    Swal.fire({
      title: "Success",
      text: "Thank you for Purchasing with us...",
      icon: "success",
    });
    navigate("/");
  };

  return (
    <>
      <Header />

      {userCart.length > 0 ? (
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
                  {userCart.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>

                      <td>
                        <img
                          width="50px"
                          height="50px"
                          src={item.thumbnail}
                          alt=""
                        />
                      </td>

                      <td>
                        <div className="d-flex">
                          <button
                            onClick={() => handledecrementCart(item)}
                            className="btn btn-outline-danger fs-5"
                          >
                            -
                          </button>

                          <input
                            style={{ width: "50px" }}
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />

                          <button
                            onClick={() => dispatch(incrementCart(item.id))}
                            className="btn btn-outline-success fs-5"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td>$ {item.totalPrice}</td>

                      <td>
                        <button
                          onClick={() => dispatch(removeCartItem(item.id))}
                          className="btn text-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="float-end mt-3">
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="btn btn-danger"
                >
                  Empty Cart
                </button>

                <Link to={"/"} className="btn btn-success ms-5">
                  Shop More
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded p-5 shadow">
                <h3>
                  Total <span>{userCart.length} items</span>
                </h3>

                <h3>
                  Total Amount :{" "}
                  <span className="text-danger">$ {cartTotal}</span>
                </h3>

                <hr />

                <div className="d-grid">
                  <button
                    onClick={() => handleCheckout()}
                    className="btn btn-success"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h1>Cart is Empty</h1>
          <Link to={"/"} className="btn btn-primary mt-3">
            Shop Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;

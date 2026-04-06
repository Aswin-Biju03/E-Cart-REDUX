import React from "react";
import Header from "../Components/Header";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { addToCart } from "../redux/slice/cartSlice";
import {
  faCartPlus,
  faHeartCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWishlist } from "../redux/slice/wishlistSlice";

function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const handleCart = (product) => {
    const existingProduct = userCart?.find((item) => item.id === product?.id);
    dispatch(addToCart(product));
    dispatch(removeWishlist(product.id))
    Swal.fire({
      title: "Success",
      text: existingProduct
        ? `Product ${product.title} quantity increased`
        : "Product added to cart",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <Header />
      <div className="container my-5">
        {userWishlist?.length > 0 ? (
          <>
            <h1 className="pt-5 text-primary">User Wishlist</h1>
            <div className="row pt-5">
              {userWishlist?.map((item) => (
                <div key={item?.id} className="col-md-3 mb-2">
                  <Card>
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={item?.thumbnail}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{item?.title}</Card.Title>
                      <div className="d-flex justify-content-evenly">
                        <button
                          onClick={() => dispatch(removeWishlist(item?.id))}
                          className="btn text-danger fs-4"
                        >
                          <FontAwesomeIcon icon={faHeartCircleXmark} />
                        </button>
                        <button onClick={()=>dispatch()} className="btn btn-success fs-4">
                          <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            style={{ height: "100vh" }}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h1>Wishlist is Empty</h1>
            <Link to={"/"} className="btn btn-primary">
              Add More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;

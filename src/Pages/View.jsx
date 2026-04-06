import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slice/wishlistSlice";
import Swal from "sweetalert2";
import { addToCart } from "../redux/slice/cartSlice";

function View() {
  const { id } = useParams();
  // console.log(id);
  const { allProducts } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState({});
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  console.log(product);

  useEffect(() => {
    setProduct(allProducts?.find((item) => item?.id == id));
  }, []);
  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(
      (item) => item.id == product?.id,
    );
    if (existingProduct?.title) {
      Swal.fire({
        title: "Sorry",
        text: "Product Already in Wishlist",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      dispatch(addToWishlist(product));
    }
  };

const handleCart = () => {
  const existingProduct = userCart?.find(
    (item) => item.id === product?.id
  );

  dispatch(addToCart(product));

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
        <div style={{ height: "80vh" }} className="row pt-5 align-items-center">
          <div className=" col-lg-6 text-center">
            <img className="img-fluid" src={product?.thumbnail} />
            <div className="d-flex justify-content-evenly mt-5">
              <div onClick={handleWishlist} className="button btn btn-info">
                Add to wishlist
              </div>
              <div onClick={handleCart} className="button btn btn-success">
                Add to Cart
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{product?.title}</h3>
            <h2 className="text-danger">$ {product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Description :{product?.description}</h4>
            <h3>Client Reviews :</h3>
            {product?.reviews?.map((item, index) => (
              <div
                key={`${item?.date} -${index}`}
                className="border rounded p-2 shadow"
              >
                <p>
                  <span className="fw-bolder">name:{item?.reviewerName}</span>:{" "}
                  {item?.comment}
                </p>
                <p>
                  Rating : {item?.rating}
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;

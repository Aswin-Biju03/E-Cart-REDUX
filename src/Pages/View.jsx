import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function View() {
  const { id } = useParams();
  // console.log(id);
  const { allProducts } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState({});

  console.log(product);

  useEffect(() => {
    setProduct(allProducts?.find((item) => item?.id == id));
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div style={{ height: "80vh" }} className="row pt-5 align-items-center">
          <div className=" col-lg-6 text-center">
            <img className="img-fluid" src={product?.thumbnail} />
            <div className="d-flex justify-content-evenly mt-5">
              <div className="button btn btn-info">Add to wishlist</div>
              <div className="button btn btn-success">Add to Cart</div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{product?.title}</h3>
            <h2 className="text-danger">$ {product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Description :{product?.description}</h4>
            <h3>Client Reviews :</h3>
            {product?.reviews?.map((item) => (
              <div key={item?.date} className="border rounded p-2 shadow">
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

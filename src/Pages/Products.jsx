import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slice/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const dispatch = useDispatch();
  const { loading, allProducts, error } = useSelector(
    (state) => state.productReducer,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length / productsPerPage);
  const currentPageLastIndex = currentPage * productsPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage;
  const visibleProductsArray = allProducts?.slice(
    currentPageFirstIndex,
    currentPageLastIndex,
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const navigateNext = () => {
    currentPage != totalPages && setCurrentPage(currentPage + 1);
  };
  const navigateBack = () => {
    currentPage != 1 && setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <Header insideProducts />
      <div className="m-5">
        {loading ? (
          <div className="text-center py-5 fw-bolder">Loading...</div>
        ) : (
          <div className="row pt-5">
            {allProducts?.length > 0 ? (
              visibleProductsArray?.map((product) => (
                <div key={product?.id} className="col-md-3 mb-2">
                  <Card>
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={product?.thumbnail}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{product?.title}</Card.Title>
                      <Link
                        to={`/products/${product?.id}`}
                        className="btn btn-primary"
                      >
                        View More
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className="fw-bolder">Product Not Found</div>
            )}
          </div>
        )}
        <div className="text-center my-3 fs-5 fw-bolder">
          <button onClick={navigateBack} className="btn btn-primary">
            <FontAwesomeIcon icon={faBackward} />
          </button>
          {currentPage} of {totalPages}
          <button onClick={navigateNext} className="btn btn-primary">
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;

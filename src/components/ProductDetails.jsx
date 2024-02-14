import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Cart } from "./store/CartContext";
import StarRating from "./StarRating";
import Review from "./Review";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useContext(Cart);
  const [product, setProduct] = useState(null);

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = products.find((p) => p.id === parseInt(productId));
      setProduct(productData);
      if (
        productData &&
        productData.imageUrl &&
        productData.imageUrl.length > 0
      ) {
        setCurrentImage(productData.imageUrl[0]);
      }
    };

    fetchProduct();
  }, [productId, products]);

  const handleImageClick = (url) => {
    setCurrentImage(url);
  };

  const addReview = (newReview) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...(prevProduct.reviews || []), newReview],
    }));
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="main-product">Hello</div>
      <div className="product-details">
        <div>
          <div className="product-images">
            <div className="image-section">
              {product.imageUrl.map((url, index) => (
                <img
                  key={index}
                  className="section-image"
                  src={url}
                  alt={`Product Image ${index + 1}`}
                  onClick={() => handleImageClick(url)}
                />
              ))}
            </div>
            <div className="image-main">
              <img className="image" src={currentImage} />
              <div className="overlay">Hello</div>
            </div>
          </div>
          <div className="product-buttons">
            <button>Add To Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="section-2">
          <div className="product-description">
            <h3>{product.title}</h3>
            <p className="bg-primary-subtle">
              Best Phone Under This Segment. Grap Your {product.title} at
              exciting price
            </p>
            <p className="bg-success-subtle">Special Price</p>
            <h5 className="product-price">${product.price}</h5>
            <StarRating rating={product.ratings}>{product.ratings}</StarRating>
            <Review
              productReviews={product.reviews || []}
              addReview={addReview}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

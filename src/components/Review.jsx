// Review.js
import React, { useState } from "react";
import "./Review.css";

const Review = ({ productReviews, addReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== "") {
      const newReview = {
        text: reviewText,
        user: "me",
        date: new Date().toLocaleDateString(),
        image: selectedImage,
      };
      addReview(newReview);
      setReviewText("");
      setSelectedImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="review-section">
      <h3>User Reviews</h3>
      <div className="user-reviews">
        {productReviews.map((review, index) => (
          <div key={index} className="user-review">
            <p className="review-info">
              <p>{review.text}</p>
              <span>{review.user}</span>
              <span>{review.date}</span>
            </p>
            {review.image && (
              <img
                src={URL.createObjectURL(review.image)}
                alt="Review Image"
                className="review-image"
              />
            )}
          </div>
        ))}
      </div>
      <div className="user-review-input">
        <textarea
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className="selected-image"
          />
        )}
        <button onClick={handleReviewSubmit}>Add Review</button>
      </div>
    </div>
  );
};

export default Review;

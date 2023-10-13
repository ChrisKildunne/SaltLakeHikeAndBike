import * as reviewsAPI from '../../utilities/reviews-api';
import React, { useState } from "react";

export default function ReviewForm({ trailId }) {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);

    const addReview = async () => {
        const reviewData = {
            text: reviewText,
            rating: rating,
        };

        const newReview = await reviewsAPI.addNew(trailId, reviewData);

        setReviews([...reviews, newReview]);
        setReviewText("");
        setRating(0);
    }

    const handleAddReview = (evt) => {
        evt.preventDefault();
        addReview();
    }

    return (
        <>
            <h3>Add a review:</h3>
            <form onSubmit={handleAddReview}>
                <input
                    className="reviewInput"
                    placeholder="Add review Here"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <span>Rating</span>
                <select
                    className="form-select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">Add Review</button>
            </form>
        </>
    )
}

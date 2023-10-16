import * as reviewsAPI from '../../utilities/reviews-api';
import React, { useEffect, useState } from "react";

export default function ReviewForm({ trailId, user }) {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [editIndex, setEditIndex] = useState(false)
    const [showEdit, setShowEdit] =useState(false)



    const addReview = async () => {
        const reviewData = {
            text: reviewText,
            rating: rating,
        };

        const newReview = await reviewsAPI.addNew(trailId, reviewData);
        setReviews(newReview);
        setReviewText("");
        setRating(0);
    }
    useEffect(() => {
        async function getReviews(){
            const reviewData = await reviewsAPI.getAll(trailId)
            setReviews(reviewData)
            console.log(reviews,'these are the reviews')
           
        }
        getReviews()
    },[])

    const handleAddReview = (evt) => {
        evt.preventDefault();
        addReview();
    }
    const deleteReview = async (idx, reviewId, trailId) => {
       await reviewsAPI.deleteReview(reviewId, trailId)
       reviews.splice(idx,1)
       setReviews([...reviews])
    }
    const editReview = (idx) => {
        setReviewText(reviews[idx].text);
        setRating(reviews[idx].rating);
        setEditIndex(idx);
       
        setShowEdit(true)
    }
    const saveReview = async () => {
        const reviewId = reviews[editIndex]._id
        const updatedReviews = await reviewsAPI.editReview(trailId, reviewId, reviewText, rating)  
        const updatedReviewsArray = [...reviews];
        updatedReviewsArray[editIndex] = updatedReviews
        setShowEdit(false);
        setReviews(updatedReviewsArray) 
        setEditIndex(null)
        console.log('updated',updatedReviewsArray)
        console.log(editIndex,'editINde')
    }

    return (
        <>
        {user && (
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
                <>
                </>
                { !showEdit ? 
            <button type="submit">Add Review</button>
           :
           <button type = "button" onClick = {saveReview}>Edit</button>
                }
            </form>
            </>
        )}
            <div>
                {reviews.map((review,idx)=>(
                    <div key={idx}>
                        <p>{review.text}</p>
                        <p>{review.rating}</p>
                        <p>{review.user && review.user.name}</p>
                        <button onClick={() => deleteReview(idx, review._id, trailId)}>Delete Review</button>
                        <button onClick={() => editReview(idx)}> Edit Review</button>
                    </div>
                ))}
            </div>
        </>
    )
}

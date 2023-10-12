export async function addNew(trailId,reviewText, rating, reviewId){
    const payload = {text : reviewText, rating: rating, reviewId: reviewId }
    return sendRequest(`${BASE_URL}/${trailId}`, 'POST', payload)
}
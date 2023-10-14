import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function addNew(trailId,reviewData){
    console.log(trailId, reviewData)
    return sendRequest(`${BASE_URL}/${trailId}`, 'POST', reviewData)
}
export async function getAll(trailId){
    return sendRequest(`${BASE_URL}/${trailId}`)
}
export async function deleteReview(reviewId, trailId){
    console.log(trailId, reviewId);
    return sendRequest(`${BASE_URL}/${trailId}/${reviewId}`, 'DELETE');
}

import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function addNew(trailId,reviewData){
    console.log(trailId, reviewData)
    return sendRequest(`${BASE_URL}/${trailId}`, 'POST', reviewData)
}
export async function getAll(trailId){
    return sendRequest(`${BASE_URL}/${trailId}`)
}
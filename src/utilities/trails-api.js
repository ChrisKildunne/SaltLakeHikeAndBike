import sendRequest from './send-request';
const BASE_URL = '/api/trails';

export async function addNew(trailData){
    return sendRequest(`${BASE_URL}`, 'POST', trailData)
}

export async function getAll(){
    return sendRequest(`${BASE_URL}`)
}

export async function getTrailById(id) {
    return sendRequest(`${BASE_URL}/${id}`); 
  }
  
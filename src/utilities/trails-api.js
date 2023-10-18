import { getToken } from "./users-service";
import sendRequest from './send-request';
const BASE_URL = '/api/trails';
const Trail_Url='/api/trails/nearby?latitude=40&longitude=-111'


export async function addNew(trailData){
    return sendRequest(`${BASE_URL}`, 'POST', trailData)
}

export async function getAll(){
    return sendRequest(`${BASE_URL}`)
}

export async function getTrailById(id) {
    console.log(id)
    return sendRequest(`${BASE_URL}/${id}`); 
}

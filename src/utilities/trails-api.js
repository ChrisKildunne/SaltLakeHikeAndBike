import sendRequest from './send-request';
const BASE_URL = '/api/trails';

export async function addNew(){
    return sendRequest(`${BASE_URL}`, 'POST')
}

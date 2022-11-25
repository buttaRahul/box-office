const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString){
    const response = await fetch(`${API_BASE_URL}${queryString}`).then(resp => resp.json());
    // throw new Error('oops');
    return response;
}
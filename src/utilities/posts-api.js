import {getToken} from './users-service';
const BASE_URL = '/api/posts';

export function create(item) {
  return sendRequest(`${BASE_URL}`, 'POST', item);
}

export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}


export function updatedPost(post) {
  // console.log('postf',post);
  return sendRequest(`${BASE_URL}/${post._id}`, 'PUT', post);
}

export function getAll() {
  return sendRequest(BASE_URL);
}


async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // console.log("res",res);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
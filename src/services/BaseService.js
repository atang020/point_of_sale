import axios from 'axios';

export function buildDeleteAxios(url, id) {
  return axios({
    url: `${url}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  })
};

export function buildPostAxios(url, body) {
  return axios({
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: JSON.stringify(body),
  })
};

export function buildPutAxios(url, body) {
  return axios({
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    data: JSON.stringify(body),
  })
};

export function buildGETAxios(url) {
  return axios({
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
  });
}

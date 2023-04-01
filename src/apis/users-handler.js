import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5152/users"
    : "https://campaignservice-production.up.railway.app/users";

export function postNewUser(access_token) {
  return axios.post(`${URL}/${access_token}`);
}

export function getUserById(id) {
  return axios.get(`${URL}/` + id);
}

export function getAllUsers() {
  return axios.get(`${URL}/`);
}

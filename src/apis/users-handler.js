import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5152/users"
    : "https://campaignservice-production.up.railway.app/users";

export function postNewUser(access_token) {
  return axios.post(`${URL}/${access_token}`);
}

export function postUserChanges(userId, infoData) {
  return axios.post(URL + "/" + userId, infoData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getUserById(id) {
  return axios.get(`${URL}/` + id);
}

export function getAllUsers() {
  return axios.get(`${URL}/`);
}

export function addFavorite(id, initiativeId) {
  return axios.post(`${URL}/` + id + "/favorite/" + initiativeId);
}

export function getFavoriteInitiatives(id) {
  return axios.get(`${URL}/` + id + "/favorite");
}

export function removeFavorite(id, initiativeId) {
  return axios.delete(`${URL}/` + id + "/favorite/" + initiativeId);
}
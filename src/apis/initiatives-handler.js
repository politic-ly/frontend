import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5152/initiatives"
    : "https://campaignservice-production.up.railway.app/initiatives";

export function postInitiative(formData) {
  return axios.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function getInitiativeById(id) {
  return axios.get(URL + "/" + id);
}

export function getAllInitiatives() {
  return axios.get(URL);
}

export function getAllProfessors() {
  return axios.get(`${URL}/`);
}

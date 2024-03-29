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

export function postEvent(initiativeId, formData) {
  return axios.post(URL + "/" + initiativeId + "/event/new", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getInitiativesByUser(userId) {
  return axios.get(URL + `/user/${userId}`)
}

export function getInitiativeById(id) {
  return axios.get(URL + "/" + id);
}

export function getAllInitiatives() {
  return axios.get(URL);
}

export function getInitiativesByIds(ids) {
  const formData = {
    ids: ids,
  };

  return axios.post(URL + "/list/ids", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function postAnnouncement(initiativeId, formData) {
  return axios.post(URL + "/" + initiativeId + "/announcement/new", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
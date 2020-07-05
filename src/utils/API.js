import axios from "axios";

export default {
  // Gets from the Google API
  get: function(q) {
    return axios.get("/api/google", { params: { q: "name:" + q } });
  },
  // Gets all
  getSaved: function() {
    return axios.get("/api/");
  },
  // Gets with the given id
  getSavedById: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes with the given id
  delete: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves to the database
  save: function(Data) {
    return axios.post("/api/saved", Data);
  }
};

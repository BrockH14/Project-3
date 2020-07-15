import axios from "axios";

export default {
  // Gets all
  getSaved: function() {
    return axios.get("/api/item");
  },
  // Gets with the given id
  getSavedById: function(id) {
    return axios.get("/api/item/" + id);
  },
  // Deletes with the given id
  delete: function(id) {
    return axios.delete("/api/item/" + id);
  },
  // Saves to the database
  saveItem: function(data) {
    return axios.post("/api/item", data);
  }
};

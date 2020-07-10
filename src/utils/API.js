import axios from "axios";

export default {
  // Gets all
  getSaved: function() {
    return axios.get("/api/saved");
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

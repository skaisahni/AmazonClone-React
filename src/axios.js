import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  
  baseURL: "https://us-central1-skai-48c23.cloudfunctions.net/api",
  //"http://localhost:5001/skai-48c23/us-central1/api",
});

export default instance;



import axios from "axios";
import queryString from "query-string";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export default apiClient;

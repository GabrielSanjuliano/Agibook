import axios from "axios";

export const api = axios.create({
  baseURL: "http://danielmendes.xyz:3333",
});

import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_FIREBASE,
});

export default API;

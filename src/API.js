import axios from "axios";
const BaseURL = "http://127.0.0.1:800/api";
const API = axios.create({ baseURL: BaseURL });
export default API;

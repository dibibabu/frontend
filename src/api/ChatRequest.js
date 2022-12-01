import axios from 'axios';
const API = axios.create({baseURL: "https://meeter.gq"})


export const userChats = (id) => API.get(`/chat/${id}`)
export const chatRequest = (data) => API.post(`/chat`,data)
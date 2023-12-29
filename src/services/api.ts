import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/'
})

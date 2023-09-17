import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Add a request interceptor to check for token before sending a request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("quvorUserToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// Add a response interceptor to set token as cookie after receiving a response
instance.interceptors.response.use(
  (response) => {
    const token = response.headers["authorization"];
    if (token) {
      localStorage.setItem("quvorUserToken", token);
    }
    return response;
  },
  (error: any) => Promise.reject(error)
);

export default instance;

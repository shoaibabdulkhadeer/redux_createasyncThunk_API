import axios from "axios";
 
const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
});

// middleware
axiosInstance.interceptors.response.use((response) => response,
 (err) => Promise.reject("Something went wrong")
)

export default axiosInstance;
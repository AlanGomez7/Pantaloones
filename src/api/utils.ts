import axios, { AxiosError } from "axios";
import store from "../redux/store";
import { signIn } from "../redux/slices/authSlice";
const BASE_URL = "http://localhost:3000";
const ADMIN_URL = `${BASE_URL}/admin`;

export const API = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const ADMIN_API = axios.create({
  baseURL: ADMIN_URL,

});

API.interceptors.request.use((config: any) => {
  const token:string | null = localStorage.getItem("user")
  config.headers.Authorization =
    !config._retry && token
      ? `Bearer ${token}`
      : config.headers.Authorization;
  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;
    if (
      error.response?.status === 403 &&
      error.response.statusText === "Forbidden"
    ) {
      try {
        const result = await API.get("/auth/refresh");
        store.dispatch(signIn(result.data));
        originalRequest.headers.Authorization =  `Bearer ${result.data.accessToken}`;
        originalRequest._retry = true;
        return API(originalRequest);
      } catch (err) {
        console.log(err);
        localStorage.clear()
      }
    }
    return Promise.reject(error);
  }
);

// axios response interceptor is causing the unexpected error bug

export const apiErrorHandler = (error: any) => {
  try {
    const err = error as AxiosError;
    const errorMessage = err.response?.data || "An unexpected error occurred.";
    if (err.response) {
      return { error: errorMessage, data:null, status: err.response.status };
    }
  } catch (err) {
    console.log(err, "serious problem");
    throw new Error("An unexpected error occurred.");
  }
};

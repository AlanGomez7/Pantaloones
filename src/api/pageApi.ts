import { AxiosError, AxiosResponse } from "axios";
import { API, apiErrorHandler } from "./utils";

export const fetchHomepageData = async () => {
  try {
    const result: AxiosResponse = await API.get("/home");
    return { error: null, data: result.data, status: 200 };
  } catch (error) {
    const err = error as AxiosError;
    return apiErrorHandler(err);
  }
};

export const fetchCartData = async () => {
  try {
    const result = await API.get("/auth/cart");
    return { error: null, data: result.data, status: 200 };
  } catch (error) {
    const err = error as AxiosError;
    return apiErrorHandler(err);
  }
};

export const fetchWishlistData = async () => {
  try {
    const result: AxiosResponse = await API.get("/auth/wishlist");
    return { error: null, data: result.data };
  } catch (error) {
    const err = error as AxiosError;
    return apiErrorHandler(err);
  }
};

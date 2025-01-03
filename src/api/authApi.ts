import { AxiosError, AxiosResponse } from "axios";
import { API, apiErrorHandler } from "./utils";
import { Params } from "react-router-dom";

type signInType = {
  email: string;
  password: string;
};

type signUpType = {
  username: string;
  mobile: string;
  email: string;
  password: string;
};

type responseType = {
  error: null | { message: string };
  data: any;
  status: number;
};

export const signinApi = async (payload: signInType) => {
  try {
    const { email, password } = payload;
    const result: AxiosResponse = await API.post("/auth/signin", {
      email,
      password,
    });
    const response: responseType = {
      error: null,
      data: result.data,
      status: 200,
    };
    return response;
  } catch (error) {
    return apiErrorHandler(error);
  }
};

export const signupApi = async (signupDetails: signUpType) => {
  try {
    const { email, password, username, mobile } = signupDetails;
    const result: AxiosResponse = await API.post("/auth/signup", {
      email,
      password,
      username,
      mobile,
      isAllowed: true,
    });

    return { error: null, data: result.data, status: 200 };
  } catch (error) {
    return apiErrorHandler(error);
  }
};

export const tokenRefreshApi = async () => {
  try {
    const { data } = await API.get("/auth/refresh");
    return { error: null, data: data, status: 200 };
  } catch (error) {
    return apiErrorHandler(error);
  }
};

export const getOtpApi = async (payload: string) => {
  try {
    const { data } = await API.post("/auth/get-otp", { mobile: payload });
    return { data, error: null, status: 200 };
  } catch (error) {
    return apiErrorHandler(error);
  }
};

export const verifyOtpApi = async (payload: { mobile: string; otp: string }) => {
  try {
    const { data } = await API.post("/auth/otp-verification", payload);
    return { error: null, data, status: 200 };
  } catch (error) {
    return apiErrorHandler(error);
  }
};

export const updatePasswordApi = async (payload: {
  uniqueId: string | undefined
  newPassword: string;
}) => {
  try {
    console.log(payload)
    const { data } = await API.put("/auth/update-new-password", payload);
    return { error: null, data, status: 200 };
  } catch (error) {
    apiErrorHandler(error);
  }
};

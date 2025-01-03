import { API, apiErrorHandler } from "./utils";


export const configApi = async () => {
  try {
    const result = await API.get("/payment/config");
    return { data: result.data, error: null, status: 200 };
  } catch (error) {
    apiErrorHandler(error);
  }
};

export const createPaymentIntentApi = async () => {
  try {
    const result = await API.post("/payment/create-payment-intent", {});
    return { data: result?.data, error: null, status: 200 };
  } catch (error) {
    apiErrorHandler(error);
  }
};

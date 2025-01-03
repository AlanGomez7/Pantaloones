import { API, apiErrorHandler } from "./utils";

export const selectedProductApi = async (payload:string | null) => {
  try {
    const result = await API.get(`/products/selected-product?key=${payload}`);
    console.log(result, 
      "api"
    )
    return { data: result.data, error: null, status: 200 };
  } catch (err) {
    apiErrorHandler(err);
  }
};

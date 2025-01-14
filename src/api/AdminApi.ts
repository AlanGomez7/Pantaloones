import { ADMIN_API, API, apiErrorHandler } from "./utils";

export const addProductApi = async (payload: any) => {
  try {
    console.log(payload);
    const result = await ADMIN_API.post("/add-product", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: result.data, error: null, status: 200 };
  } catch (err) {
    apiErrorHandler(err);
  }
};

export const addVariantApi = async (payload: any) => {
  try {
    const { size } = payload;
    payload.size = size.split(" ").join("").split(",");

    console.log(payload);
    const result = await ADMIN_API.post("/add-variant", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { data: result.data, error: null, status: 200 };
  } catch (err) {
    apiErrorHandler(err);
  }
};

export const updateProduct = async(key:string|null, payload:any) => {
  try{
    const result = await ADMIN_API.patch(`/update-product/${key}`, payload, {
     headers:{
      "Content-Type": "multipart/form-data"
     }
    })

    return {data: result?.data, status:200, error:null}
  }catch(err){
    apiErrorHandler(err)
  }
}

export const fetchProduct = async () => {
  try {
    const result = await ADMIN_API.get("/fetch-products");
    return { data: result?.data, status: 200, error: null };
  } catch (err) {
    return apiErrorHandler(err);
  }
};

export const updateVariant = async (payload: any) => {
  console.log(payload, "upadate")
  try {
    const result = await ADMIN_API.post("/update-variant", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { error: null, data: result.data, status: 200 };
  } catch (err) {
    return apiErrorHandler(err);
  }
};

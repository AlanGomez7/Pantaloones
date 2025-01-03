import { any, string, z } from "zod";

export const AddProductSchema = z.object({
    title: string().min(3, { message: "Title not valid" }),
    brand: string().min(3, { message: "Brand not valid" }),
    description: string().min(10, { message: "Description not valid" }),
    category: string().min(3, { message: "Not valid" }),
    price: string().min(1, { message: "Price cannot be empty" }),
    stock: string().min(1, { message: "Stock cannot be empty" }),
    color: string()
      .startsWith("#", { message: "Enter a valid hex code" })
      .min(7)
      .max(7),
    size: any(),
    Image: any(),
  });
  
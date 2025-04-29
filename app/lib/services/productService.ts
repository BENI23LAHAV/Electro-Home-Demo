import type { Product, Response } from "../definitions";
import { products } from "../DB/products";

class ProductService {
  /**---------- Get Products ---------- */

  //It gets the all products from the DB
  static async getProducts(): Promise<Response> {
    try {
      const data = products;
      const res = data as Product[];
      const success = res !== undefined || res !== null ? true : false;
      return {
        success,
        message: `${
          success ? "Products fetched successfully" : "Products not found"
        }`,
        data: res,
      };
    } catch (err) {
      return {
        success: false,
        message: err as string,
        data: null,
      };
    }
  }
  //It gets the product by id
  static async getProductById(id: number): Promise<Response> {
    try {
      const products = (await this.getProducts()).data as Product[];
      const res = products.find((product) => product.id === id) as Product;
      const success = res !== undefined || res !== null ? true : false;
      return {
        success,
        message: `${
          success ? "Product fetched successfully" : "Product not found"
        }`,
        data: res,
      };
    } catch (err) {
      return {
        success: false,
        message: err as string,
        data: null,
      };
    }
  }
  //It gets the products by category
  static async getProductsByCategory(category: string): Promise<Response> {
    try {
      const res = await this.getProducts();
      const success = res.success;
      const data = res.data as Product[];

      const dataFiltered =
        category === "all"
          ? data
          : data.filter((product) => product.categories.includes(category));

      return {
        success,
        message: success
          ? "Products fetched successfully"
          : "Products not found",
        data: dataFiltered,
      };
    } catch (err) {
      return {
        success: false,
        message: err as string,
        data: null,
      };
    }
  }
}

export default ProductService;

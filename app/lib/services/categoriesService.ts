import type { Category, Response } from "../definitions";
import { categories } from "../DB/categories";

class CategoriesService {
  static async getCategories(): Promise<Response> {
    try {
      const data = categories;
      const res = data;
      const success = res !== undefined && res !== null;

      return {
        success,
        message: success
          ? "Categories fetched successfully"
          : "Categories not found",
        data: res as Category[],
      };
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message,
        data: null,
      };
    }
  }

  static async getCategoryById(id: string): Promise<Response> {
    try {
      const categories = (await this.getCategories()).data as Category[];
      const res = categories.find((category) => category.id === id);
      const success = res !== undefined && res !== null;

      return {
        success,
        message: success
          ? "Category fetched successfully"
          : "Category not found",
        data: res as Category,
      };
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message,
        data: null,
      };
    }
  }
}

export default CategoriesService;

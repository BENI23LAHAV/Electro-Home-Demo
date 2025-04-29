import ProductService from "./productService";
import {
  cart,
  addProduct as cartAddProduct,
  removeProduct as cartRemoveProduct,
  changeQuantity as cartChangeQuantity,
} from "../DB/cart";

import type { CartContent, Response } from "../definitions";
class CartService {
  static async getCart(): Promise<Response> {
    try {
      const data = cart;

      return {
        success: true,
        message: "Cart fetched successfully",
        data: data as CartContent[],
      };
    } catch (error) {
      console.log(error);
      return { success: false, message: (error as Error).message, data: null };
    }
  }
  static async addProduct({
    productId,
    quantity,
  }: CartContent): Promise<Response> {
    if (productId && quantity >= 1) {
      try {
        const data = (await this.getCart()).data as CartContent[];
        const cart = data as CartContent[];
        const productResponse = await ProductService.getProductById(productId);
        if (productResponse.success && productResponse.data) {
          const productData = productResponse.data;
          const cartItem = cart.find((item) => item.productId === productId);
          if (cartItem) {
            cartItem.quantity += quantity;
          } else {
            cartAddProduct({ productId, quantity });
          }
          return {
            success: true,
            message: "Product added to cart successfully",
            data: productData,
          };
        } else {
          return {
            success: false,
            message: "Product not found",
            data: null,
          };
        }
      } catch (error) {
        console.log(error);
        return {
          success: false,
          message: (error as Error).message,
          data: null,
        };
      }
    }

    return {
      success: false,
      message: "productId and quantity are required",
      data: null,
    };
  }
  static async cartCapacity(): Promise<Response> {
    try {
      const data = (await this.getCart()).data as CartContent[];

      return {
        success: true,
        message: "Cart capacity fetched successfully",
        data: data.length,
      };
    } catch (error) {
      return {
        success: false,
        message: (error as Error).message,
        data: null,
      };
    }
  }
  static async changeQuantity(
    productID: number,
    quantity: number
  ): Promise<Response> {
    if (quantity >= 1) {
      const data = (await this.getCart()).data as CartContent[];
      const cartItem = data.find((item) => item.productId === productID);
      if (cartItem) {
        cartItem.quantity = quantity;
        cartChangeQuantity(productID, quantity);
        return {
          success: true,
          message: "Quantity changed successfully",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Product not found in cart",
          data: null,
        };
      }
    } else {
      return {
        success: false,
        message: "Quantity must be greater than 0",
        data: null,
      };
    }
  }
  static async removeProduct(productID: number): Promise<Response> {
    if (productID) {
      const data = (await this.getCart()).data as CartContent[];
      const cartItem = data.find((item) => item.productId === productID);
      if (cartItem) {
        cartRemoveProduct(productID);
        return {
          success: true,
          message: "Product removed from cart successfully",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Product not found in cart",
          data: null,
        };
      }
    } else {
      return {
        success: false,
        message: "Product ID is required",
        data: null,
      };
    }
  }
}
export default CartService;

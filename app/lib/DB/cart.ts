import type { CartContent } from "../definitions";

const cart: CartContent[] = [];

function addProduct(product: CartContent) {
  cart.push(product);
}
function removeProduct(productID: number) {
  cart.splice(
    cart.findIndex((item) => item.productId === productID),
    1
  );
}
function changeQuantity(productID: number, quantity: number) {
  const item = cart.find((item) => item.productId === productID);
  if (item) {
    item.quantity = quantity;
  }
}
export { cart, addProduct, removeProduct, changeQuantity };

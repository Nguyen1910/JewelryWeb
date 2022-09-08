import { convertPrice } from "./convertPrice";

export const totalCart = (cart) =>
  convertPrice(
    cart.reduce(
      (total, item, index) =>
        total + parseInt(item.quantity) * parseInt(item.price),
      0
    )
  );

import Item from "../models/itemModel.js";
import Variant from "../models/variantModel.js";
import { ApiError } from "../middlewares/errorHandler.js";
export const verifyOrderItems = async (
  cartItems: any[]
) => {
  // Get all item ids
  const itemIds = cartItems.map(item => item.id);

  // Get all variant ids
  const variantIds = cartItems
    .filter(item => item.variantId)
    .map(item => item.variantId);

  // Fetch all items in one query
  const items = await Item.find({
    _id: { $in: itemIds },
  });

  // Fetch all variants in one query
  const variants = await Variant.find({
    _id: { $in: variantIds },
  });

  // Create lookup maps
  const itemMap = new Map(
    items.map(item => [item.id.toString(), item])
  );

  const variantMap = new Map(
    variants.map(variant => [variant.id.toString(), variant])
  );

  let subtotal = 0;

  const verifiedItems = [];

  for (const cartItem of cartItems) {

    const item = itemMap.get(cartItem.id);

    if (!item) {
      throw new ApiError(404, `Item not found`);
    }

    let price = item.basePrice;

    let variant = null;

    if (cartItem.variantId) {

      variant = variantMap.get(cartItem.variantId);

      if (!variant) {
        throw new ApiError(404, "Variant not found");
      }

      price = variant.price;
    }

    subtotal += price * cartItem.quantity;

    verifiedItems.push({
      itemId: item._id,
      itemName: item.name,
      quantity: cartItem.quantity,
      price,
      variantId: variant?._id ?? null,
      variation: variant?.variation ?? null,
    });
  }

  return {
    verifiedItems,
    subtotal,
  };
};
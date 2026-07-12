export const calculateOrderTotals = (
  subtotal: number,
  deliveryFee: number
) => {

  return {

    subtotal,

    deliveryFee,

    totalAmount: subtotal + deliveryFee,

  };

};
import type { RestaurantOrderPlacedTemplateData, CustomerOrderPlacedTemplateData } from "../types/order.js";



export const customerOrderPlacedTemplate = ({
  restaurantName,
  orderId,
  totalAmount,
  orderStatus,
}: CustomerOrderPlacedTemplateData) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Your order is in progress</h2>

      <p>Your order has been placed successfully at <b>${restaurantName}</b>.</p>

      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Total Amount:</b> Rs ${totalAmount}</p>
      <p><b>Status:</b> ${orderStatus}</p>

      <p>The restaurant will confirm your order soon.</p>

      <br />
      <p>Thank you for ordering!</p>
    </div>
  `;
};

export const restaurantOrderPlacedTemplate = ({
  restaurantName,
  orderId,
  totalAmount,
  customerEmail,
  deliveryAddress,
  adminUrl
}: RestaurantOrderPlacedTemplateData) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New order received</h2>

      <p>Hello <b>${restaurantName}</b>,</p>

      <p>A new order has been placed. Please open your dashboard and confirm the order.</p>

      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Total Amount:</b> Rs ${totalAmount}</p>
      <p><b>Customer Email:</b> ${customerEmail}</p>
      <p><b>Delivery Address:</b> ${deliveryAddress}</p>

      <br />
      <p>Please update the order status from your dashboard.</p>
      <a href="${adminUrl}/admin/orders">view order</a>
    </div>
  `;
};

export const customerOrderStatusTemplate = ({
  restaurantName,
  orderId,
  orderStatus,
  totalAmount,
}: CustomerOrderPlacedTemplateData) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Your order status has been updated</h2>

      <p>Your order from <b>${restaurantName}</b> has a new status.</p>
      
      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Total Amount:</b> Rs ${totalAmount}</p>
      <p><b>Status:</b> ${orderStatus}</p>


      <br />

      <p>Thank you for ordering!</p>
    </div>
  `;
};
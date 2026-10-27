// Checkpoint A — solution for cherie-hannah
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Every order from the database.
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// 2. Only orders from Cairo that are paid.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

// 3. Total revenue: price * quantity for every order, added up.
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

// 4. "{item} x{quantity} ordered by {student}", or "No order with id {id}".
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

// 5. JSON text keeping only item and price, in that order.
export function toJsonLines(orders) {
  const slim = orders.map((order) => ({ item: order.item, price: order.price }));
  return JSON.stringify(slim);
}
import React from 'react';
import { customers } from '../db/customers'; // Import the data structures
import { orders } from '../db/orders';
const OrdersTable = () => {
  return (
    <>
    <h3 style={{textAlign:'left'}}>Orders</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Resident</th>
          <th>Products Ordered</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => {
          const customer = customers.find(customer => customer.id === order.customerId);
          const residentName = customer ? customer.id : '';

          const productsOrdered = order.basket
            .map(item => `${item.quantity}x ${item.productId}`)
            .join(', ');

          return (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{residentName}</td>
              <td>{productsOrdered}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default OrdersTable;

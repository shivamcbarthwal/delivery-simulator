import React, { useState } from 'react';
import { drones } from '../db/drones'
import { stores } from '../db/stores'
import { orders } from '../db/orders'
import { FlightPlan } from '../models/FlightPlan';
import { Store } from '../models/Store';
import DronesTable from './DronesTable';

interface FlightPlanFormProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  selectedOrder: string | number | readonly string[] | undefined;
  handleOrderChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  selectedDrone: string | number | readonly string[] | undefined;
  handleDroneChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  selectedStore: string | number | readonly string[] | undefined;
  handleStoreChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  flightPlans: FlightPlan[];
  setDroneAutonomy: React.Dispatch<React.SetStateAction<{ id: string; x: number; y: number; autonomy: number; }[]>>; // Add this line
}

const FlightPlanForm = (props: FlightPlanFormProps) => {
  return (
    <div>
      <h3>Create Flight Plan</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Select Order:</label>
          <select value={props.selectedOrder} onChange={props.handleOrderChange}>
            <option value="">Select an order</option>
            {orders.map(order => (
              <option key={order.id} value={order.id}>
                {order.id}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Drone:</label>
          <select value={props.selectedDrone} onChange={props.handleDroneChange}>
            <option value="">Select a drone</option>
            {drones.map(drone => (
              <option key={drone.id} value={drone.id}>
                {drone.id}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Store:</label>
          <select value={props.selectedStore} onChange={props.handleStoreChange}>
            <option value="">Select a store</option>
            {stores.map(store => (
              <option key={store.id} value={store.id}>
                {store.id}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Flight Plan</button>
      </form>
      <div>
        {/* Flight Plans Table */}
      <h3 style={{textAlign:'left'}}>Flight Plans</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Drone ID</th>
            <th>Store ID</th>
          </tr>
        </thead>
        <tbody>
          {props.flightPlans.map((plan: { orderId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; droneId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; storeId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <tr key={index}>
              <td>{plan.orderId}</td>
              <td>{plan.droneId}</td>
              <td>{plan.storeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FlightPlanForm;


import React, { useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import DronesTable from '../components/DronesTable';
import StoreStocksTable from '../components/StoreStocksTable';
import FlightPlanForm from '../components/FlightPlanForm';
import { drones } from '../db/drones';
import { stores } from '../db/stores';
import { Store } from '../models/Store';
import { FlightPlan } from '../models/FlightPlan';

const DroneDeliverySimulator = () => {
  const [selectedOrder, setSelectedOrder] = useState('');
  const [selectedDrone, setSelectedDrone] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [flightPlans, setFlightPlans] = useState<FlightPlan[]>([]);
  const [storeStocks, setStoreStocks] = useState<Store[]>(stores);
  const [droneAutonomy, setDroneAutonomy] = useState(drones);


  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(event.target.value);
  };

  const handleDroneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDrone(event.target.value);
  };

  const handleStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create the flight plan
    const newFlightPlan = {
      orderId: selectedOrder,
      droneId: selectedDrone,
      storeId: selectedStore,
    };

    // Update the store stocks
    const updatedStoreStocks = storeStocks.map(store => {
        if (store.id === selectedStore) {
            const newStock = store.stock.map(product => {
            if (product.productId === selectedOrder) {
                return {
                ...product,
                quantity: product.quantity - 1,
                };
            }
            return product;
            });

            return {
            ...store,
            stock: newStock,
            };
        }
        return store;
    });

    setStoreStocks(updatedStoreStocks);

    // Update the drone autonomy
    const updatedDroneAutonomy = droneAutonomy.map(drone => {
      if (drone.id === selectedDrone) {
        drone.autonomy -= 10; // Assuming each flight consumes 10 units of autonomy
      }
      return drone;
    });
    setDroneAutonomy(updatedDroneAutonomy);

    setFlightPlans([...flightPlans, newFlightPlan]);

    setSelectedOrder('');
    setSelectedDrone('');
    setSelectedStore('');
  };
  return (
    <div className="App">
      <h1>Drone Delivery Simulator</h1>
      <FlightPlanForm
        setDroneAutonomy={setDroneAutonomy}
        selectedOrder={selectedOrder}
        selectedDrone={selectedDrone}
        selectedStore={selectedStore}
        handleOrderChange={handleOrderChange}
        handleDroneChange={handleDroneChange}
        handleStoreChange={handleStoreChange}
        handleSubmit={handleSubmit}
        flightPlans={flightPlans}
       />
      <OrdersTable />
      <DronesTable droneAutonomy={droneAutonomy} />
      <StoreStocksTable storeStocks={storeStocks} />
    </div>
  );
}

export default DroneDeliverySimulator;

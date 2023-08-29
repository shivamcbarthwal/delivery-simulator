import React from 'react';
import { drones } from '../db/drones'; // Import the drones data structure
import { Drone } from '../models/Drone';

interface DronesTableProps {
  droneAutonomy: Drone[]; // Pass the drone autonomy as a prop
}

const DronesTable: React.FC<DronesTableProps> = ({ droneAutonomy }) => {
  return (
    <>
    <h3 style={{textAlign:'left'}}>Drones</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Autonomy</th>
          <th>Position X</th>
          <th>Position Y</th>
        </tr>
      </thead>
      <tbody>
        {drones.map(drone => (
          <tr key={drone.id}>
            <td>{drone.id}</td>
            <td>{drone.autonomy}</td>
            <td>{drone.x}</td>
            <td>{drone.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default DronesTable;

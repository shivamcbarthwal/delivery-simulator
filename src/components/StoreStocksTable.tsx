import React from 'react';
import { stores } from '../db/stores'; // Import the stores data structure
import { Store } from '../models/Store';

interface StoreStocksTableProps {
  storeStocks: Store[]; 
}

const StoreStocksTable = (props: StoreStocksTableProps) => {
  return (
    <>
    <h2 style={{textAlign:'left'}}>Stocks</h2>
    <table>
      <thead>
        <tr>
          <th>Products</th>
          {props.storeStocks.map(store => (
            <th key={store.id}>{store.id}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.storeStocks[0].stock.map(product => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            {props.storeStocks.map(store => (
              <td key={store.id}>
                {store.stock.find(stock => stock.productId === product.productId)?.quantity || 0}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default StoreStocksTable;

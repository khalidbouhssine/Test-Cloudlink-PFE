import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/productList')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data: " + err));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} : {p.price} DH
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

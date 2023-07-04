import React, { useState, useEffect} from 'react';
import './App.css';
import './style.css'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))

  }, [])
  return (
    <div className='App'>
      <h1>Consumindo API com react por Leonardo Ramos</h1>
      {products.map(product => (
        <div className='container-vitrine' key={product.id}>
          
          <h2>{product.title}</h2>
          <span>{product.price}/</span>
          <span>{product.description}/</span>
          <span>{product.category}/</span>
          <img src={product.image} alt={product.title} />
          <span>Rate: {product.rating.rate}/</span>
          <span>Avalible: {product.rating.count}/</span>
        </div>
      ))}
    </div>
  );

  
}

export default App;

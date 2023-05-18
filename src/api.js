import React, { useState, useEffect } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;

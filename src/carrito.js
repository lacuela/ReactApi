import React, { useState } from 'react';

function Carrito() {
  const [productos, setProductos] = useState([]);

  function agregarProducto(producto) {
    setProductos([...productos, producto]);
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
      <button onClick={() => agregarProducto({ id: 1, nombre: 'Producto 1' })}>
        Agregar producto
      </button>
    </div>
  );
}

export default Carrito;

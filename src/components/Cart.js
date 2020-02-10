import React from 'react';
import Product from './Product';    // Importa Compomente Producto
import './cart.css';                // Importa Hoja de Estilos del Componente

const Cart = ({ products }) => (        // Return Implicito & Destructuración del Props pasado como argumento
    <div className="cart">
        <h2>Carrito de compras</h2>
        { products .map( product => (
            <Product
                key={ product.id }
                product={ product }
            />
        ))}
    </div>
);

export default Cart;

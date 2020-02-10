import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Product from './components/Product';

function App() {
    /** Obtener año actual */
    const currencyYear = new Date().getFullYear();
    console.log( currencyYear );

    /** Crear listado de productos (generalmente estos datos vienen de una API) */
    const [ stateProducts, setProducts ] = useState([
        { id: 1, name: 'Camiseta Angular', price: 50 },
        { id: 2, name: 'Camiseta Vue', price: 40 },
        { id: 3, name: 'Camiseta React', price: 30 },
        { id: 4, name: 'Camiseta JavaScript', price: 20 }
    ]);

    /** Carrito de Compras */
    const [ stateShoppingCart, setShoppingCart ] = useState([]);

    return (
        <Fragment>
            <Header
                title='Tienda Virtual'        // Se pueden pasar: strings, numbers, booleans & functions
                user='Ana Maria'
            />
            <h1>Lista de Productos</h1>
            { stateProducts .map( product => (      // Usar parentesis y no las llaves en React es un return implicito
                <Product
                    key={ product.id }              // En un listado de componentes cada uno debe tener un key que lo haga unico
                    product={ product }             // Pasamos como Props los datos al Componente de Producto en este caso todo el objeto de cada producto
                    products={ stateProducts }      // Pasamos todos los productos disponibles
                    cart={ stateShoppingCart }      // Pasamos estado actual del carrito de compras
                    addToCart={ setShoppingCart }   // Pasamos la funcion que modifica el estado actual del carrito de compras
                />
            )) }

            <Footer
                year={ currencyYear }
            />
        </Fragment>
    );
}

export default App;

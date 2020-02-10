import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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

    return (
        <Fragment>
            <Header
                title='Tienda Virtual'        // Se pueden pasar: strings, numbers, booleans & functions
                user='Ana Maria'
            />
            <p>Fundamentos básicos de React</p>
            <Footer
                year={ currencyYear }
            />
        </Fragment>
    );
}

export default App;

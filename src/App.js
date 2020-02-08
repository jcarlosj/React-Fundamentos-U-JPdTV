import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Fragment>
            <Header
                title='Tienda Virtual'        // Se pueden pasar: strings, numbers, booleans & functions
                user='Ana Maria'
            />
            <p>Fundamentos básicos de React</p>
            <Footer />
        </Fragment>
    );
}

export default App;

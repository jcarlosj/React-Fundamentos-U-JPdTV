import React from 'react';

const Product = ({ product }) => {              // Destructuración del Props pasado como argumento

    const { id, name, price } = product;        // Destructuración de las propiedades de producto

    return (
        <div>
            <h4>{ name }</h4>
            <p>${ price }</p>
        </div>
    );
}

export default Product;

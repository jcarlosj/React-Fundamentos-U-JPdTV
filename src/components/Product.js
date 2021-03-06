import React from 'react';

const Product = ({ product, products, cart, addToCart }) => {              // Destructuración del Props pasado como argumento

    const { id, name, price } = product;        // Destructuración de las propiedades de producto

    /** Agregar Producto al carrito */
    const selectProduct = ( id ) => {
        const product = products .filter( ( product ) => product .id === id );      // Filtra producto por ID
        console.log( `Seleccionó Producto ${ id }`, product[ 0 ] );

        /** Agrega Producto al Carrito de Compras */
        // addToCart( product );        // Si hacemos esto solo modificará el State del Carrito cada que se haga click
        addToCart([
            ...cart,        // Usamos un Spread operator clonar los elementos que hayan en el carrito con el prodcuto que estamos agregando
            product[ 0 ]    // Objeto del producto que vamos a agregar al carrito
        ]);
    }

    /** Eliminar Producto del carrito */
    const deselectProduct = ( id ) => {
        const products = cart .filter( ( product ) => product .id !== id );      // Filtra producto por ID descartando todos los que tienen el ID diferente al seleccionado 

        /** Agrega Producto al State */
        addToCart( products );
    }

    return (
        <div>
            <h4>{ name }</h4>
            <p>${ price }</p>
            { /** Operador ternario para desplegar el Boton Agregar o Eliminar segun convenga. NOTA: Se usa un operador ternario por que en los return en React no se pueden usar condicionales clasicos */
                products
                ?   (   // Return  Implicito
                        <button
                            type="button"
                            onClick={ () => selectProduct( id ) }      // Evento Click en React: Los eventos en React a diferencia de JavaScript usan el on que antecede al nombre del evento y además no usan el nombre de la función si no que recomiendan usar un Callback asociado a esta, cabe recordar que todo lo que está entre las llaves es código JavaScript que puede ser interpretado por React.
                        >Agregar</button>
                    )
                :   (   // Return  Implicito
                        <button
                            type="button"
                            onClick={ () => deselectProduct( id ) }      // Evento Click en React: Los eventos en React a diferencia de JavaScript usan el on que antecede al nombre del evento y además no usan el nombre de la función si no que recomiendan usar un Callback asociado a esta, cabe recordar que todo lo que está entre las llaves es código JavaScript que puede ser interpretado por React.
                        >Eliminar</button>
                    )

            }
        </div>
    );
}

export default Product;

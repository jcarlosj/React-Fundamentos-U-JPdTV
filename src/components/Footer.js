import React from 'react';

/** Function Expression (Arrow Function)
    No requiere las llaves de la funcion, ni tampoco el uso de la palabra reservada
    return, para React los paréntesis cuando se declara este tipo de función
    implicitamente es un return.
*/
const Footer = () => (
        <footer>
            <small>React &copy; 2020</small>
        </footer>
    );

export default Footer;

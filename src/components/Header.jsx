import React from 'react';

function Header() {
    /** Propiedades */
    const siteTitle = 'Tienda Virtual',
          newElement = <h2 id="site-header" className="site-header site-title">{ siteTitle }</h2>;

    function getGreeting( user ) {
        if( user ) {
            return <h4>Bienvenido, { user }! estamos para servirte</h4>;
        }
        return <h4>Los mejores productos y servicios solo para ti.</h4>;
    }

    /** */
    return (
        <div>
            { newElement }
            { getGreeting() }
        </div>
    );
}

export default Header;

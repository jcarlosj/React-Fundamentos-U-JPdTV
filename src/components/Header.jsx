import React from 'react';

function Header() {
    /** Propiedades */
    const siteTitle = 'Tienda Virtual',
          newElement = <h2 id="site-header" className="site-header site-title">{ siteTitle }</h2>;

    /** */
    return (
        newElement
    );
}

export default Header;

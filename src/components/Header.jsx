import React from 'react';

function Header() {
    /** Propiedades */
    const user = {
             name: 'Ana Maria',
             last: 'Castro'
          },
          siteTitle = 'Tienda Virtual',
          h2Element = <h2 id="site-header" className="site-header site-title">{ siteTitle }</h2>,
          imgElement = <div tabIndex="0">
                         <img src={ user.avatarUrl } alt=""></img>
                       </div>;

    function getGreeting( user ) {
        if( user ) {
            return <h4>Bienvenid@, { user.name }! estamos para servirte</h4>;
        }
        return <h4>Los mejores productos y servicios solo para ti.</h4>;
    }

    /** */
    return (
        <div>
            { h2Element }
            { getGreeting( user ) }
            { user.avatarUrl !== undefined ? imgElement : '' }
        </div>
    );
}

export default Header;

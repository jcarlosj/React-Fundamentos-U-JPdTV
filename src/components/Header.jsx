import React from 'react';

/** Function Declaration */
function Header({ title, user }) {      // Destructuración del parámetro 'props'
    console.log( title, user );

    function getGreeting( user ) {
        if( user ) {
            return <h4>Bienvenid@, { user }! estamos para servirte</h4>;
        }
        return <h4>Los mejores productos y servicios solo para ti.</h4>;
    }

    /** */
    return (
        <div>
            <h2 id="site-header" className="site-header site-title">{ title }</h2>
            { getGreeting( user ) }
        </div>
    );
}

export default Header;

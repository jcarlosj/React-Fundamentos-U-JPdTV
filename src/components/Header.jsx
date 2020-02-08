import React from 'react';

/** Function Declaration */
function Header( props ) {
    console.log( props );

    function getGreeting( user ) {
        if( user ) {
            return <h4>Bienvenid@, { user }! estamos para servirte</h4>;
        }
        return <h4>Los mejores productos y servicios solo para ti.</h4>;
    }

    /** */
    return (
        <div>
            <h2 id="site-header" className="site-header site-title">{ props.title }</h2>
            { getGreeting( props.user ) }
        </div>
    );
}

export default Header;

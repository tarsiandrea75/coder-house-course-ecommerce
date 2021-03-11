import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return ( 
        
        <nav className="navbar navbar-default" role="navigation">
            
            <div className="navbar-collapse collapse">
               
                <ul className="nav navbar-nav navbar-center">
                    <li><a href="#">Comida</a></li>
                    <li><a href="#">Bebida</a></li>
                    <li><a href="#">Musica</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    ) ;
}

export default NavBar;

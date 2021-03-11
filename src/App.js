import {React, useEffect, useState} from 'react';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

import './App.css';

//Mocked Pics
import pizza from './pizza.png';
import orecchiette from './orecchiette.png';
import wine from './wine.png';

function App() {

    const itemsMockData = [
        {
            id: 1,
            title: "Orecchiette",
            description: "Fideos tipicos",
            price: 5,
            pictureUrl: orecchiette
        },
        {
            id: 2,
            title: "Margherita",
            description: "Pizza",
            price: 3,
            pictureUrl: pizza
        },
        {
            id: 3,
            title: "Barolo",
            description: "Vino",
            price: 15,
            pictureUrl: wine
        }
    ];

    const [items, setItems] = useState([]);

    useEffect(
        () => {
            new Promise((success, failure) => {
                setTimeout(() => 
                    success(itemsMockData), 
                    2000
                );
            }).then((result) => setItems(result));    
        }
    );

    return <>           
            <NavBar />   
            <div className="nav navbar-nav navbar-center">
                <h1>LA TIENDA DEL TANO</h1>
            </div>     
            <ItemListContainer  
                title="Catalogo" 
                // list={["Articulo 1", "Articulo 2", "Articulo 3"]}
                items={items} >
            </ItemListContainer>
    </>

}

export default App;

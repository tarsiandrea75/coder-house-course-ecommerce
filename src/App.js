import {React, useEffect, useState} from 'react';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';

//Mocked Pics
import pizza from './Assets/Images/pizza.png';
import orecchiette from './Assets/Images/orecchiette.png';
import wine from './Assets/Images/wine.png';

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
        },
        []
    );
    console.log("Agregando el parametro [] a useEffect evito que se llame en loop infinito la promisa, ya que el el didMount siempre se modificaba el listado");
    
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

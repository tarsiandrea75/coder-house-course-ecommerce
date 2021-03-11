import { Fragment, useState } from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

    console.log("ItemListContainer");
    //TODO moverlo en el detalle de un articulo cuando estará listo
    const STOCK_SIZE    = 5;
    const ITEM_MINIMUM  = 1;

    const [stockNow, setStockNow] = useState(STOCK_SIZE);

    const updateStock = (e, stockNew) => {
        setStockNow((stockNow) => stockNow - stockNew);
    };

    // const items = props.list.map((item, i) => {
    //     return (
    //         <li key={i} className="nav-item">{item}</li>
    //     )
    // });
    
    return (
        <Fragment>
            {/* <div>
                <h1>Lista fija mockeada</h1>
                <ul>
                    {items}
                </ul>
            </div> */}
            <div>
                <ItemList items={props.items}/>
            </div>
            <br />
            <ItemCount 
                stock={stockNow} 
                initial={ITEM_MINIMUM} 
                onAdd={updateStock} 
            />
        </Fragment>
    );
}

export default ItemListContainer;
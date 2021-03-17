import { Fragment, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {

    //TODO moverlo en el detalle de un articulo cuando estará listo
    const STOCK_SIZE    = 5;
    const ITEM_MINIMUM  = 1;

    const [stockNow, setStockNow] = useState(STOCK_SIZE);

    const updateStock = (e, stockNew) => {
        setStockNow((stockNow) => stockNow - stockNew);
        //TODO avisar el usuario en caso que el stock llegue a cero
    };
    
    return (
        <Fragment>
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
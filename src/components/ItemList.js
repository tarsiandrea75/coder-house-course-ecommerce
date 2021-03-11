import ItemListContainer from "./ItemListContainer";

import Item from './Item';

const ItemList = (props) => (
    <>
        <h1>Lista dinamica mockeada</h1>
        <ul>
            {props.items.map((x, i) => (
                <Item key={i} item={x} />
            ))}
        </ul>
    </>
);


export default ItemList;
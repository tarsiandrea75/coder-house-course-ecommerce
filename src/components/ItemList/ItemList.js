import Item from '../Item/Item';

const ItemList = (props) => (
    <>
        <h1>Listado Articulos</h1>
        <ul>
            {props.items.map((x, i) => (
                <Item key={i} item={x} />
            ))}
        </ul>
    </>
);

export default ItemList;
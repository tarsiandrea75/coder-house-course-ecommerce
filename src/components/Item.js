const Item = (props) => {
    return (
        <ul>
            <li>{props.item.id}</li>
            <li>{props.item.title}</li>
            <li>{props.item.description}</li>
            <li>{props.item.price}</li>
            <li><img src={props.item.pictureUrl} alt="logo" width="60px"/></li>
        </ul>
    )
}

export default Item;
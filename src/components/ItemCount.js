import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [quantity, setQuantity] =  useState(initial);

  const onClickHandler = (e) => {
    e.preventDefault();
    if (quantity > 0 && quantity <= stock) {
      onAdd(e, quantity)
    }
  }
  
  return (
    <form>
      Stock: {stock}
      <br />
      <input id="quantity" onChange={e => setQuantity(parseInt(e.target.value))} type="number" min="0" step="1" placeholder={initial}></input>
      <br />
      <button onClick={onClickHandler}>Agregar al carrito</button>
    </form>
  );
};

export default ItemCount;

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
      <p>Stock: {stock}</p>
      <div className="input-group">
        <p>Pizza</p>
        <input 
          className="form-control"
          id="quantity" 
          onChange={e => setQuantity(parseInt(e.target.value))} 
          type="number" min="0" step="1" 
          placeholder={initial} defaultValue={1}>
        </input>
        <div className="input-group-append">
          <button className="btn btn-success" onClick={onClickHandler}>Agregar al carrito</button>
        </div>
      </div>
    </form>
  );
};

export default ItemCount;

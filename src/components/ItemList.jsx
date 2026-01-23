import React from "react"
import Item from "./Item";
import "../css/ItemList.css";

const ItemList = ({ data }) => {
  return (
    <div className="item-list-container"> 
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList;
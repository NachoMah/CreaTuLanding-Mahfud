import React from "react"
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList;
console.log("ItemListContainer render");

import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data"; 
import ItemList from "./ItemList";

const ItemListContainer = ({bienvenida, introduccion, fuerza}) => {
const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
        .then((res) => setData(res))
        .catch((error) => console.log(error))
    }, [])
    return(
        <div className="div-container mt-4">
            <h1>{bienvenida}</h1>
            <h2>{introduccion}</h2>
            <p>{fuerza}</p>
            <ItemList data={data}/>
        </div>
    );
};

export default ItemListContainer;
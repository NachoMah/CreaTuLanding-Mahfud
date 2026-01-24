import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data"; 
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({bienvenida, introduccion, fuerza}) => {
const [data, setData] = useState([])
const {type} = useParams()

    useEffect(() => {
        getProducts()
        .then((res) => {
            if(type) {
                setData(res.filter((product) => product.category === type))
            }
            else {
                setData(res)
            }
        })
        .catch((error) => console.log(error))
    }, [type])
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
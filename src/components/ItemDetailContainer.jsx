import { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../asyncMock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetail(res))
        .catch((error) => console.log(error))

    }, [id])
    return (
        <div>
            <ItemDetail detail = {detail}/>
        </div>
    )
}

export default ItemDetailContainer 
import { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../asyncMock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetail(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))

    }, [id])
    return (
        <>
            {loading ? <Loader text="Cargando detalles del producto..."/> : <ItemDetail detail = {detail}/>}
        </>
    )
}

export default ItemDetailContainer 
import { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../asyncMock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
        .then((res) => {
            if(res.data()) {
            setDetail({
                id:res.id,
                ...res.data()
            })
            }
            else{
                setInvalid(true)
            }
        })


        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [id])

//Promesa
   /* useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetail(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [id])*/
    if(invalid){
        return(
            <div>
                <h2>El producto no existe en nuestra tienda</h2>
                <h3>Por favor, vuelva a la pantalla de inicio y vea nuestra disponibilidad:</h3>
                <Link to="/">Volver a la pantalla de inicio</Link>
            </div>
        )
    }

    return (
        <>
            {loading ? <Loader text="Cargando detalles del producto..."/> : <ItemDetail detail = {detail}/>}
        </>
    )
}

export default ItemDetailContainer 
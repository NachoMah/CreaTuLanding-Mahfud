import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data"; 
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase"

const ItemListContainer = ({bienvenida, introduccion, fuerza}) => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const {type} = useParams()

useEffect(() => {
        setLoading(true)
        const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")

        getDocs(prodCollection)
        .then((res) =>{
            const list = res.docs.map((doc) => {
                return{
                    id:doc.id,
                    ...doc.data()

                }
            })
            setData(list)
        }
    
    )
        
        .catch((error) => console.log(error))  
        .finally(() => setLoading(false))
    }, [type])

    return(
        loading ? 
        <Loader text={type ? "Cargando..." : "Cargando productos..."}/> 
        : <div className="div-container mt-4">
            <h1>{bienvenida}</h1>
            <h2>{introduccion}</h2>
            <p>{fuerza}</p>

            <ItemList data={data}/>
        </div>
        
    );
};

export default ItemListContainer;
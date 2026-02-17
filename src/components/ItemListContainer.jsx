import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data"; 
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase"

import { addDoc } from "firebase/firestore"
import { products } from "../asyncMock/data"

const ItemListContainer = ({bienvenida, introduccion, fuerza}) => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const {type} = useParams()

useEffect(() => {
        setLoading(true)
        const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")

        getDocs(prodCollection)
        .then((res) =>{
            //console.log(res)
            //console.log(res.docs)
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

//Promesa
   /* useEffect(() => {
        setLoading(true)
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
        .finally(() => setLoading(false))
    }, [type])*/

    /*const subirData = () => {
        console.log("Subiendo data...")
        const colSubir = collection(db, "productos")
        products.map((prod) => addDoc(colSubir, prod))
    }*/

    return(
        loading ? 
        <Loader text={type ? "Cargando..." : "Cargando productos..."}/> 
        : <div className="div-container mt-4">
            <h1>{bienvenida}</h1>
            <h2>{introduccion}</h2>
            <p>{fuerza}</p>

            {/*<button onClick={subirData}>SUBIR DATA</button>*/}

            <ItemList data={data}/>
        </div>
        
    );
};

export default ItemListContainer;
import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { serverTimestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../service/firebase" 
import { Link } from "react-router-dom"

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState("")
    const {cart, total, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        if (!buyer.name || !buyer.lastname || !buyer.dni || !buyer.email) {
            alert("Por favor complete todos los campos")
            return
        }

        if (buyer.email !== validMail) {
            alert("Los correos no coinciden")
            return
        }

        let orden = {
            comprador: buyer,
            compras: cart,
            total: total(),
            date: serverTimestamp(),
        }

        const ventas = collection(db, "orders")
        addDoc(ventas, orden)
        .then((res) => {
        setOrderId(res.id)
        clear()

        })
        .catch((error)=> console.log(error))
    }

    if(cart.length && !orderId) {
        return <EmptyCart/>
    }

    return(
        <>
        {
            orderId ?
            <div>
                <h2>Gracias por su compra!</h2>
                <h3>Orden de la compra: {orderId}</h3>
                <h5>Siga explorando nuestra tienda y productos!</h5>
                <Link to="/">Volver al inicio</Link>
            </div>
            : 
            <div>
            <h1>Complete los sigueintes datos:</h1>
            <form onSubmit={finalizarCompra}>
                <input name="name" type="text" placeholder="Nombre:" onChange={buyerData}/>
                <input name="lastname" type="text" placeholder="Apellido:" onChange={buyerData}/>
                <input name="dni" type="number" placeholder="DNI:" onChange={buyerData}/>
                <input name="email" type="email" placeholder="Correo:" onChange={buyerData}/>
                <input name="email2" type="email" placeholder="Confirmar correo:" onChange={(e) => setValidMail(e.target.value)}/>
                <button type="submit">Generar Orden</button>
                
            </form>
        </div>
        }
        </>
    )
}

export default Checkout
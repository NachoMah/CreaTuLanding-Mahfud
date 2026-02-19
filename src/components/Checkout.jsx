import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { serverTimestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../service/firebase" 
import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import "../css/Checkout.css"
import Swal from "sweetalert2"

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState("")
    const [error, setError] = useState(null)
    const {cart, total, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
    
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

        if (!buyer.name.trim() || !buyer.lastname.trim() || !buyer.dni.trim() || !buyer.email.trim() || !validMail.trim()) {
           Swal.fire({
                icon: "error",
                title: "Datos incompletos",
                text: "Complete todos los campos",
                background: "#111",
                color: "#feda4a",
                confirmButtonColor: "#ff2c2c"
            })
            
        }else if (buyer.email !== validMail) {
            Swal.fire({
                icon: "warning",
                title: "Los correos no coinciden",
                background: "#111",
                color: "#feda4a",
                confirmButtonColor: "#feda4a"
            })

        } else {
            setLoading(true)
            setError(null)

            Swal.fire({
                title: "Transmitiendo datos a la República...",
                background: "#111",
                color: "#feda4a",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })

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

       Swal.fire({
            icon: "success",
            title: "¡La Fuerza está contigo!",
            html: `
                <p>Compra realizada con éxito</p>
                <strong>ID de orden:</strong> ${res.id}
            `,
            background: "#111",
            color: "#feda4a",
            confirmButtonColor: "#2ecc71"
        })

        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    }}

    if(!cart.length && !orderId) {
        return <EmptyCart/>
    }

    return(
        <>
        {
            orderId ?
            <div className="checkout-success">
                <h2>Gracias por su compra!</h2>
                <h3>Orden de la compra: {orderId}</h3>
                <h5>Siga explorando nuestra tienda y productos!</h5>
                <Link className="checkout-link" to="/">Volver al inicio</Link>
            </div>
            : 
            <div className="checkout-container">
                <h1>Complete los sigueintes datos:</h1>
                {error && <span className="checkout-error">{error}</span>}
                <form onSubmit={finalizarCompra} className="checkout-form">
                    <input name="name" type="text" placeholder="Nombre:" onChange={buyerData}/>
                    <input name="lastname" type="text" placeholder="Apellido:" onChange={buyerData}/>
                    <input name="dni" type="number" placeholder="DNI:" onChange={buyerData}/>
                    <input name="email" type="email" placeholder="Correo:" onChange={buyerData}/>
                    <input name="email2" type="email" placeholder="Confirmar correo:" onChange={(e) => setValidMail(e.target.value)}/>
                    <button type="submit"  disabled={loading || !cart.length}>{loading ? "Procesando orden..." : "Generar Orden"}</button>
                    
                </form>
            </div>
        }
        </>
    )
}

export default Checkout
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import "../css/ItemDetail.css"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const ItemDetail = ({ detail }) => {

    const [purchase, setPurchase] = useState(false)
    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {

        const agregado = addItem(detail, cantidad)

        if (agregado) {

            setPurchase(true)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${cantidad} ${detail.name} agregado al carrito`,
                showConfirmButton: false,
                timer: 1800,
                background: "#1c1c1c",
                color: "#feda4a",
                toast: true
            })

        } else {

            Swal.fire({
                icon: "error",
                title: "Stock insuficiente",
                text: "No hay suficiente stock disponible",
                background: "#1c1c1c",
                color: "#feda4a",
                confirmButtonColor: "#ff2c2c"
            })

        }
    }

    return (
        <div className="item-detail">
            <h1>Detalle del producto: {detail.name}</h1>
            <img src={detail.img} alt={detail.name} />
            <p>{detail.description}</p>
            <p>Precio: ${detail.price},00</p>
            <p>Stock disponible: {detail.stock} unidades</p>

            {purchase 
                ? <Link className="btn-finalizar" to='/cart'>Finalizar compra</Link> 
                : <ItemCount stock={detail.stock} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail
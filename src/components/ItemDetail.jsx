import { useContext, useState } from "react"
import { CartContext} from "../context/CartContext"
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({detail}) => {

    const [purchase, setPurchase] = useState(false)
    const {addItem, cart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(`Agregaste una unidad del prodcuto ${detail.name}`)
        addItem(detail, cantidad)
        setPurchase(true)
    }

    return (
        <div className="item-detail">
            <h1>Detalle del producto: {detail.name}</h1>
            <img src={detail.img} alt={detail.name} />
            <p>{detail.description}</p>
            <p>Precio: ${detail.price},00</p>
            <p>Stock disponible: {detail.stock} unidades</p>

            {purchase ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail
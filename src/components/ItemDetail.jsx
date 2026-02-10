import { useContext } from "react"
import { CartContext} from "../context/CartContext"
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount"

const ItemDetail = ({detail}) => {

    const {addItem, cart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(`Agregaste una unidad del prodcuto ${detail.name}`)
        addItem(detail, cantidad)
    }

    return (
        <div className="item-detail">
            <h1>Detalle del producto: {detail.name}</h1>
            <img src={detail.img} alt={detail.name} />
            <p>{detail.description}</p>
            <p>Precio: ${detail.price}</p>
            <p>Stock disponible: {detail.stock}</p>

            <ItemCount stock={detail.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
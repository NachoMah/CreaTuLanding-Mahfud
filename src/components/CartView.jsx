import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../css/Cart.css"

const CartView = () => {

    const {cart, removeItem, clear, total} = useContext(CartContext)

    return (
        <div className="cart-container">
    <h1 className="cart-title">Carrito</h1>

    {cart.map((compra) =>(
        <div key={compra.id} className="cart-item">   

            <img 
                src={compra.img} 
                alt={compra.name} 
                style={{width: "120px"}} 
            />

            <div className="cart-info">
                <span><strong>{compra.name}</strong></span>
                <span>Precio unitario: ${compra.price}</span>
                <span>Cantidad: {compra.quantity}</span>
                <span>
                    Subtotal: ${compra.price * compra.quantity}
                </span>
            </div>

            <button 
                className="cart-remove"
                onClick={()=> removeItem(compra.id)}
            >
                X
            </button>

        </div>
    ))}

    <div className="cart-total">
        Total a pagar: $ {total && total()}
    </div>

    <div className="cart-buttons">
        <button 
            className="cart-btn cart-btn-primary"
            onClick={clear}
        >
            Terminar compra
        </button>

        <button 
            className="cart-btn cart-btn-danger"
            onClick={clear}
        >
            Vaciar carrito
        </button>
    </div>
</div>
    )
}

export default CartView
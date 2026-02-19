import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import "../css/Cart.css"
import Swal from "sweetalert2"

const CartView = () => {

    const {cart, removeItem, clear, total} = useContext(CartContext)
    const navigate = useNavigate()
    const confirmClear = () => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Se eliminarán todos los productos del carrito",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Sí, vaciar",
        cancelButtonText: "Cancelar",
        background: "#1c1c1c",
        color: "#feda4a"
        }).then((result) => {
        if (result.isConfirmed) {
            clear()

            Swal.fire({
                title: "Carrito vaciado",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
                background: "#1c1c1c",
                color: "#feda4a"
            })
        }
    })
}

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
        Total a pagar: ${total()},00
    </div>

    <div className="cart-buttons">
        
        <button 
            className="cart-btn cart-btn-secondary"
            onClick={() => navigate("/")}
        >   
            Seguir explorando
        </button>

        <button 
            className="cart-btn cart-btn-primary"
            onClick={() => navigate("/checkout")}
        >
            Terminar compra
        </button>

        <button 
            className="cart-btn cart-btn-danger"
            onClick={confirmClear}
        >
            Vaciar carrito
        </button>
    </div>
</div>
    )
}

export default CartView
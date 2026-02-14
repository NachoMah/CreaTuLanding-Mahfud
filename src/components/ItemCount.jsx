import { useState } from "react"
import "../css/ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
    
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    const comprar = () => {
        onAdd(counter)
    }

    return(
        <div className="itemCount">
            <button className="itemCount-btn" onClick={sumar}>+</button>
            <span className="itemCount-value">{counter}</span>
            <button className="itemCount-btn" onClick={restar}>-</button>
            <button className="itemCount-buy" onClick={comprar} disabled={counter === 0 || stock === 0}>Comprar</button>
        </div>
    )
}

export default ItemCount
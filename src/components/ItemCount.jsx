import { useState } from "react"
import "../css/ItemCount.css"

const ItemCount = ({ stock }) => {
    
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

    return(
        <div className="itemCount">
            <button className="itemCount-btn" onClick={sumar}>+</button>
            <span className="itemCount-value">{counter}</span>
            <button className="itemCount-btn" onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount
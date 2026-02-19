import { Link } from "react-router-dom"
import "../css/ErrorComodin.css"

const ErrorComodin = () => {
    return(
        <div className="error-container">
            <h1>ERROR: No se encuentra la ruta!</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default ErrorComodin
import { Link } from "react-router-dom"

const ErrorComodin = () => {
    return(
        <div>
            <h1>ERROR: No se encuentra la ruta!</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default ErrorComodin
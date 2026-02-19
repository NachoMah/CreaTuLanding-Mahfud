import { Link } from "react-router-dom"
import "../css/Cart.css"

const EmptyCart = () => {
    return (
    <div className="empty-cart">
        <h1>Carrito vacío</h1>
        <h2>
            Explore la tienda de Star Wars y agregue nuevos productos
        </h2>
        <Link to="/">Ver productos</Link>
        <img  src="https://i.postimg.cc/Cx4Xx3BG/jarjarbinks3.jpg" alt="Imagen de Jar Jar Binks sorprendido" />
    </div>
    )
}

export default EmptyCart
import { useContext } from "react"
import { CartContext} from "../context/CartContext"
import { RiShoppingCart2Line } from 'react-icons/ri'
import Badge from 'react-bootstrap/Badge';

const CartWidgetRI = () => {
const {cart, cartQuantity} = useContext(CartContext)
    return(
        <div className="cart-widget-item">
            <RiShoppingCart2Line/>
            {cart.length > 0 && <Badge className="cart-badge" bg="warning" text="dark"> {cartQuantity()} </Badge>}
        </div>
    );

};

export default CartWidgetRI;
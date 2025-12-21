import { RiShoppingCart2Line } from 'react-icons/ri'
import Badge from 'react-bootstrap/Badge';

const CartWidgetRI = () => {
    return(
        <div className="cart-widget-item">
            <RiShoppingCart2Line/>
            <Badge className="cart-badge" bg="warning" text="dark"> 4 </Badge>
        </div>
    );

};

export default CartWidgetRI;
import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";



export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])

    const addItem = (item, qty) => {

            const productInCart = cart.find(prod => prod.id === item.id)

            if(productInCart){

                const nuevaCantidad = productInCart.quantity + qty

                if(nuevaCantidad > item.stock){
                    return false
                }

                setCart(
                    cart.map((prod) =>
                        prod.id === item.id
                            ? {...prod, quantity: nuevaCantidad}
                            : prod
                    )
                )

                return true
            } 
            else{

                if(qty > item.stock){
                    return false
                }

                setCart([...cart,{...item, quantity: qty}])
                return true
            }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id)=> {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }
 
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
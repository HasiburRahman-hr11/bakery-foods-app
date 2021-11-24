import { createContext } from 'react'
import useCart from '../hooks/useCart';

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useCart();
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
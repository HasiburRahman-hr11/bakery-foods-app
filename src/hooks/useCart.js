import { useEffect, useState } from "react";
import { getOldCart } from "../utils/cartHandler";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getCart = () => {
            const myCart = getOldCart();
            setCart(myCart);
        }
        getCart();
    }, []);

    return [cart, setCart]
}

export default useCart;



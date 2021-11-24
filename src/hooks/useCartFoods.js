import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { foods } from '../fakeData';

const useCartFoods = () => {

    const { cart } = useContext(CartContext);
    const [cartFoods, setCartFoods] = useState([])

    useEffect(() => {
        const getCartFoods = () => {
            const cartFoods = [];

            cart.forEach(item => {
                const cartProduct = foods.find(p => p._id === item._id)
                if (cartProduct) {
                    cartProduct.quantity = item.quantity;
                    cartFoods.push(cartProduct)
                }
            })
            setCartFoods(cartFoods);
        }
        getCartFoods();

    }, [cart]);

    return {
        cartFoods
    }
}

export default useCartFoods;
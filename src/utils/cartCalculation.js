
const calculateCartAmount = (cartFoods) => {
    const subtotal = cartFoods.reduce((p, c) => p + c.price * c.quantity, 0);
    const shipping = 5;
    const tax = (subtotal + shipping) * 10 / 100;
    const totalPrice = subtotal + shipping + tax;
    return {
        subtotal,
        shipping,
        tax,
        totalPrice
    }
}
export default calculateCartAmount;
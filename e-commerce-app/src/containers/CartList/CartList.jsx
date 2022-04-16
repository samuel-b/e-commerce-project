import styles from "./CartList.module.scss";
import { useEffect, useState } from "react";
import Cart from "./../../components/Cart";

const CartList = ({ items, handleChange }) => {
    const [cartItems, setCartItems] = useState(
        items.filter((item) => {
            return item.inCart.L > 0 || item.inCart.M > 0 || item.inCart.S > 0;
        }),
    );

    useEffect(
        () => {
            setCartItems(
                items.filter((item) => {
                    return (
                        item.inCart.L > 0 ||
                        item.inCart.M > 0 ||
                        item.inCart.S > 0
                    );
                }),
            );
        },
        [items],
        [cartItems],
    );

    //    const [price, setPrice] = useState(
    //         cartItems.reduce((previousValue, currentValue) => {
    //             return previousValue.price + currentValue.price;
    //         }),
    //     );

    // const [price, setPrice] = useState(0);
    // useEffect(
    //     () => {
    //         setPrice(
    //             cartItems.reduce((previousValue, currentValue) => {
    //                 return previousValue.price + currentValue.price;
    //             }),
    //         );
    //     },
    //     [items],
    //     [cartItems],
    // );

    return (
        <div className={styles.CartList}>
            <h1>Shopping Cart</h1>
            {cartItems.map((item, index) => {
                return (
                    <Cart key={index} item={item} handleChange={handleChange} />
                );
            })}
            <button className={styles.CartList__Button}>Proceed to Checkout</button>
        </div>
    );
};

export default CartList;

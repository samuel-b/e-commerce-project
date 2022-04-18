import styles from "./CartList.module.scss";
import { useEffect, useState } from "react";
import Cart from "./../../components/Cart";

const CartList = ({ items, handleChange }) => {
    const [cartItems, setCartItems] = useState(
        items.filter((item) => {
            return item.inCart.L > 0 || item.inCart.M > 0 || item.inCart.S > 0;
        }),
    );

    const [priceArray, setPriceArray] = useState(
        cartItems.map((item) => {
            return item.price;
        }),
    );

    const [qtyArray, setQtyArray] = useState(
        cartItems.map((item) => {
            return Object.values(item.inCart).reduce((acc, currentValue) => {
                return acc + currentValue;
            });
        }),
    );

    const [total, setTotal] = useState(0);

    const test = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += priceArray[i] * qtyArray[i];
        }
        return total.toFixed(2);
    };

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

    useEffect(() => {
        setQtyArray(
            cartItems.map((item) => {
                return Object.values(item.inCart).reduce(
                    (acc, currentValue) => {
                        return acc + currentValue;
                    },
                );
            }),
        );

        setPriceArray(
            cartItems.map((item) => {
                return item.price;
            }),
        );
    }, [cartItems]);

    useEffect(() => {
        setTotal(test());
    }, [qtyArray]);

    // if (!cartItems[0]) {
    //     return;
    // }

    return (
        <div className={styles.CartList}>
            <h1 className={styles.CartList__Title}>Shopping Cart</h1>
            {cartItems.map((item, index) => {
                return (
                    <Cart key={index} item={item} handleChange={handleChange} />
                );
            })}
            <h5 className={styles.CartList__Total}>{`Subtotal: $${total}`}</h5>
            <button className={styles.CartList__Button}>Checkout</button>
        </div>
    );
};

export default CartList;

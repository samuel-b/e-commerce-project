import styles from "./CartList.module.scss";
import { useEffect, useState } from "react";
import Cart from "./../../components/Cart";

const CartList = ({ items, handleChange }) => {
    //Returns an array of objects that have an inCartQty > 0
    const [cartItems, setCartItems] = useState(
        items.filter((item) => {
            return item.inCart.L > 0 || item.inCart.M > 0 || item.inCart.S > 0;
        }),
    );
    //Returns an array of numbers (prices) of items in the cartItems array
    const [priceArray, setPriceArray] = useState(
        cartItems.map((item) => {
            return item.price;
        }),
    );
    //Returns an array of numbers (qty) of items in the cartItems array
    const [qtyArray, setQtyArray] = useState(
        cartItems.map((item) => {
            return Object.values(item.inCart).reduce((acc, currentValue) => {
                return acc + currentValue;
            });
        }),
    );
    //Used to track the total calue of qty * prices(the following function)
    const [total, setTotal] = useState(0);
    //Loop through the qty and price array and times them for every iteration and return the fnal value
    const test = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += priceArray[i] * qtyArray[i];
        }
        return total.toFixed(2);
    };
    //Updates the cartItems array when there is a change
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
    //Updates the qtyArray and priceArray when there is a change
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
    //Updates the subtotal when there is a change
    useEffect(
        () => {
            setTotal(test());
        },
        [qtyArray],
        [test],
    );

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

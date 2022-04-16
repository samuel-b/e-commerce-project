import styles from "./Cart.module.scss";

const Cart = ({ item, handleChange }) => {
    let sizeL = "";
    let sizeM = "";
    let sizeS = "";

    const handleRemoveLarge = () => {
        handleChange({
            ...item,
            "inStock.L": item.inStock.L + 1,
            "inCart.L": item.inCart.L - 1,
        });
    };

    const handleRemoveMedium = () => {
        handleChange({
            ...item,
            "inStock.M": item.inStock.M + 1,
            "inCart.M": item.inCart.M - 1,
        });
    };

    const handleRemoveSmall = () => {
        handleChange({
            ...item,
            "inStock.S": item.inStock.S + 1,
            "inCart.S": item.inCart.S - 1,
        });
    };

    if (item.inCart.L > 0) {
        sizeL = (
            <>
                <p
                    className={
                        styles.Cart__Description
                    }>{` Size: L Qty: ${item.inCart.L} Price: $${item.price}`}</p>
                <p className={styles.Cart__Delete} onClick={handleRemoveLarge}>
                    Delete
                </p>
            </>
        );
    }
    if (item.inCart.M > 0) {
        sizeM = (
            <>
                <p
                    className={
                        styles.Cart__Description
                    }>{` Size: M Qty: ${item.inCart.M} Price: $${item.price}`}</p>
                <p className={styles.Cart__Delete} onClick={handleRemoveMedium}>
                    Delete
                </p>
            </>
        );
    }
    if (item.inCart.S > 0) {
        sizeS = (
            <>
                <p
                    className={
                        styles.Cart__Description
                    }>{`Size: S Qty: ${item.inCart.S} Price: $${item.price}`}</p>
                <p className={styles.Cart__Delete} onClick={handleRemoveSmall}>
                    Delete
                </p>
            </>
        );
    }

    return (
        <div className={styles.Cart}>
            <img className={styles.Cart__Image} src={item.image} alt="" />
            <div>
                <h3>{item.title}</h3>
                {sizeL}
                {sizeM}
                {sizeS}
            </div>
        </div>
    );
};

export default Cart;

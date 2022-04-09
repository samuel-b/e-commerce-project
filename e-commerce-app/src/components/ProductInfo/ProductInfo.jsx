import styles from "./ProductInfo.module.scss";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const ProductInfo = ({ items }) => {
    const { itemId } = useParams();

    let params = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(items.find((item) => item.id == params.itemId));
    }, [items]);

    return (
        <>
            <h1>{`$${item.price}`}</h1>
        </>
    );
};

export default ProductInfo;

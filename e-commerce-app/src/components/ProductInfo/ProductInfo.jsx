import styles from "./ProductInfo.module.scss";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const ProductInfo = ({ items }) => {
    // Destructuring the Params Object. Using itemId straight away.
    const { itemId } = useParams();

    // Assigning the Params Object to the params variable so itemId  can be accessed via params.itemId.
    let params = useParams();

    // Global state variable used below to render the relevant item/object data
    const [item, setItem] = useState({});

    // When the global state variable 'items' is updated iterate through the items array and change the value of the item global state variable 'item' to the value of the item id, comparing item.id and params.itemId
    useEffect(() => {
        setItem(items.find((item) => item.id == params.itemId));
    }, [items]);

    return (
        <>  <h3>{item.title}</h3>
            <p>{`Description: ${item.description}`}</p>
        </>
    );
};

export default ProductInfo;

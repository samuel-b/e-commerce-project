import styles from "./ItemCard.module.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <>
            <h4>{item.title}</h4>
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt="" />
            </Link>
            <p>Description: {item.description}</p>
            <p>Prices: ${item.price}</p>
        </>
    );
};

export default ItemCard;

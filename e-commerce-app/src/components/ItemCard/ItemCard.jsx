import styles from "./ItemCard.module.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <div className={styles.ItemCard}>
            <h4>{item.title}</h4>
            <Link to={`/product/${item.id}`}>
                <img
                    className={styles.ItemCard__Image}
                    src={item.image}
                    alt=""
                />
            </Link>
            <p>Price: ${item.price}</p>
        </div>
    );
};

export default ItemCard;

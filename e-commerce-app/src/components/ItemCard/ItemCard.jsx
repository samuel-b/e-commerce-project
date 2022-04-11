import styles from "./ItemCard.module.scss";
import { Link } from "react-router-dom";
import { updateItem } from "../../services/server";
import { useEffect, useState } from "react";
import { getItems } from "../../services/server";

const ItemCard = ({ item }) => {
    const [isFav, setFav] = useState(item.isFav);
   
    const handleFav = () => {
        item.isFav
            ? setFav(updateItem(item.id, { isFav: false }))
            : setFav(updateItem(item.id, { isFav: true }));
    };

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
            <p>Size: {item.variation[0].size} Qty:{item.variation[0].qty}</p>
            <p>Size: {item.variation[1].size} Qty:{item.variation[1].qty}</p>
            <p>Size: {item.variation[2].size} Qty:{item.variation[2].qty}</p>
            <p>Size: {item.variation[3].size} Qty:{item.variation[3].qty}</p>
            {/* <button onClick={handleFav}> Fav</button> */}
        </div>
    );
};

export default ItemCard;

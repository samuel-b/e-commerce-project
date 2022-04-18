import styles from "./FavList.module.scss";
import { useEffect, useState } from "react";
import ItemCard from "./../../components/ItemCard";
const FavList = ({ items }) => {
    const [favItems, setFavItems] = useState(
        items.filter((item) => {
            return item.isFav;
        }),
    );

    useEffect(() => {
        setFavItems(
            items.filter((item) => {
                return item.isFav;
            }),
        );
    }, [items]);

    return (
        <div>
          <h1 className={styles.FavList__Title}>Favourites</h1>
          <div className={styles.FavList__Grid}>
            {favItems.map((item) => {
                return <ItemCard key={item.id} item={item} />;
            })}
            </div>
        </div>
    );
};

export default FavList;

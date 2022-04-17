import styles from "./Home.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Home = ({ items }) => {
    const { search } = useContext(SearchContext);
    const [filteredProducts, setFilteredProducts] = useState(items);

    useEffect(() => {
        setFilteredProducts(
            items.filter((item) => {
                return item.title.includes(search);
            }),
        );
    }, [search, items]);

    return (
        <div className={styles.Home}>
            {filteredProducts.map((item) => {
                return <ItemCard key={item.id} item={item} />;
            })}
        </div>
    );
};

export default Home;

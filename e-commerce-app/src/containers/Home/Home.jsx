import styles from "./Home.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard";

const Home = ({ items }) => {
    return (
        <div className={styles.Home}>
            {/* Maps through the array of objects recieved from the read function and returns the itemCard for each and throwing the item prop so it's contents can be accessed */}
            {items.map((item) => {
                return <ItemCard key={item.id} item={item} />;
            })}
        </div>
    );
};

export default Home;

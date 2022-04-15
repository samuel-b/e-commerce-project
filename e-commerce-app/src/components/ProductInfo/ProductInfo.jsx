import styles from "./ProductInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { addItems } from "../../services/server";

const ProductInfo = ({ items, handleChange }) => {
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

    //If item is a favourite use faHeartCircleCheck icon, otherwise faHeart.
    const favIcon = item.isFav ? faHeartCircleCheck : faHeart;

    //Global state variable to keep track of if an item has been favourited.
    const [isFav, setFav] = useState(item.isFav);

    //Assigned to the on-click event of the favourite button, toggles the value of isFav key using the state setter.
    const toggleFav = () => {
        setFav(!item.isFav);
    };
    //When the globalstate variable is changed using the setter above use the update CRUD operation to change the value of the isFav key equal to the isFav state variable.
    useEffect(() => {
        handleChange({
            ...item,
            isFav: isFav,
        });
    }, [isFav]);

    //Used to keep track of the selected size deom the drop-down list, initalising as sizeSmall because it is the first option, which allows the handleAddCart to work as soon as the product page is opened and the user wants the small size.
    const [selectedSize, setSize] = useState("S");

    const handleSize = (e) => {
        setSize(e.target.value);
    };

    //When this button it pressed we want to -1 from the selected size qty and +1 of the selected size/item to the cart
    const handleAddCart = () => {
        switch (selectedSize) {
            case "S":
                if (item.inStock.S <= 0) {
                    alert("Out of stock");
                } else
                    handleChange({
                        ...item,
                        "inStock.S": item.inStock.S - 1,
                        "inCart.S": item.inCart.S + 1,
                    });
                break;
            case "M":
                if (item.inStock.M <= 0) {
                    alert("Out of stock");
                } else
                    handleChange({
                        ...item,
                        "inStock.M": item.inStock.M - 1,
                        "inCart.M": item.inCart.M + 1,
                    });
                break;
            case "L":
                if (item.inStock.L <= 0) {
                    alert("Out of stock");
                } else
                    handleChange({
                        ...item,
                        "inStock.L": item.inStock.L - 1,
                        "inCart.L": item.inCart.L + 1,
                    });
                break;

            default:
                alert(
                    "There is an issue, please try again - if issues persists please contact the Store",
                );
        }
    };

    return (
        <div className={styles.ProductInfo}>
            <img
                className={styles.ProductInfo__Image}
                src={item.image}
                alt="productImage"
            />
            <div className={styles.ProductInfo__Container}>
                <h3 className={styles.ProductInfo__Title}>{item.title}</h3>
                <FontAwesomeIcon
                    className={styles.ProductInfo__Icon}
                    icon={favIcon}
                    onClick={toggleFav}
                    size="lg"
                />
                <p>{`Price: $${item.price}`}</p>

                <select name="" id="" onChange={handleSize}>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                </select>
                <button
                    className={styles.ProductInfo__Button}
                    onClick={handleAddCart}>
                    Add to Cart
                </button>
                {/* <p>{`Qty: ${item.size.S}`}</p> */}

                <p>{`Description: ${item.description}`}</p>
            </div>
        </div>
    );
};

export default ProductInfo;

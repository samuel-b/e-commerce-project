import { getItems } from "./services/server";
import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
    //Creates a global state variable, initialsiing as an empty array.
    const [items, setItems] = useState([]);

    //Function assigns the return/value of the getItems() Read function to the global state variable above.
    const getData = async () => {
        const data = await getItems();
        setItems(data);
    };
    // console.log(items);

    //On-mount, execute the above function that reads the data from the firestore collection.
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {/* Maps through the array of objects recieved from the read function and returns the itemCard for each and throwing the item prop so it's contnts can be accessed */}
            {items.map((item) => {
                return <ItemCard item={item} />;
            })}
        </>
    );
}

export default App;

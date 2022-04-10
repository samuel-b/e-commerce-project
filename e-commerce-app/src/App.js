import { getItems, updateItem } from "./services/server";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import ProductInfo from "./components/ProductInfo/ProductInfo";

function App() {
    //Creates a global state variable, initialsiing as an empty array.
    const [items, setItems] = useState([]);

    //Function assigns the return/value of the getItems() Read function to the global state variable above.
    const getData = async () => {
        const data = await getItems();
        setItems(data);
    };
    // console.log(items);

    //On-mount, and when the value of [items] changes execite the above function that reads the data from the firestore collection.
    useEffect(() => {
        getData();
    }, [ ,[items]]);

    return (
        <BrowserRouter>
            <Routes>
                {/* Sets the home page/container at the root path and passes the items object to the home container as a prop */}
                <Route path="/" element={<Home items={items} />} />
                {/* Sets the product info component at the /product/param(item.id) path and passes the items object as a prop */}
                <Route
                    path="/product/:itemId"
                    element={<ProductInfo items={items} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

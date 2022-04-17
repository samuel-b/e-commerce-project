import { useState, useContext } from "react";
import styles from "./SearchBar.module.scss";
import Button from "react-bootstrap/Button";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const { search, setSearch } = useContext(SearchContext);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        setSearch(input);
        setInput("");
    };

    return (
        <>
            <input
                className={styles.SearchBar__Input}
                onChange={handleChange}
                type="text"
                value={input}
            />
            <Button variant="outline-light" size="sm" onClick={handleClick}>
                Search
            </Button>
        </>
    );
};

export default SearchBar;

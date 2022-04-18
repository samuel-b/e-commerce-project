import styles from "./NavBar.module.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm " bg="primary" variant="dark">
            <Container fluid>
                <Link to="/"><Navbar.Brand>E-commerce</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                    </Nav>
                      <SearchBar></SearchBar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

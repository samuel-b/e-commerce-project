import styles from "./FeaturedCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const FeaturedCarousel = ({ items }) => {
    //Resolves the page not loading/items[0] is undefined issue
    if (!items[0]) {
        return;
    }

    return (
        <>
            <Carousel variant="dark" fade interval={null}>
                <Carousel.Item id={styles.FeaturedCarousel__Item1}>
                    <h2>Featured</h2>
                    <h5>{items[0].title}</h5>
                    <Link to={`/product/${items[0].id}`}>
                        <img
                            style={{
                                width: 300,
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            className="d-block w-50"
                            src={items[0].image}
                            alt="First slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item id={styles.FeaturedCarousel__Item2}>
                    <h2>Featured</h2>
                    <h5>{items[1].title}</h5>
                    <Link to={`/product/${items[1].id}`}>
                        <img
                            style={{
                                width: 300,
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            className="d-block w-50"
                            src={items[1].image}
                            alt="Second slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item id={styles.FeaturedCarousel__Item3}>
                    <h2>Featured</h2>
                    <h5>{items[2].title}</h5>
                    <Link to={`/product/${items[2].id}`}>
                        <img
                            style={{
                                width: 300,
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            className="d-block w-50"
                            src={items[2].image}
                            alt="Third slide"
                        />
                    </Link>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default FeaturedCarousel;

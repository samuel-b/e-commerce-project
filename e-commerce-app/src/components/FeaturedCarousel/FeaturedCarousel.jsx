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
                <Carousel.Item id={styles.FeaturedCarousel__Item}>
                    <h2>Featured</h2>
                    <h4>{items[0].title}</h4>
                    <Link to={`/product/${items[0].id}`}>
                        <img
                            id={styles.FeaturedCarousel__Item__Image}
                            className="d-block w-75"
                            src={items[0].image}
                            alt="First slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>Featured</h2>
                    <h4>{items[1].title}</h4>
                    <Link to={`/product/${items[1].id}`}>
                        <img
                            className="d-block w-75"
                            src={items[1].image}
                            alt="Second slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>Featured</h2>
                    <h4>{items[2].title}</h4>
                    <Link to={`/product/${items[2].id}`}>
                        <img
                            className="d-block w-75"
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

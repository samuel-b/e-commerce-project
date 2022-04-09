import styles from './ItemCard.module.scss';

const ItemCard = ({item}) => {

return (
  <>
  <h4>{item.title}</h4>
  <img src={item.image} alt="" />
  <p>Description: {item.description}</p>
  <p>Prices: ${item.price}</p>
  </>
)
}

export default ItemCard;

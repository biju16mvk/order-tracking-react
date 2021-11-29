import classes from "./Items.module.css";

const Items = props => {
  return props.itemData.map(item => (
    <div key={item.number} className={classes["order-details__articles__data"]}>
      {item.quantity && <span>x{item.quantity}</span>}
      {item.image && (
        <span>
          <img
            className={classes["order-details__articles__data__img"]}
            src={item.image}
            alt="product"
          />
        </span>
      )}
      {item.name && (
        <span className={classes["order-details__data"]}>
          {item.name}
          <br />
          <span className={classes["order-details__articles__data__num"]}>
            {item.number}
          </span>
        </span>
      )}
    </div>
  ));
};

export default Items;

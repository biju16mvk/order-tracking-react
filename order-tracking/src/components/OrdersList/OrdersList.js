import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../UI/Card/Card";
import OrderItem from "./OrderItem";
import classes from "./OrdersList.module.css";

const OrdersList = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onItemClickHandler = item => {
    navigate(`/order/${item.trackingNumber}`, { state: item });
  };
  return (
    <React.Fragment>
      {state.length > 0 ? (
        <Card className="orders-list-card">
          <div className={classes["orders-list"]}>
            <h3>Your Orders</h3>
            {state.map(item => (
              <OrderItem
                key={item.id}
                orderData={item}
                onClickItem={() => onItemClickHandler(item)}
              />
            ))}
          </div>
        </Card>
      ) : (
        <Card className="orders-list-card">
            <div className={classes["orders-list"]}>
                No orders found for the entered email
            </div>
        </Card>
      )}
    </React.Fragment>
  );
};

export default OrdersList;

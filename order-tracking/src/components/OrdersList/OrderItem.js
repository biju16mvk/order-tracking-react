import React from "react";

import Card from "../UI/Card/Card";
import Label from "../UI/Label/Label";
import classes from "./OrderItem.module.css";

const OrderItem = props => {
  return (
    <Card>
      <div onClick={props.onClickItem} className={classes["order-item"]}>
        <div className={classes["order-item__wrapper"]}>
          <div>
            <Label>Order Number</Label>
            <p className={classes["order-item__data"]}>{props.orderData.id}</p>
          </div>
          <div>
            <Label>Current Status</Label>
            <p className={classes["order-item__data"]}>
              {props.orderData.currentStatus}
            </p>
          </div>
        </div>
        <div className={classes["order-item__address__wrapper"]}>
          <Label>Delivery Address</Label>
          <p className={classes["order-item__data"]}>
            {props.orderData.street}
            <br />
            {props.orderData.zip} {props.orderData.city}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;

import React from "react";
import { useLocation } from "react-router-dom";

import Card from "../UI/Card/Card";
import Label from "../UI/Label/Label";
import Items from "./Items";
import classes from "./OrderDetails.module.css";

const OrderDetails = () => {
  const { state } = useLocation();
  return (
    <React.Fragment>
      <Card className="orders-list-card">
        <div className={classes["order-details__wrapper"]}>
          <div>
            <Label>Order Number</Label>
            <p className={classes["order-details__data"]}>{state.id}</p>
            <Label>Delivery Address</Label>
            <p className={classes["order-details__data"]}>
              {state.street}
              <br />
              {state.zip} {state.city}
            </p>
          </div>

          <Card className="orders-data-card">
            <div className={classes["order-details"]}>
              <Label>Tracking Number</Label>
              <p className={classes["order-details__data"]}>
                {state.trackingNumber}
              </p>
              <Label>Current Status</Label>
              <p className={classes["order-details__data"]}>
                {state.currentStatus}
              </p>
              <p className={classes["order-details__status"]}>
                {state.statusDetails}
              </p>
            </div>
          </Card>

          <Card className="orders-data-card">
            <div className={classes["order-details"]}>
              <Label>Articles</Label>
              {state.items.length > 0 ? (
                <Items itemData={state.items}/>
              ) : (
                <p>No articles found for the order</p>
              )}
            </div>
          </Card>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default OrderDetails;

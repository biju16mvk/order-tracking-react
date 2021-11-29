import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { EMAIL_REGEX, ORDER_TRACKING_API } from "../../shared/constants";
import Card from "../UI/Card/Card";
import classes from "./OrderTrackingForm.module.css";

const OrderTrackingForm = () => {
  const [email, setEmail] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const formValidityTimer = setTimeout(() => {
      setFormIsValid(EMAIL_REGEX.test(email));
    }, 200);
    return () => {
      clearTimeout(formValidityTimer);
    };
  }, [email]);

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    fetch(`${ORDER_TRACKING_API}?email=${email}`)
      .then(res => res.json())
      .then(data => {
        navigate("/orders", { state: data });
      })
      .catch(error => {
        console.log(`Something wrong happened ${error}`);
      });
  };
  return (
    <Card className="order-tracking-form-card">
      <div className={classes["order-tracking-form"]}>
        <form
          onSubmit={submitHandler}
          className={classes["order-tracking-form__form"]}
        >
          <p>Please enter your email address to see your recent orders</p>
          <label> Email </label>
          <input type="email" onChange={emailChangeHandler} className={!formIsValid && classes.invalid}/>
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </form>
      </div>
    </Card>
  );
};

export default OrderTrackingForm;

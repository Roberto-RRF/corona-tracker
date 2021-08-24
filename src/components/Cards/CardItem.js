import React from "react";

import { Grid, Typography, CardContent, Card } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./CardItem.module.css";
import cx from "classnames";

const CartItem = (props) => {
  let type;

  if (props.type === "yellow") {
    type = styles.yellow;
  }
  if (props.type === "blue") {
    type = styles.blue;
  }
  if (props.type === "black") {
    type = styles.black;
  }
  if (props.type === "green") {
    type = styles.green;
  }
  if (props.type === "orange") {
    type = styles.orange;
  }



  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, type)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={props.data} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{props.date}</Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CartItem;

import React from "react";

import { Grid } from "@material-ui/core";
import styles from "./GroupCards.module.css";
import CartItem from "./CardItem";

const Cards = (props) => {
  // const [data, setData] = useState(Boolean(props.cardInfo.data));
  // const [date, setDate] = useState(Boolean(props.cardInfo.date));

  const data = props.cardInfo.data;
  const date = props.cardInfo.date;

  // setData(props.cardInfo.data);
  // setDate(props.cardInfo.date);
  // console.log(data);
  // console.log(date);
  // const cards = data.map((d) => {
  //   return (
  //     <CartItem
  //       title={d.title}
  //       data={d.amount}
  //       date={date}
  //       description={d.description}
  //       type={d.type}
  //     />
  //   );
  // })

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {(data && date) ? data.map((d) => {
          return (
            <CartItem
              key={Math.random()}
              title={d.title}
              data={d.amount}
              date={date}
              description={d.description}
              type={d.type}
            />
          );
        }):null}
      </Grid>
    </div>
  );
};

export default Cards;

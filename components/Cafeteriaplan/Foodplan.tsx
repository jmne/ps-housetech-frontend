import { Dish } from "types/Foodplan";
import DishCard from "./Dish";

import styles from "./Cafeteriaplan.module.scss";
import { Fragment } from "react";

interface props {
  data: Dish[];
}

export function Foodplan({ data }: props) {
  return (
    <ol className={styles.cafeteriaplan}>
      {data.map((dish, index) => {
        if (index === 3)
          return (
            <Fragment key={index}>
              <div></div>
              <DishCard dish={dish}/>
            </Fragment>
          );
        else return <DishCard dish={dish} key={index} />;
      })}
    </ol>
  );
}

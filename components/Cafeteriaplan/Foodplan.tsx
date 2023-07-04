import { Dish } from "types/Foodplan";
import DishCard from "./Dish";

import styles from "./Cafeteriaplan.module.scss";
import { Fragment, useEffect, useRef } from "react";
import { useSwiperSlide } from "swiper/react";

interface props {
  data: Dish[];
}

export function Foodplan({ data }: props) {
  const swiperSlide = useSwiperSlide();
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (swiperSlide.isActive || !listRef.current) return;
    listRef.current.scrollTo(0, 0);
  }, [swiperSlide.isActive]);

  return (
    <ol className={styles.cafeteriaplan} ref={listRef}>
      {data.map((dish, index) => {
        if (index === 3)
          return (
            <Fragment key={index}>
              <div></div>
              <DishCard dish={dish} />
            </Fragment>
          );
        else return <DishCard dish={dish} key={index} />;
      })}
    </ol>
  );
}

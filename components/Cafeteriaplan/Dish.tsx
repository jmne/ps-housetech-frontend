// IMPORTS - BUILTINS
import Image from "next/image";

// IMPORTS - ASSETS
import { Dish } from "types/Foodplan";
import styles from "@/components/Cafeteriaplan/Dish.module.scss";

// IMPORTS - ICONS
import icon_chicken from "assets/images/foodicons/chicken.png";
import icon_pork from "assets/images/foodicons/pork.png";
import icon_beef from "assets/images/foodicons/beef.png";
import icon_fish from "assets/images/foodicons/fish.png";
import icon_vegetarian from "assets/images/foodicons/vegetarian.png";
import icon_vegan from "assets/images/foodicons/vegan.png";
import icon_alcohol from "assets/images/foodicons/alcohol.png";

const getIcon = {
  Gfl: icon_chicken,
  Sch: icon_pork,
  Rin: icon_beef,
  Fis: icon_fish,
  Vgt: icon_vegetarian,
  Vgn: icon_vegan,
  Alk: icon_alcohol
};

interface DishProps {
  dish: Dish;
}

// returns the dish container with information about the dish; prices are fixed to 2 decimal places and a '.' is replaced by a ','
export default function DishCard({ dish }: DishProps) {
  return (
    <div className={styles.container}>
      <div className={styles.dishInfo}>
        <span className={styles.name}>{dish.meal}</span>
        <span className={styles.prices}>
          {dish.price1.toFixed(2).replace(".", ",")}€ |{" "}
          {dish.price3.toFixed(2).replace(".", ",")}€
        </span>
      </div>
      <div className={styles.icons}>
        {dish.foodicons.map((icon, iconIndex) => (
          <Image
            src={getIcon[icon]}
            alt={"Foodicon"}
            fill={false}
            className={styles.icon}
            key={iconIndex}
          />
        ))}
      </div>
    </div>
  );
}

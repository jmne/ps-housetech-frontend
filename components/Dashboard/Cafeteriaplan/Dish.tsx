// IMPORTS - BUILTINS
import Image from "next/image";
import * as RotationItem from "@/components/UI/RotationItem";

// IMPORTS - ASSETS
import { Dish } from "types/Foodplan";
import styles from "@/components/Dashboard/Cafeteriaplan/Dish.module.scss";

// IMPORTS - ICONS
import icon_chicken from "assets/icons/food/chicken.png";
import icon_pork from "assets/icons/food/pork.png";
import icon_beef from "assets/icons/food/beef.png";
import icon_fish from "assets/icons/food/fish.png";
import icon_vegetarian from "assets/icons/food/vegetarian.png";
import icon_vegan from "assets/icons/food/vegan.png";
import icon_alcohol from "assets/icons/food/alcohol.png";

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
    <RotationItem.Root>
      <RotationItem.Front className={styles.front}>
        <div className={styles.dishInfo}>
          <span className={styles.name}>{dish.meal}</span>
          <div className={styles.prices}>
            {(dish.price1 !== null || dish.price3 !== null) && (
              <>
                <span>
                  {dish.price1 !== null
                    ? dish.price1.toFixed(2).replace(".", ",") + "€"
                    : "n/a"}
                </span>
                <span>|</span>
                <span>
                  {dish.price3 !== null
                    ? dish.price3.toFixed(2).replace(".", ",") + "€"
                    : "n/a"}
                </span>
              </>
            )}
          </div>
        </div>
        <div className={styles.icons}>
          {dish.foodicons &&
            dish.foodicons.map((icon, iconIndex) => (
              <Image
                src={getIcon[icon]}
                alt={"Foodicon"}
                fill={false}
                className={styles.icon}
                key={iconIndex}
                priority
              />
            ))}
        </div>
      </RotationItem.Front>
      <RotationItem.Back className={styles.easteregg}>
        {dish.foodicons &&
          dish.foodicons.map((icon, iconIndex) => (
            <Image
              src={getIcon[icon]}
              alt={"Foodicon"}
              fill={false}
              className={styles.icon}
              key={iconIndex}
              priority
            />
          ))}
        Mahlzeit!
        {dish.foodicons &&
          dish.foodicons.map((icon, iconIndex) => (
            <Image
              src={getIcon[icon]}
              alt={"Foodicon"}
              fill={false}
              className={styles.icon}
              key={iconIndex}
              priority
            />
          ))}
      </RotationItem.Back>
    </RotationItem.Root>
  );
}

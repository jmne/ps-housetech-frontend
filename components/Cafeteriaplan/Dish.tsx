// IMPORTS - BUILTINS
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// IMPORTS - ASSETS
import { DishInformation } from "types/DishInformation";
import styles from "@/components/Cafeteriaplan/Dish.module.scss";

// IMPORTS - ICONS
import icon_chicken from "assets/images/foodicons/chicken.png";
import icon_pork from "assets/images/foodicons/pork.png";
import icon_beef from "assets/images/foodicons/beef.png";
import icon_fish from "assets/images/foodicons/fish.png";
import icon_vegetarian from "assets/foodicons/images/vegetarian.png";
import icon_vegan from "assets/images/foodicons/vegan.png";
import icon_alcohol from "assets/images/foodicons/alcohol.png";

const getIcon = {
    "Gfl": "assets/images/foodicons/chicken.png",
    "Sch": "assets/images/foodicons/pork.png",
    "Rin": "assets/images/foodicons/beef.png",
    "Fis": "assets/images/foodicons/fish.png",
    "Vgt": "assets/images/foodicons/vegetarian.png",
    "Vgn": "assets/images/foodicons/vegan.png",
    "Alk": "assets/images/foodicons/alcohol.png",
}



interface DishProps {
    dish: DishInformation
}
export default function Dish({ dish }:DishProps) {  
    return (
         
             <div className={styles.container}>
                <div className={styles.dishInfo}>
                    <span className={styles.name}>{dish.meal}</span>
                    <span className={styles.prices}>{dish.price1}€ | {dish.price3}€</span>
                </div>
                <div className={styles.icons}>
                  {/**
                    * {dish.foodicons.map((icon) => (
                    *    <Image src={getIcon[icon]} alt={"Foodicon"} fill={false} className={styles.icons} />
                    *    
                    *))
                    }*/}
                    <Image src={icon_chicken} alt={"chicken"} fill={false} className={styles.icons} />
                </div> 
             </div>
             
    )
}


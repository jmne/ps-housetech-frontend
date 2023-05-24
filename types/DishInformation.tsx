// All possible options for the category property of a meal
type Foodicons = "Gfl" | "Sch" | "Rin" | "Fis" | "Vgt" | "Vgn" | "Alk";

export interface DishInformation {
  category: string;
  meal: string;
  foodicons: Foodicons[];
  price1: number;
  price3: number;
  allergens: string;
}

// Sample data
export const sample_dishes: DishInformation[] = [
  {
    category: "Speisenangebot 1",
    meal: "Kartoffelpfanne mit Pilzen nach Hessischer Art",
    foodicons: ["Gfl", "Rin"],
    price1: 2.3,
    price3: 3.45,
    allergens: "1,6,F"
  },
  {
    category: "Speisenangebot 2",
    meal: "Paella mit Räuchertofu",
    foodicons: ["Vgn"],
    price1: 2.6,
    price3: 3.9,
    allergens: "AWE"
  },
  {
    category: "Speisenangebot 3",
    meal: "Kartoffelpfanne mit Pilzen nach Hessischer Art",
    foodicons: ["Vgn"],
    price1: 2.3,
    price3: 3.45,
    allergens: "I"
  },
  {
    category: "Beilage 1",
    meal: "Mandelkroketten",
    foodicons: ["Vgt"],
    price1: 1.1,
    price3: 1.65,
    allergens: "AWE,C"
  },
  {
    category: "Dessert 1",
    meal: "Erdbeerquark",
    foodicons: ["Vgt"],
    price1: 0.7,
    price3: 1.05,
    allergens: "AWE,G,J,Gfl"
  }
];

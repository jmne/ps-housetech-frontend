type Foodicons = "Gfl" | "Sch" | "Rin" | "Fis" | "Vgt" | "Vgn" | "Alk";

export interface Dish {
  meal: string;
  foodicons: Foodicons[] | null;
  price1: number;
  price3: number;
  allergens: string;
}

export interface Foodplan {
  item: Dish[];
  date: string;
  weekday: string;
}

export interface FoodplanConverted {
  item: Dish[] | undefined;
  date: Date;
}

function formatDateForData(d: Date) {
  const month_short = d.getMonth() + 1;
  const day_short = d.getDate();

  const year = d.getFullYear();
  const month = month_short.valueOf() < 10 ? `0${month_short}` : month_short;
  const day = day_short.valueOf() < 10 ? `0${day_short}` : day_short;

  return `${year}-${month}-${day}`;
}

const today = new Date();

interface Testdata extends Omit<Foodplan, "item"> {
  item: TestDish[] | undefined;
}

interface TestDish extends Dish {
  category: string;
}

export const sample_foodplan: Testdata[] = [
  {
    item: [
      {
        category: "Speisenangebot 1",
        meal: "Paella mit Räuchertofu",
        foodicons: ["Vgn"],
        price1: 2.6,
        price3: 3.9,
        allergens: "1,6,F"
      },
      {
        category: "Speisenangebot 2",
        meal: "Paniertes Hähnchenschnitzel mit Pilzsauce",
        foodicons: ["Gfl"],
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
        meal: "Reis",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: "1"
      },
      {
        category: "Beilage 2",
        meal: "Kaisergemüse",
        foodicons: ["Vgn"],
        price1: 0.5,
        price3: 0.75,
        allergens: "1"
      },
      {
        category: "Beilage 3",
        meal: "Schwarzwurzeln",
        foodicons: ["Vgn"],
        price1: 0.7,
        price3: 1.05,
        allergens: "F"
      },
      {
        category: "Beilage 4",
        meal: "Beilagensalat mit Essig-Öl-Dressing",
        foodicons: ["Vgn"],
        price1: 0.9,
        price3: 1.35,
        allergens: "J"
      },
      {
        category: "Beilage 5",
        meal: "Mandelkroketten",
        foodicons: ["Vgt"],
        price1: 1.1,
        price3: 1.65,
        allergens: "1,AWE,C,HMA"
      },
      {
        category: "Dessert 1",
        meal: "Erdbeerquark",
        foodicons: ["Vgt"],
        price1: 0.7,
        price3: 1.05,
        allergens: "G"
      }
    ],
    date: formatDateForData(new Date(today.getTime() - 86400000)),
    weekday: "Wednesday"
  },
  {
    item: [
      {
        category: "Speisenangebot 1",
        meal: "Wrap mit Bulgur und Gemüse",
        foodicons: ["Vgn"],
        price1: 2.85,
        price3: 4.3,
        allergens: "AWE"
      },
      {
        category: "Speisenangebot 2",
        meal: "Reibekuchen Apfelmus",
        foodicons: ["Vgt"],
        price1: 2.6,
        price3: 3.9,
        allergens: "AWE,C"
      },
      {
        category: "Speisenangebot 3",
        meal: "Putensteak Tandoori",
        foodicons: ["Gfl"],
        price1: 2.85,
        price3: 4.3,
        allergens: "AWE,G,J,Gfl"
      },
      {
        category: "Beilage 1",
        meal: "Blumenkohl",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: ""
      },
      {
        category: "Beilage 1",
        meal: "Nudeln",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: "AWE"
      },
      {
        category: "Beilage 1",
        meal: "Möhren",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: "1"
      },
      {
        category: "Beilage 2",
        meal: "Couscous",
        foodicons: ["Vgn"],
        price1: 0.5,
        price3: 0.75,
        allergens: "AWE"
      }
    ],
    date: formatDateForData(today),
    weekday: "Friday"
  },

  {
    item: [
      {
        category: "Speisenangebot 1",
        meal: "Champignontasche mit Sauce béarnaise",
        foodicons: ["Vgt"],
        price1: 2.85,
        price3: 4.3,
        allergens: "ADI,AWE,C,G,I"
      },
      {
        category: "Speisenangebot 2",
        meal: "Teufelskartoffeln mit Rucola mit einem Soja-Kräuter-Dip",
        foodicons: ["Vgn"],
        price1: 1.8,
        price3: 2.7,
        allergens: "4"
      },
      {
        category: "Speisenangebot 3",
        meal: "Münsterländer Brauhaus-Gulasch",
        foodicons: ["Sch"],
        price1: 2.45,
        price3: 3.7,
        allergens: "G,J,Alk,Sch"
      },
      {
        category: "Beilage 1",
        meal: "Kohlrabi",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: "1"
      },
      {
        category: "Beilage 1",
        meal: "Nudeln",
        foodicons: ["Vgn"],
        price1: 0.3,
        price3: 0.45,
        allergens: "AWE"
      },
      {
        category: "Beilage 2",
        meal: "Pariser Möhren",
        foodicons: ["Vgn"],
        price1: 0.5,
        price3: 0.75,
        allergens: ""
      },
      {
        category: "Beilage 2",
        meal: "Blattspinat",
        foodicons: ["Vgn"],
        price1: 0.5,
        price3: 0.75,
        allergens: ""
      },
      {
        category: "Beilage 3",
        meal: "Salzkartoffeln",
        foodicons: ["Vgn"],
        price1: 0.7,
        price3: 1.05,
        allergens: "1"
      },
      {
        category: "Beilage 3",
        meal: "Rosmarinkartoffeln",
        foodicons: ["Vgn"],
        price1: 0.7,
        price3: 1.05,
        allergens: "1"
      }
    ],
    date: formatDateForData(new Date(today.getTime() + 2 * 86400000)),
    weekday: "Wednesday"
  }
];

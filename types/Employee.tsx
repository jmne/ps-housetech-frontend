import { RefObject } from "react";

export type sortKeysEmployee = "cfFirstNames" | "cfFamilyNames" | "chair";
export type addressValue = "Leonardo-Campus 11" | "Leonardo-Campus 3";

export interface Employee {
  academicTitle: string | null;
  cfFirstNames: string | null;
  cfFamilyNames: string | null;
  cfFullName: string | null;
  roomNumber: string | null;
  emails: string[];
  phones: string[];
  chair: string | null;
  image: string | null;
  address: addressValue;
  searchResultRef?: RefObject<HTMLLIElement> | undefined;
}

export const sampleEmployees: Omit<Employee, "cfFullName">[] = [
  {
    academicTitle: "Dr.",
    cfFirstNames: "Sebastian",
    cfFamilyNames: "Herwig",
    roomNumber: "302",
    emails: ["sebastian.herwig@uni-muenster.de"],
    phones: ["+49 251 83-30347"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "71935843",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr. Dr. h.c.",
    cfFirstNames: "J\u00f6rg",
    cfFamilyNames: "Becker",
    roomNumber: "133",
    emails: ["becker@ercis.uni-muenster.de", "prorektor-spq@uni-muenster.de"],
    phones: ["+49 251 83-38100", "+49 251 83-22214"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56362440",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Phillip",
    cfFamilyNames: "Gatzke",
    roomNumber: null,
    emails: ["phillip.gatzke@ercis.uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56369220",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Katrin",
    cfFamilyNames: "Bergener",
    roomNumber: "032",
    emails: ["katrin.bergener@ercis.uni-muenster.de", "katrin.bergener@uni-muenster.de"],
    phones: ["+49 251 83-38065"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80513329",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Armin",
    cfFamilyNames: "Stein",
    roomNumber: "033",
    emails: ["armin.stein@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38085"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80512992",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sarah",
    cfFamilyNames: "Hunekamp",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56410429",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Vertr.-Prof. Dr.",
    cfFirstNames: "Friedrich",
    cfFamilyNames: "Chasin",
    roomNumber: "017",
    emails: ["friedrich.chasin@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38084"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80515330",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Sven-Olaf",
    cfFamilyNames: "Gerdt",
    roomNumber: "478",
    emails: ["sven-olaf.gerdt@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-22937"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56379770",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Bettina",
    cfFamilyNames: "Distel",
    roomNumber: "024",
    emails: ["bettina.distel@ercis.uni-muenster.de", "bettina.distel@uni-muenster.de"],
    phones: ["+49 251 83-38067", "+49 251 83-22679"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "83789967",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jonathan",
    cfFamilyNames: "Radas",
    roomNumber: null,
    emails: ["jonathan.radas@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56375117",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Florian",
    cfFamilyNames: "Schmolke",
    roomNumber: "127",
    emails: ["florian.schmolke@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38081"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80515282",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Timo",
    cfFamilyNames: "D\u00fcmke",
    roomNumber: "MCM 208",
    emails: ["t.duemke@uni-muenster.de"],
    phones: ["+49 251 83-28222"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "82736876",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lennart",
    cfFamilyNames: "Rettler",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sebastian",
    cfFamilyNames: "Reiners",
    roomNumber: "122",
    emails: ["sebastian.reiners@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38068"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "78218670",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jason",
    cfFamilyNames: "Haak",
    roomNumber: null,
    emails: ["jason.haak@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80526778",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Michael",
    cfFamilyNames: "Koddebusch",
    roomNumber: "119",
    emails: ["michael.koddebusch@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38080"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "78217595",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Constantin",
    cfFamilyNames: "von Herbay",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Simon Peter",
    cfFamilyNames: "Rothgang",
    roomNumber: null,
    emails: ["srothgan@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80526705",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Victoria",
    cfFamilyNames: "Hoch",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sven Eric",
    cfFamilyNames: "Pr\u00fc\u00df",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80723437",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Helene",
    cfFamilyNames: "M\u00fcller",
    roomNumber: null,
    emails: ["h_muel26@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Franka",
    cfFamilyNames: "Eberhardt",
    roomNumber: null,
    emails: ["feberhar@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Janis Joshua",
    cfFamilyNames: "Elmer",
    roomNumber: null,
    emails: ["j_elme03@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sam Peter Denis",
    cfFamilyNames: "Fischer",
    roomNumber: null,
    emails: ["sfische2@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84149087",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lennart",
    cfFamilyNames: "Effenberger",
    roomNumber: null,
    emails: ["leffenbe@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "David",
    cfFamilyNames: "Nowak",
    roomNumber: "120",
    emails: ["david.nowak@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38074"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84146681",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Tim",
    cfFamilyNames: "Fischb\u00f6ck",
    roomNumber: null,
    emails: ["tfischbo@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84413855",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Ana",
    cfFamilyNames: "Sakhokia",
    roomNumber: null,
    emails: ["asakhoki@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Paulina",
    cfFamilyNames: "Pesch",
    roomNumber: "328",
    emails: ["paulina.pesch@uni-muenster.de"],
    phones: ["+49 251 83-38234"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56390323",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Oliver",
    cfFamilyNames: "Tinz",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "80511331",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Eva",
    cfFamilyNames: "Heitmann",
    roomNumber: "013",
    emails: ["evahaum@uni-muenster.de"],
    phones: ["+49 251 83-38181"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56401620",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dipl.-Math.",
    cfFirstNames: "Laura",
    cfFamilyNames: "Pfaff",
    roomNumber: "029",
    emails: ["Laura.Priekule@wi.uni-muenster.de"],
    phones: ["+49 251 83-38041"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56400700",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.-Ing.",
    cfFirstNames: "Rainer",
    cfFamilyNames: "B\u00f6hme",
    roomNumber: null,
    emails: ["rainer.boehme@uni-muenster.de"],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56407993",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr. rer. nat.",
    cfFirstNames: "Raimund",
    cfFamilyNames: "Vogl",
    roomNumber: "R\u00f6ntgenstr. 9, 302",
    emails: ["rvogl@uni-muenster.de"],
    phones: ["+49 251 83-31551"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "84343663",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Helena",
    cfFamilyNames: "Schulte",
    roomNumber: "013",
    emails: ["hschu_06@uni-muenster.de"],
    phones: ["+49 251 83-38181"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56401644",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Michael",
    cfFamilyNames: "R\u00e4ckers",
    roomNumber: "118",
    emails: ["michael.raeckers@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38075"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "78215620",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Hendrik",
    cfFamilyNames: "Scholta",
    roomNumber: "023",
    emails: ["hendrik.scholta@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38072"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "83877449",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Christian",
    cfFamilyNames: "Ueding",
    roomNumber: "317",
    emails: ["christian.ueding@wi.uni-muenster.de"],
    phones: ["+49 251 83-38220"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56399636",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Niklas",
    cfFamilyNames: "Schr\u00f6der",
    roomNumber: "318 (Leonardo-Campus 3)",
    emails: [
      "niklas.schroeder@wiwi.uni-muenster.de",
      "niklas.schr\u00f6der@uni-muenster.de"
    ],
    phones: ["+49 251 83-38223"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Berna",
    cfFamilyNames: "Bakim",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "71575109",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jingxian",
    cfFamilyNames: "He",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "80509864",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Marina",
    cfFamilyNames: "B\u00f6hmer",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Frank",
    cfFamilyNames: "Hebben",
    roomNumber: "322 (Leonardo-Campus 3)",
    emails: ["frank.hebben@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-38226"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Anna Sophia",
    cfFamilyNames: "Alverdes",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "78220420",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Laura",
    cfFamilyNames: "Gro\u00dfe-Onnebrink",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Phillip",
    cfFamilyNames: "Rath",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Malte",
    cfFamilyNames: "Kramer",
    roomNumber: "Heisenbergstr. 2, Raum 208",
    emails: ["malte.kramer@uni-muenster.de"],
    phones: ["+49 251 83-30357"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "56389647",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Stefan",
    cfFamilyNames: "Klein",
    roomNumber: "028",
    emails: ["stefan.klein@uni-muenster.de"],
    phones: ["+49 251 83-38111"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "56384729",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Stefan",
    cfFamilyNames: "Schellhammer",
    roomNumber: "013",
    emails: ["stsc@wi.uni-muenster.de"],
    phones: ["+49 251 83-38124"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "83000237",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Rolf Alexander",
    cfFamilyNames: "Teubner",
    roomNumber: "008",
    emails: ["alexander.teubner@wi.uni-muenster.de"],
    phones: ["+49 251 83-38117"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "56381692",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jan",
    cfFamilyNames: "Stockhinger",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: null,
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Johannes Jakob Heinrich",
    cfFamilyNames: "von Ivernois",
    roomNumber: null,
    emails: ["j_voni02@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84073422",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Paul Jakob",
    cfFamilyNames: "Br\u00fctzke",
    roomNumber: null,
    emails: ["pbruetzk@uni-muenster.de"],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "83615301",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Said",
    cfFamilyNames: "Lachhab",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: null,
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Ingolf",
    cfFamilyNames: "Terveer",
    roomNumber: "315",
    emails: ["terveer@wi.uni-muenster.de", "terveer@uni-muenster.de"],
    phones: ["+49 251 83-38219"],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: "56408043",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jan-Florian",
    cfFamilyNames: "Kawalla",
    roomNumber: null,
    emails: ["j_kawa05@uni-muenster.de"],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lea",
    cfFamilyNames: "Hagemeier",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: "80525594",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Tim",
    cfFamilyNames: "Nagels",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Dilan",
    cfFamilyNames: "Hanenberg",
    roomNumber: null,
    emails: ["dhanenbe@uni-muenster.de"],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Malte Henrik",
    cfFamilyNames: "Patt",
    roomNumber: null,
    emails: ["mpatt@uni-muenster.de"],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Michaela",
    cfFamilyNames: "Meinert",
    roomNumber: "027",
    emails: ["meinert@wi.uni-muenster.de"],
    phones: ["+49 251 83-38110"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "80513017",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Miriam",
    cfFamilyNames: "M\u00f6llers",
    roomNumber: "019a",
    emails: ["miriam.moellers@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38302"],
    chair:
      "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
    image: "80526028",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Benedikt",
    cfFamilyNames: "Berger",
    roomNumber: "018",
    emails: ["benedikt.berger@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38301"],
    chair:
      "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
    image: "80513809",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Nils",
    cfFamilyNames: "Veenhuis",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
    image: "80515210",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Valerie Li-Li",
    cfFamilyNames: "Tan",
    roomNumber: "019",
    emails: ["valerie.tan@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38303"],
    chair:
      "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
    image: "81745820",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lena",
    cfFamilyNames: "Clever",
    roomNumber: "324",
    emails: ["lena.clever@wi.uni-muenster.de", "l_adam01@uni-muenster.de"],
    phones: ["+49 251 83-38203"],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "56376367",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Martin",
    cfFamilyNames: "Schmidt",
    roomNumber: "103, Schlossplatz 3, 48143 M\u00fcnster",
    emails: ["martin.schmidt@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-23019"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "84245991",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Sophie",
    cfFamilyNames: "Stockhinger",
    roomNumber: "011",
    emails: [
      "sophie.stockhinger@wiwi.uni-muenster.de",
      "Sophie.Wohlhage@wiwi.uni-muenster.de"
    ],
    phones: ["+49 251 83-38118", "+49 251 83-22945"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "82277542",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Pascal",
    cfFamilyNames: "B\u00fcsing",
    roomNumber: "J380A",
    emails: ["pascal.buesing@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-21993"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "80514798",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Philipp",
    cfFamilyNames: "Klein",
    roomNumber: "J463",
    emails: ["philipp.klein@wiwi.uni-muenster.de"],
    phones: ["+49251 83-29948"],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: "56366475",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Kilian",
    cfFamilyNames: "M\u00fcller",
    roomNumber: "129",
    emails: ["kilian.mueller@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38066"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "71943455",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.-Ing.",
    cfFirstNames: "Christian",
    cfFamilyNames: "Grimme",
    roomNumber: "301",
    emails: ["christian.grimme@wi.uni-muenster.de", "cgrim_01@uni-muenster.de"],
    phones: ["+49 251 83-38205"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "78214270",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Bj\u00f6rn",
    cfFamilyNames: "Schulte genannt Tillmann",
    roomNumber: "315",
    emails: ["b_schu50@uni-muenster.de"],
    phones: ["+49 251 83-25044"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "83066478",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Heike",
    cfFamilyNames: "Trautmann",
    roomNumber: "309",
    emails: ["trautmann@wi.uni-muenster.de"],
    phones: ["+49 251 83-38201"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "56381886",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Janina Susanne",
    cfFamilyNames: "Pohl",
    roomNumber: "316",
    emails: ["janina.pohl@wi.uni-muenster.de", "j_pohl19@uni-muenster.de"],
    phones: ["+49 251 83-38206"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "80513785",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Raphael Patrick",
    cfFamilyNames: "Prager",
    roomNumber: "313",
    emails: ["raphael.prager@wi.uni-muenster.de"],
    phones: ["+49 251 83-38211"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "71941067",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Simon",
    cfFamilyNames: "Markmann",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Paul",
    cfFamilyNames: "Schmidt",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "84059862",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Moritz Vinzent",
    cfFamilyNames: "Seiler",
    roomNumber: "316",
    emails: ["moritz.seiler@uni-muenster.de"],
    phones: ["+49 251 83-38210"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "71943141",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Michael Thomas",
    cfFamilyNames: "Vogt",
    roomNumber: null,
    emails: ["mvogt1@uni-muenster.de"],
    phones: [],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Christian",
    cfFamilyNames: "L\u00fclf",
    roomNumber: "224",
    emails: ["christian.luelf@uni-muenster.de"],
    phones: ["+49 251 83-38155"],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "80523991",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sven",
    cfFamilyNames: "Ligensa",
    roomNumber: "224",
    emails: ["sligensa@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "83525499",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jan",
    cfFamilyNames: "Pauls",
    roomNumber: null,
    emails: ["j_paul17@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "84139107",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Josef",
    cfFamilyNames: "Ilisch",
    roomNumber: null,
    emails: ["j_ilis02@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Dragos-Calin",
    cfFamilyNames: "Vieru",
    roomNumber: null,
    emails: ["dragos.vieru@teluq.ca", "vierud@uni-muenster.de"],
    phones: [],
    chair: "Institut f\u00fcr Wirtschaftsinformatik",
    image: "80524918",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Herbert",
    cfFamilyNames: "Kuchen",
    roomNumber: "339",
    emails: ["kuchen@wi.uni-muenster.de"],
    phones: ["+49 251 83-38251"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "56381740",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Matthias",
    cfFamilyNames: "Neugebauer",
    roomNumber: "327",
    emails: ["matthias.neugebauer@wi.uni-muenster.de"],
    phones: ["+49 251 83-38268"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "83993303",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Nina",
    cfFamilyNames: "Herrmann",
    roomNumber: "329",
    emails: ["nina.herrmann@wi.uni-muenster.de", "n_herr03@uni-muenster.de"],
    phones: ["+49 251 83-38216"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "56367368",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Hanno",
    cfFamilyNames: "Jansen",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jonathan",
    cfFamilyNames: "Neugebauer",
    roomNumber: "327",
    emails: ["jonathan.neugebauer@wi.uni-muenster.de"],
    phones: ["+49 251 83-38264"],
    chair:
      "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
    image: "83526315",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Simon",
    cfFamilyNames: "Leistikow",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Frank",
    cfFamilyNames: "Rehfeldt",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Julian",
    cfFamilyNames: "Scheipers",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Oliver Ludger",
    cfFamilyNames: "Preu\u00df",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jan",
    cfFamilyNames: "Ilisch",
    roomNumber: null,
    emails: ["j_ilis03@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Justus",
    cfFamilyNames: "Dieckmann",
    roomNumber: "334",
    emails: ["justusdieckmann@wwu.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Leon",
    cfFamilyNames: "Westhof",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Anke Maria",
    cfFamilyNames: "Makowski",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Janin",
    cfFamilyNames: "Uedemann",
    roomNumber: null,
    emails: ["j_uede01@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Leo",
    cfFamilyNames: "Zhang",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Rasim G\u00fcrkan",
    cfFamilyNames: "Almaz",
    roomNumber: null,
    emails: ["r_alma01@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Alexander Julian",
    cfFamilyNames: "Nowakowski",
    roomNumber: null,
    emails: ["a_nowa11@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Heinrich",
    cfFamilyNames: "Kortsch",
    roomNumber: null,
    emails: ["hkortsch@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Neele Lara Joy",
    cfFamilyNames: "Fraune",
    roomNumber: null,
    emails: ["nfraune@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Andre",
    cfFamilyNames: "Evers",
    roomNumber: null,
    emails: ["a_ever09@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jona Phillip",
    cfFamilyNames: "Abdinghoff",
    roomNumber: null,
    emails: ["j_abdi01@uni-muenster.de"],
    phones: [],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Matthias Sebastian",
    cfFamilyNames: "Kollenbroich",
    roomNumber: null,
    emails: ["mkollenb@uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "84028248",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "August Erik",
    cfFamilyNames: "Ernstsson",
    roomNumber: "326",
    emails: ["august.ernstsson@liu.se"],
    phones: ["+49 251 83-38252"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "83987186",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Gottfried",
    cfFamilyNames: "Vossen",
    roomNumber: "Dekanat: Raum 168",
    emails: ["vossen@uni-muenster.de", "dekan@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-22911"],
    chair: "Lehrstuhl f\u00fcr Informatik (Prof. Vossen)",
    image: "80525450",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Holger",
    cfFamilyNames: "Koelmann",
    roomNumber: "119",
    emails: [
      "Holger.Koelmann@wiwi.uni-muenster.de",
      "holger.koelmann@ercis.uni-muenster.de"
    ],
    phones: ["+49 251 83-38071", "+49 251 83-23690"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56385792",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Laura",
    cfFamilyNames: "Troost",
    roomNumber: "329",
    emails: ["laura.troost@wi.uni-muenster.de", "l_troo01@uni-muenster.de"],
    phones: ["+49 251 83-38269"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "83584792",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Hendrik",
    cfFamilyNames: "Winkelmann",
    roomNumber: "326",
    emails: ["hendrik.winkelmann@wi.uni-muenster.de"],
    phones: ["+49 251 83 38214"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "71574431",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Jens",
    cfFamilyNames: "Lechtenb\u00f6rger",
    roomNumber: "229",
    emails: ["lechten@wi.uni-muenster.de", "jens.lechtenboerger@wi.uni-muenster.de"],
    phones: ["+49 251 83-38158"],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "80513641",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Marius",
    cfFamilyNames: "K\u00fchnemund",
    roomNumber: "326",
    emails: ["marius.kuehnemund@wi.uni-muenster.de"],
    phones: ["+49 251 83-38252"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "71939563",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Maurice",
    cfFamilyNames: "Krause",
    roomNumber: "6",
    emails: ["maurice.krause@uni-muenster.de"],
    phones: ["+49 251 83-39358"],
    chair: "Lehrstuhl f\u00fcr Informatik (Prof. Vossen)",
    image: "71940265",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Simon",
    cfFamilyNames: "Hartmann",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Julia",
    cfFamilyNames: "Seither",
    roomNumber: "234",
    emails: ["julia.seither@wi.uni-muenster.de"],
    phones: ["+49 251 83-38150"],
    chair: "Professur f\u00fcr Statistik und Optimierung (Prof. Trautmann)",
    image: "56361217",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Simon",
    cfFamilyNames: "Gaul",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Informatik (Prof. Vossen)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Carolin Julia",
    cfFamilyNames: "Wortmann",
    roomNumber: "702",
    emails: ["carolin.wortmann@uni-muenster.de"],
    phones: ["+49 251 83-38411"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "84141394",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Binh An Patrick",
    cfFamilyNames: "Nguyen",
    roomNumber: "120",
    emails: ["b_nguy06@uni-muenster.de", "patrick.nguyen@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38073"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84150934",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Denis Mayr",
    cfFamilyNames: "Lima Martins",
    roomNumber: "227",
    emails: ["denis.martins@wi.uni-muenster.de"],
    phones: ["+49 251 83-38157"],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "80514652",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Fabian",
    cfFamilyNames: "Gieseke",
    roomNumber: "233",
    emails: ["fabian.gieseke@wi.uni-muenster.de"],
    phones: ["+49 251 83-38151"],
    chair: "Professur f\u00fcr Maschinelles Lernen und Data Engineering (Prof. Gieseke)",
    image: "80513593",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Monika",
    cfFamilyNames: "Rohe",
    roomNumber: "134",
    emails: ["monika.rohe@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38100"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56396123",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Ann-Kathrin",
    cfFamilyNames: "Meyer",
    roomNumber: "201",
    emails: ["ann-kathrin.meyer@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38054"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "80526319",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.",
    cfFirstNames: "Tobias",
    cfFamilyNames: "Brandt",
    roomNumber: "209",
    emails: ["tobias.brandt@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38051"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "80527981",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Jonathan",
    cfFamilyNames: "Pfaffenrot",
    roomNumber: "202",
    emails: ["jonathan.pfaffenrot@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38052"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "80524966",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Paul Frederic",
    cfFamilyNames: "Sela",
    roomNumber: null,
    emails: [],
    phones: [],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Niklas",
    cfFamilyNames: "Korte",
    roomNumber: "201",
    emails: ["niklas.korte@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38055"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "83263141",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Shariga",
    cfFamilyNames: "Sivanathan",
    roomNumber: "202",
    emails: ["shariga.sivanathan@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38053"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "80524990",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Lea",
    cfFamilyNames: "P\u00fcchel",
    roomNumber: "210",
    emails: ["lea.puechel@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38056"],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: "83285206",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Oguz",
    cfFamilyNames: "Caymazer",
    roomNumber: null,
    emails: ["o_caym01@uni-muenster.de"],
    phones: [],
    chair:
      "Professur f\u00fcr Digitale Innovation und der \u00f6ffentliche Sektor (Prof. Brandt)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Paul",
    cfFamilyNames: "Kruse",
    roomNumber: "122",
    emails: ["paul.kruse@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38070"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "78220520",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Eduardo Francisco",
    cfFamilyNames: "Israel",
    roomNumber: "010",
    emails: ["eduardo.israel@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38017"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "56382583",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sebastian",
    cfFamilyNames: "Henke",
    roomNumber: "217",
    emails: ["sebastian.henke@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38024"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "82860003",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.-Ing.",
    cfFirstNames: "Bernd",
    cfFamilyNames: "Hellingrath",
    roomNumber: "109",
    emails: [
      "bernd.hellingrath@ercis.uni-muenster.de",
      "hellingrath@ercis.uni-muenster.de"
    ],
    phones: ["+49 251 83-38001", "+49 251-83-38001"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80514122",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Ann-Kristin",
    cfFamilyNames: "Cordes",
    roomNumber: "023",
    emails: ["ann-kristin.cordes@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38088"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "71929905",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Tobias",
    cfFamilyNames: "Kreuter",
    roomNumber: "156",
    emails: ["tobias.kreuter@wiwi.uni-muenster.de", "tobias.kreuter@uni-muenster.de"],
    phones: ["+49 251 83-22968", "+49 251 83-32326"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "82720081",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Dennis",
    cfFamilyNames: "Horstkemper",
    roomNumber: "214",
    emails: ["dennis.horstkemper@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38021"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80513977",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Luis Filipe",
    cfFamilyNames: "de Araujo Pessoa",
    roomNumber: null,
    emails: ["filipe.pessoa@ercis.uni-muenster.de"],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "56405506",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Jan",
    cfFamilyNames: "Wessel",
    roomNumber: "19",
    emails: ["jan.wessel@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-22997"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80526004",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Benedikt",
    cfFamilyNames: "Hoffmeister",
    roomNumber: "122",
    emails: ["benedikt.hoffmeister@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38076"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "84439857",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Carmen",
    cfFamilyNames: "Sicking",
    roomNumber: "110",
    emails: ["carmen.sicking@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38000"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "84004642",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Johannes",
    cfFamilyNames: "Ponge",
    roomNumber: "214",
    emails: ["johannes.ponge@ercis.uni-muenster.de", "jponge@uni-muenster.de"],
    phones: ["+49 251 83-38013"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "56360034",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Dr.",
    cfFirstNames: "Adam",
    cfFamilyNames: "Widera",
    roomNumber: "101",
    emails: ["adam.widera@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38011"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "71939918",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Michael",
    cfFamilyNames: "Middelhoff",
    roomNumber: "214",
    emails: ["michael.middelhoff@ercis.uni-muenster.de", "mmidd_01@uni-muenster.de"],
    phones: ["+49 251 83-38020"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
    image: "78218770",
    address: "Leonardo-Campus 11"
  },
  {
    academicTitle: null,
    cfFirstNames: "Christian",
    cfFamilyNames: "Kalla",
    roomNumber: "008",
    emails: ["christian.kalla@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38002"],
    chair:
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
    image: "56356245",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Niclas",
    cfFamilyNames: "Rotering",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "71943335",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Till",
    cfFamilyNames: "Sahlm\u00fcller",
    roomNumber: "217",
    emails: ["till.sahlmueller@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38022"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "56354305",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Kevin",
    cfFamilyNames: "Wesendrup",
    roomNumber: "117",
    emails: ["kevin.wesendrup@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38014"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80512872",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Frauke",
    cfFamilyNames: "Hellweg",
    roomNumber: "113",
    emails: ["frauke.hellweg@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38018"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "71943527",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lucas",
    cfFamilyNames: "Stampe",
    roomNumber: "301",
    emails: ["lucas.stampe@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38204"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80512944",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Edona",
    cfFamilyNames: "Selimaj",
    roomNumber: null,
    emails: ["edona.selimaj@wiwi.uni-muenster.de"],
    phones: ["+49 251 83-22057"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "82866718",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Michael",
    cfFamilyNames: "Sch\u00fcngel",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "71575085",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Zoi",
    cfFamilyNames: "Nikolarakis",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "78218370",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lukas",
    cfFamilyNames: "Schramm",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "80510826",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Janik",
    cfFamilyNames: "Suer",
    roomNumber: "113",
    emails: ["Janik.Suer@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38006"],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "83282402",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Mich\u00e8le Priyanud",
    cfFamilyNames: "Buranasujja",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "83212012",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sophie Charlotte",
    cfFamilyNames: "Dingenotto",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "83212049",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Esther",
    cfFamilyNames: "Br\u00fcning",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: null,
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Maya",
    cfFamilyNames: "Semsch",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "83211970",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Sarah Louise",
    cfFamilyNames: "Mayers",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "83871972",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Enno Jos Georg",
    cfFamilyNames: "Knollmeyer",
    roomNumber: null,
    emails: [],
    phones: [],
    chair: "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
    image: "84083421",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Anja",
    cfFamilyNames: "Ebbigmann",
    roomNumber: "340",
    emails: ["anja.ebbigmann@wi.uni-muenster.de"],
    phones: ["+49 251 83-38250"],
    chair: "Lehrstuhl f\u00fcr Praktische Informatik in der Wirtschaft (Prof. Kuchen)",
    image: "56385115",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr.-Ing.",
    cfFirstNames: "Thomas",
    cfFamilyNames: "Hupperich",
    roomNumber: "328",
    emails: ["hupperich@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38230"],
    chair: "Juniorprofessur f\u00fcr IT-Sicherheit (Prof. Hupperich)",
    image: "82754850",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Henry Simon",
    cfFamilyNames: "Hosseini",
    roomNumber: "325",
    emails: ["henry.hosseini@ercis.uni-muenster.de"],
    phones: ["+49 251 83-38231"],
    chair: "Juniorprofessur f\u00fcr IT-Sicherheit (Prof. Hupperich)",
    image: "56357518",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    cfFirstNames: "Lukas",
    cfFamilyNames: "Schmidt",
    roomNumber: "334",
    emails: ["lukas.schmidt@wi.uni-muenster.de"],
    phones: [],
    chair: "Juniorprofessur f\u00fcr IT-Sicherheit (Prof. Hupperich)",
    image: "82864950",
    address: "Leonardo-Campus 3"
  }
];

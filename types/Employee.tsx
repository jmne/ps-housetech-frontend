import { CampusBuilding } from "./Campus"

export type sortKeysEmployee = "cfFirstNames" | "cfFamilyNames" | "chair"

export interface Employee {
    "academicTitle": string | null,
    "cfFirstNames": string | null,
    "cfFamilyNames": string | null,
    "roomNumber": string | null,
    "email": string | null,
    "phone": string | null,
    "chair": string | null,
    "image": string | null,
}


// export const sampleEmployees = [
//     {
//         name: "Jens Lechtenboerger",
//         department: "Machine Learning",
//         room: "022",
//         building: "leo3",
//         phone: "01578290345"
//     },
//     {
//         name: "Armin Stein",
//         department: "Informationsmanagement",
//         room: "122",
//         building: "leo3",
//         phone: "01578290346"
//     },
//     {
//         name: "Michael Räckers",
//         department: "Informationsmanagement",
//         room: "222",
//         building: "leo3",
//         phone: "01578290347"
//     },
//     {
//         name: "Benedikt Berger",
//         department: "Informationsmanagement",
//         room: "017",
//         building: "leo11",
//         phone: "01578290347"
//     }
// ]

const data: Employee[] = [
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Torsten",
        "cfFamilyNames": "Gollhardt",
        "roomNumber": "034",
        "email": "torsten.gollhardt@ercis.uni-muenster.de",
        "phone": "+49 251 83-38086",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56364283"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Philipp",
        "cfFamilyNames": "Overfeld",
        "roomNumber": null,
        "email": "philipp.overfeld@ercis.uni-muenster.de",
        "phone": "+49 251 83-38079",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56399880"
    },
    {
        "academicTitle": "Prof. Dr. Dr.",
        "cfFirstNames": "Bj\u00f6rn",
        "cfFamilyNames": "Niehaves",
        "roomNumber": null,
        "email": "bjoern.niehaves@uni-siegen.de",
        "phone": "+49 251 83-38087",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56407678"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Pascal",
        "cfFamilyNames": "Kerschke",
        "roomNumber": "301",
        "email": "kerschke@uni-muenster.de",
        "phone": "+49 251 83-38240",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56376535"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Kay",
        "cfFamilyNames": "Hildebrand",
        "roomNumber": "301",
        "email": "hildebrand@ercis.de",
        "phone": "+49 251 83-38204",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56402416"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Benjamin",
        "cfFamilyNames": "Kl\u00f6r",
        "roomNumber": "210",
        "email": "benjamin.kloer@ercis.uni-muenster.de",
        "phone": "+49 251 83-38086",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56381837"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Kevin",
        "cfFamilyNames": "Ortbach",
        "roomNumber": null,
        "email": "kevin.ortbach@ercis.uni-muenster.de",
        "phone": "+49 251 83-38060",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56405991"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Sebastian",
        "cfFamilyNames": "K\u00f6ffer",
        "roomNumber": "022",
        "email": "sebastian.koeffer@ercis.uni-muenster.de",
        "phone": "+49 251 83-38057",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56414968"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Miriam",
        "cfFamilyNames": "Epke",
        "roomNumber": "029",
        "email": "miriam.epke@ercis.uni-muenster.de",
        "phone": "+49 251 83-38090",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56380394"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Holger",
        "cfFamilyNames": "Koelmann",
        "roomNumber": null,
        "email": "Holger.Koelmann@wiwi.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56385792"
    },
    {
        "academicTitle": "Jun.-Prof. Dr.",
        "cfFirstNames": "Dennis",
        "cfFamilyNames": "Riehle",
        "roomNumber": null,
        "email": "riehle@uni-koblenz.de",
        "phone": "+49 261 287-2560",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "78214895"
    },
    {
        "academicTitle": "Dr. Dr.",
        "cfFirstNames": "Victor",
        "cfFamilyNames": "Taratukhin",
        "roomNumber": null,
        "email": "victor.taratukhin@sap.com",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56412094"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Sebastian",
        "cfFamilyNames": "Herwig",
        "roomNumber": null,
        "email": "sebastian.herwig@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "71935843"
    },
    {
        "academicTitle": "Prof. Dr. Dr. h.c.",
        "cfFirstNames": "J\u00f6rg",
        "cfFamilyNames": "Becker",
        "roomNumber": null,
        "email": "becker@ercis.uni-muenster.de",
        "phone": "+49 251 83-38100",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56362440"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Marco",
        "cfFamilyNames": "Niemann",
        "roomNumber": "029",
        "email": "marco.niemann@ercis.uni-muenster.de",
        "phone": "+49 251 83-38069",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "80525183"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Paul",
        "cfFamilyNames": "Kruse",
        "roomNumber": "122",
        "email": "paul.kruse@ercis.uni-muenster.de",
        "phone": "+49 251 83-38070",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "78220520"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Ute",
        "cfFamilyNames": "Paukstadt",
        "roomNumber": null,
        "email": "ute.paukstadt@nexaion.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "80525353"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Phillip",
        "cfFamilyNames": "Gatzke",
        "roomNumber": null,
        "email": "phillip.gatzke@ercis.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56369220"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Vera",
        "cfFamilyNames": "Steinhoff",
        "roomNumber": null,
        "email": "v.steinhoff@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "71576507"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Stefan",
        "cfFamilyNames": "Laube",
        "roomNumber": "325",
        "email": "mail@stefan-laube.de",
        "phone": "+49 251 83-38231",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56361079"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Katrin",
        "cfFamilyNames": "Bergener",
        "roomNumber": "032",
        "email": "katrin.bergener@ercis.uni-muenster.de",
        "phone": "+49 251 83-38065",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "80513329"
    },
    {
        "academicTitle": "Dipl.-Ing.",
        "cfFirstNames": "Alexander",
        "cfFamilyNames": "Stieger",
        "roomNumber": null,
        "email": "stiegera@uni-muenster.de",
        "phone": "+49 1794886386",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56389575"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Annika",
        "cfFamilyNames": "Albers",
        "roomNumber": null,
        "email": "annika.albers@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56377597"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Markus",
        "cfFamilyNames": "Monhof",
        "roomNumber": "024",
        "email": "markus.monhof@ercis.uni-muenster.de",
        "phone": "+49 251 83-38081",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56400024"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Sebastian Alexander",
        "cfFamilyNames": "Br\u00e4uer",
        "roomNumber": "023",
        "email": "sebastian.braeuer@ercis.uni-muenster.de",
        "phone": "+49 251 83-38069",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56380850"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Sara",
        "cfFamilyNames": "Hofmann",
        "roomNumber": null,
        "email": "sara.hofmann@uni-bremen.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56385936"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Moritz",
        "cfFamilyNames": "von Hoffen",
        "roomNumber": "009",
        "email": "moritz.von.hoffen@ercis.uni-muenster.de",
        "phone": "+49 251 83 38076",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56385188"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Daniel",
        "cfFamilyNames": "Beverungen",
        "roomNumber": null,
        "email": "daniel.beverungen@ercis.uni-muenster.de",
        "phone": "+49 251 83-38092",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56399082"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Jan",
        "cfFamilyNames": "Dagef\u00f6rde",
        "roomNumber": "327",
        "email": "jan.dagefoerde@uni-muenster.de",
        "phone": "+49 251 83-38264",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "78214220"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Andreas",
        "cfFamilyNames": "Hermann",
        "roomNumber": "120",
        "email": "andreas.hermann@ercis.uni-muenster.de",
        "phone": "+49 251 83-38062",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56365705"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Carsten Patrick",
        "cfFamilyNames": "Delfmann",
        "roomNumber": null,
        "email": "delfmann@uni-koblenz.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56373695"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Lasse",
        "cfFamilyNames": "von Lojewski",
        "roomNumber": "122",
        "email": "lasse.von.lojewski@ercis.uni-muenster.de",
        "phone": "+49 251 83-38082",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56381911"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Elena",
        "cfFamilyNames": "Hindriks",
        "roomNumber": null,
        "email": "elena.spornikova@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56386128"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Andreas",
        "cfFamilyNames": "Baumgart",
        "roomNumber": "314",
        "email": "baumgart@wi.uni-muenster.de",
        "phone": "+49 251 83-38213",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56406543"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Susanne",
        "cfFamilyNames": "Mikowsky",
        "roomNumber": null,
        "email": "susanne.mikowsky@ercis.uni-muenster.de",
        "phone": "+49 251 83-38076",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56410256"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Martin",
        "cfFamilyNames": "Matzner",
        "roomNumber": "017",
        "email": "martin.matzner@ercis.uni-muenster.de",
        "phone": "+49 251 83-38088",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56379526"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Armin",
        "cfFamilyNames": "Stein",
        "roomNumber": "033",
        "email": "armin.stein@ercis.uni-muenster.de",
        "phone": "+49 251 83-38085",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "80512992"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Ann-Kristin",
        "cfFamilyNames": "Cordes",
        "roomNumber": "023",
        "email": "ann-kristin.cordes@ercis.uni-muenster.de",
        "phone": "+49 251 83-38088",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "71929905"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Nico",
        "cfFamilyNames": "Clever",
        "roomNumber": null,
        "email": "clever@fh-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56380826"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Burkhard",
        "cfFamilyNames": "Wei\u00df",
        "roomNumber": null,
        "email": "burkhard.weiss@ercis.uni-muenster.de",
        "phone": "+49 251 83-38089",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56423155"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Ayten",
        "cfFamilyNames": "\u00d6ks\u00fcz",
        "roomNumber": "105",
        "email": "ayten.oeksuez@uni-muenster.de",
        "phone": "+49 251 83-23683",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56412046"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Matthias",
        "cfFamilyNames": "Voigt",
        "roomNumber": null,
        "email": "matthias.voigt@ercis.uni-muenster.de",
        "phone": "+49 251 83-38072",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56423180"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Ralf",
        "cfFamilyNames": "Plattfaut",
        "roomNumber": null,
        "email": "ralf.plattfaut@ercis.uni-muenster.de",
        "phone": "+49 251 83-38081",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56423304"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Reima",
        "cfFamilyNames": "Suomi",
        "roomNumber": "12",
        "email": "suomi@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56406471"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Stefan",
        "cfFamilyNames": "Korff",
        "roomNumber": "324",
        "email": "stefan.korff@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56405386"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Tobias",
        "cfFamilyNames": "Heide",
        "roomNumber": null,
        "email": "tobias.heide@ercis.uni-muenster.de",
        "phone": "+49 251 83-38059",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56404276"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Susanne",
        "cfFamilyNames": "Freitag",
        "roomNumber": "V201",
        "email": "susanne.freitag@uni-muenster.de",
        "phone": "+49 251 83-24238",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "71944157"
    },
    {
        "academicTitle": "Diplom-Wirtschaftsinformatikerin",
        "cfFirstNames": "Irina",
        "cfFamilyNames": "Thome",
        "roomNumber": null,
        "email": "irina.thome@ercis.uni-muenster.de",
        "phone": "+49 251 83-38071",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)",
        "image": "56423205"
    },
    {
        "academicTitle": "Jun.-Prof. Dr.",
        "cfFirstNames": "Dennis",
        "cfFamilyNames": "Riehle",
        "roomNumber": null,
        "email": "riehle@uni-koblenz.de",
        "phone": "+49 261 287-2560",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "78214895"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Dragos-Calin",
        "cfFamilyNames": "Vieru",
        "roomNumber": null,
        "email": "dragos.vieru@teluq.ca",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "80524918"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Paulina",
        "cfFamilyNames": "Pesch",
        "roomNumber": "328",
        "email": "paulina.pesch@uni-muenster.de",
        "phone": "+49 251 83-38234",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56390323"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Lena",
        "cfFamilyNames": "Clever",
        "roomNumber": "324",
        "email": "lena.clever@wi.uni-muenster.de",
        "phone": "+49 251 83-38203",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56376367"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Carsten Patrick",
        "cfFamilyNames": "Delfmann",
        "roomNumber": null,
        "email": "delfmann@uni-koblenz.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56373695"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Eva",
        "cfFamilyNames": "Heitmann",
        "roomNumber": null,
        "email": "evahaum@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56401620"
    },
    {
        "academicTitle": "Dipl.-Math.",
        "cfFirstNames": "Laura",
        "cfFamilyNames": "Pfaff",
        "roomNumber": "029",
        "email": "Laura.Priekule@wi.uni-muenster.de",
        "phone": "+49 251 83-38041",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56400700"
    },
    {
        "academicTitle": "Prof. Dr.-Ing.",
        "cfFirstNames": "Rainer",
        "cfFamilyNames": "B\u00f6hme",
        "roomNumber": null,
        "email": "rainer.boehme@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56407993"
    },
    {
        "academicTitle": "Dr. rer. nat.",
        "cfFirstNames": "Raimund",
        "cfFamilyNames": "Vogl",
        "roomNumber": "R\u00f6ntgenstr. 9, 302",
        "email": "rvogl@uni-muenster.de",
        "phone": "+49 251 83-31551",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "84343663"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Helena",
        "cfFamilyNames": "Schulte",
        "roomNumber": null,
        "email": "hschu_06@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56401644"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Simeon",
        "cfFamilyNames": "Vidolov",
        "roomNumber": "022",
        "email": "vidolovs@uni-muenster.de",
        "phone": "+49 251 83 38114",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56380972"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Elena",
        "cfFamilyNames": "Gorbatschow",
        "roomNumber": null,
        "email": "el.gorbacheva@gmail.com",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56410900"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Stefan",
        "cfFamilyNames": "Schellhammer",
        "roomNumber": "013",
        "email": "stsc@wi.uni-muenster.de",
        "phone": "+49 251 83-38124",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "83000237"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Michael",
        "cfFamilyNames": "R\u00e4ckers",
        "roomNumber": "118",
        "email": "michael.raeckers@ercis.uni-muenster.de",
        "phone": "+49 251 83-38075",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "78215620"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Herbert",
        "cfFamilyNames": "K\u00f6sters",
        "roomNumber": null,
        "email": "herbert.koesters@wi.uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56363248"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Tim Alexander",
        "cfFamilyNames": "Majchrzak",
        "roomNumber": null,
        "email": "tima@ercis.de",
        "phone": "+49 251 83-38264",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56413977"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Hendrik",
        "cfFamilyNames": "Scholta",
        "roomNumber": "023",
        "email": "hendrik.scholta@ercis.uni-muenster.de",
        "phone": "+49 251 83-38072",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "83877449"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Christian",
        "cfFamilyNames": "Ueding",
        "roomNumber": "317",
        "email": "christian.ueding@wi.uni-muenster.de",
        "phone": "+49 251 83-38220",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56399636"
    },
    {
        "academicTitle": "Dr",
        "cfFirstNames": "Tanja",
        "cfFamilyNames": "Merfeld",
        "roomNumber": "324",
        "email": "tanja.merfeld@wi.uni-muenster.de",
        "phone": "+49 251 83-38042",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56396435"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Jakob",
        "cfFamilyNames": "Bossek",
        "roomNumber": null,
        "email": "bossek@wi.uni-muenster.de",
        "phone": "+49 251 83-38200",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "56391477"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Ulrich",
        "cfFamilyNames": "Luckhaus",
        "roomNumber": null,
        "email": "luckhaus@greyhills.com",
        "phone": "+492217888600",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "71935722"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Marcel",
        "cfFamilyNames": "Gayk",
        "roomNumber": null,
        "email": "marcel.gayk@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "78211920"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Kim Marcella",
        "cfFamilyNames": "Allend\u00f6rfer",
        "roomNumber": null,
        "email": "k.allendoerfer@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik",
        "image": "71574868"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Philipp",
        "cfFamilyNames": "Overfeld",
        "roomNumber": null,
        "email": "philipp.overfeld@ercis.uni-muenster.de",
        "phone": "+49 251 83-38079",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56399880"
    },
    {
        "academicTitle": "Dipl.-Wirt. Inf.",
        "cfFirstNames": "Christian",
        "cfFamilyNames": "Remfert",
        "roomNumber": "008",
        "email": "christian.remfert@wi.uni-muenster.de",
        "phone": "+49 251 83-38123",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56380802"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Nathalie",
        "cfFamilyNames": "Mitev",
        "roomNumber": null,
        "email": "nmitev@btinternet.com",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56374586"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Holger",
        "cfFamilyNames": "Koelmann",
        "roomNumber": null,
        "email": "Holger.Koelmann@wiwi.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56385792"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Dragos-Calin",
        "cfFamilyNames": "Vieru",
        "roomNumber": null,
        "email": "dragos.vieru@teluq.ca",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "80524918"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Meral",
        "cfFamilyNames": "Avci",
        "roomNumber": "018",
        "email": "avci@wi.rwth-aachen.de",
        "phone": "+49 251 83-38230",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56373502"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Simon",
        "cfFamilyNames": "Lansmann",
        "roomNumber": "024",
        "email": "simon.lansmann@wi.uni-muenster.de",
        "phone": "+49 251 83-38113",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56381862"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Malte",
        "cfFamilyNames": "Kramer",
        "roomNumber": "Heisenbergstr. 2, Raum 208",
        "email": "malte.kramer@uni-muenster.de",
        "phone": "+49 251 83-30357",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56389647"
    },
    {
        "academicTitle": "Dipl.-Ing., Dipl.-Kfm.",
        "cfFirstNames": "Siegfried",
        "cfFamilyNames": "Schallenm\u00fcller",
        "roomNumber": null,
        "email": "siegfried.schallenmueller@ercis.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56386008"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Michaela",
        "cfFamilyNames": "Meinert",
        "roomNumber": "027",
        "email": "meinert@wi.uni-muenster.de",
        "phone": "+49 251 83-38110",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "80513017"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Sophie",
        "cfFamilyNames": "Stockhinger",
        "roomNumber": "011",
        "email": "sophie.stockhinger@wiwi.uni-muenster.de",
        "phone": "+49 251 83-38118",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "82277542"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Cornelia",
        "cfFamilyNames": "Gaebert",
        "roomNumber": null,
        "email": "cornelia.gaebert@uni-muenster.de",
        "phone": "+49 251 41446120",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56398408"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Stefan",
        "cfFamilyNames": "Klein",
        "roomNumber": "028",
        "email": "stefan.klein@uni-muenster.de",
        "phone": "+49 251 83-38111",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56384729"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Simeon",
        "cfFamilyNames": "Vidolov",
        "roomNumber": "022",
        "email": "vidolovs@uni-muenster.de",
        "phone": "+49 251 83 38114",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56380972"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Stefan",
        "cfFamilyNames": "Schellhammer",
        "roomNumber": "013",
        "email": "stsc@wi.uni-muenster.de",
        "phone": "+49 251 83-38124",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "83000237"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Benedikt",
        "cfFamilyNames": "Hoffmeister",
        "roomNumber": "122",
        "email": "benedikt.hoffmeister@ercis.uni-muenster.de",
        "phone": "+49 251 83-38076",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "84439857"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Ajay",
        "cfFamilyNames": "Kumar",
        "roomNumber": "214",
        "email": "ajay.kumar@ercis.uni-muenster.de",
        "phone": "+49 251 83-38026",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "78219470"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Rolf Alexander",
        "cfFamilyNames": "Teubner",
        "roomNumber": "008",
        "email": "alexander.teubner@wi.uni-muenster.de",
        "phone": "+49 251 83-38117",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56381692"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Jan",
        "cfFamilyNames": "Stockhinger",
        "roomNumber": "011",
        "email": "jan.stockhinger@wiwi.uni-muenster.de",
        "phone": "+49 251 83-38115",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56381813"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Jana",
        "cfFamilyNames": "Mattern",
        "roomNumber": "162",
        "email": "jana.mattern@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22913",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56378394"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Michael",
        "cfFamilyNames": "Middelhoff",
        "roomNumber": "214",
        "email": "michael.middelhoff@ercis.uni-muenster.de",
        "phone": "+49 251 83-38020",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "78218770"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Julia",
        "cfFamilyNames": "Jacobs",
        "roomNumber": "024",
        "email": "julia.jacobs@uni-muenster.de",
        "phone": "+49 251 83-38116",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56380899"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Christian",
        "cfFamilyNames": "Kalla",
        "roomNumber": "008",
        "email": "christian.kalla@ercis.uni-muenster.de",
        "phone": "+49 251 83-38002",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56356245"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Patrick",
        "cfFamilyNames": "Troglauer",
        "roomNumber": "026",
        "email": "patrick.troglauer@wi.uni-muenster.de",
        "phone": "+49 251 83-38120",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "71574262"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Rewat",
        "cfFamilyNames": "Thapa",
        "roomNumber": "021",
        "email": "rewat.thapa@wi.uni-muenster.de",
        "phone": "+49 251 83-38121",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "56354028"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Katharina",
        "cfFamilyNames": "Dassel",
        "roomNumber": "022",
        "email": "katharina.dassel@wi.uni-muenster.de",
        "phone": "+49 251 83-38116",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "80526608"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Matthias",
        "cfFamilyNames": "Werner",
        "roomNumber": "025",
        "email": "matthias.werner@wi.uni-muenster.de",
        "phone": "+49 251 83-38114",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "71574407"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Johannes Jakob Heinrich",
        "cfFamilyNames": "von Ivernois",
        "roomNumber": null,
        "email": "j_voni02@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "84073422"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Paul Jakob",
        "cfFamilyNames": "Br\u00fctzke",
        "roomNumber": null,
        "email": "pbruetzk@uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Interorganisationssysteme (Prof. Klein)",
        "image": "83615301"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Paul",
        "cfFamilyNames": "Kruse",
        "roomNumber": "122",
        "email": "paul.kruse@ercis.uni-muenster.de",
        "phone": "+49 251 83-38070",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "78220520"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Eduardo Francisco",
        "cfFamilyNames": "Israel",
        "roomNumber": "010",
        "email": "eduardo.israel@ercis.uni-muenster.de",
        "phone": "+49 251 83-38017",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56382583"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Sebastian",
        "cfFamilyNames": "Henke",
        "roomNumber": "217",
        "email": "sebastian.henke@ercis.uni-muenster.de",
        "phone": "+49 251 83-38024",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "82860003"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Luiz Felipe",
        "cfFamilyNames": "Scavarda do Carmo",
        "roomNumber": null,
        "email": "lf.scavarda@puc-rio.br",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56389623"
    },
    {
        "academicTitle": "Prof. Dr.-Ing.",
        "cfFirstNames": "Bernd",
        "cfFamilyNames": "Hellingrath",
        "roomNumber": "109",
        "email": "bernd.hellingrath@ercis.uni-muenster.de",
        "phone": "+49 251 83-38001",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80514122"
    },
    {
        "academicTitle": "Dipl.-Logist.",
        "cfFirstNames": "Daniel",
        "cfFamilyNames": "Link",
        "roomNumber": null,
        "email": "daniel.link@ercis.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56408781"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Ann-Kristin",
        "cfFamilyNames": "Cordes",
        "roomNumber": "023",
        "email": "ann-kristin.cordes@ercis.uni-muenster.de",
        "phone": "+49 251 83-38088",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "71929905"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Sandra",
        "cfFamilyNames": "Lechtenberg",
        "roomNumber": null,
        "email": "sandra.lechtenberg@ercis.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80512896"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Tobias",
        "cfFamilyNames": "Kreuter",
        "roomNumber": "156",
        "email": "tobias.kreuter@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22968",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "82720081"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Dennis",
        "cfFamilyNames": "Horstkemper",
        "roomNumber": "214",
        "email": "dennis.horstkemper@ercis.uni-muenster.de",
        "phone": "+49 251 83-38021",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80513977"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Fernando",
        "cfFamilyNames": "Buarque",
        "roomNumber": null,
        "email": "fbln@ecomp.poli.br",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56399758"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Luis Filipe",
        "cfFamilyNames": "de Araujo Pessoa",
        "roomNumber": null,
        "email": "filipe.pessoa@ercis.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56405506"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Jan",
        "cfFamilyNames": "Wessel",
        "roomNumber": "19",
        "email": "jan.wessel@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22997",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80526004"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Patrick",
        "cfFamilyNames": "Hartmann",
        "roomNumber": null,
        "email": "max.hartmann@prof-becker.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56370591"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Benedikt",
        "cfFamilyNames": "Hoffmeister",
        "roomNumber": "122",
        "email": "benedikt.hoffmeister@ercis.uni-muenster.de",
        "phone": "+49 251 83-38076",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "84439857"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Ajay",
        "cfFamilyNames": "Kumar",
        "roomNumber": "214",
        "email": "ajay.kumar@ercis.uni-muenster.de",
        "phone": "+49 251 83-38026",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "78219470"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Carmen",
        "cfFamilyNames": "Sicking",
        "roomNumber": "110",
        "email": "carmen.sicking@ercis.uni-muenster.de",
        "phone": "+49 251 83-38000",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "84004642"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Johannes",
        "cfFamilyNames": "Ponge",
        "roomNumber": "214",
        "email": "johannes.ponge@ercis.uni-muenster.de",
        "phone": "+49 251 83-38013",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56360034"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Adam",
        "cfFamilyNames": "Widera",
        "roomNumber": "101",
        "email": "adam.widera@ercis.uni-muenster.de",
        "phone": "+49 251 83-38011",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "71939918"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Michael",
        "cfFamilyNames": "Middelhoff",
        "roomNumber": "214",
        "email": "michael.middelhoff@ercis.uni-muenster.de",
        "phone": "+49 251 83-38020",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "78218770"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Christian",
        "cfFamilyNames": "Kalla",
        "roomNumber": "008",
        "email": "christian.kalla@ercis.uni-muenster.de",
        "phone": "+49 251 83-38002",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56356245"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Fr\u00e9d\u00e9ric Niko Patrice",
        "cfFamilyNames": "Nicolas",
        "roomNumber": "009",
        "email": "frederic.nicolas@ercis.uni-muenster.de",
        "phone": "+49 251 83-38004",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "71932359"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Till",
        "cfFamilyNames": "Sahlm\u00fcller",
        "roomNumber": "217",
        "email": "till.sahlmueller@ercis.uni-muenster.de",
        "phone": "+49 251 83-38022",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "56354305"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Kevin",
        "cfFamilyNames": "Wesendrup",
        "roomNumber": "117",
        "email": "kevin.wesendrup@ercis.uni-muenster.de",
        "phone": "+49 251 83-38014",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80512872"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Frauke",
        "cfFamilyNames": "Hellweg",
        "roomNumber": "113",
        "email": "frauke.hellweg@ercis.uni-muenster.de",
        "phone": "+49 251 83-38018",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "71943527"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Lucas",
        "cfFamilyNames": "Stampe",
        "roomNumber": null,
        "email": "lucas.stampe@ercis.uni-muenster.de",
        "phone": null,
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "80512944"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Edona",
        "cfFamilyNames": "Selimaj",
        "roomNumber": null,
        "email": "edona.selimaj@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22057",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "82866718"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Janik",
        "cfFamilyNames": "Suer",
        "roomNumber": "113",
        "email": "Janik.Suer@ercis.uni-muenster.de",
        "phone": "+49 251 83-38006",
        "chair": "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Logistik (Prof. Hellingrath)",
        "image": "83282402"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Kay",
        "cfFamilyNames": "Hildebrand",
        "roomNumber": "301",
        "email": "hildebrand@ercis.de",
        "phone": "+49 251 83-38204",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56402416"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Vera",
        "cfFamilyNames": "Steinhoff",
        "roomNumber": null,
        "email": "v.steinhoff@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "71576507"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Willi",
        "cfFamilyNames": "Mutschler",
        "roomNumber": "305",
        "email": "willi.mutschler@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22954",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56370760"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Johannes",
        "cfFamilyNames": "Klein",
        "roomNumber": null,
        "email": "johannes.klein@uni-muenster.de",
        "phone": null,
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56383092"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Ingolf",
        "cfFamilyNames": "Terveer",
        "roomNumber": "315",
        "email": "terveer@wi.uni-muenster.de",
        "phone": "+49 251 83-38219",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56408043"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Jan",
        "cfFamilyNames": "Diebecker",
        "roomNumber": "J 476 B",
        "email": "jan.diebecker@wiwi.uni-muenster.de",
        "phone": "+49 251 83-22059",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56400990"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Nils",
        "cfFamilyNames": "Tschampel",
        "roomNumber": "013",
        "email": "nils.tschampel@uni-muenster.de",
        "phone": "+49 251 83-38130",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56403336"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Philipp",
        "cfFamilyNames": "Klein",
        "roomNumber": "J463",
        "email": "philipp.klein@wiwi.uni-muenster.de",
        "phone": "+49251 83-29948",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56366475"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Kilian",
        "cfFamilyNames": "M\u00fcller",
        "roomNumber": "129",
        "email": "kilian.mueller@ercis.uni-muenster.de",
        "phone": "+49 251 83-38066",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "71943455"
    },
    {
        "academicTitle": "Prof. Dr.-Ing.",
        "cfFirstNames": "Christian",
        "cfFamilyNames": "Grimme",
        "roomNumber": "301",
        "email": "christian.grimme@wi.uni-muenster.de",
        "phone": "+49 251 83-38205",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "78214270"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Jonathan",
        "cfFamilyNames": "Neugebauer",
        "roomNumber": "327",
        "email": "jonathan.neugebauer@wi.uni-muenster.de",
        "phone": "+49 251 83-38264",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "83526315"
    },
    {
        "academicTitle": "Dr.",
        "cfFirstNames": "Nina",
        "cfFamilyNames": "B\u00fcchel",
        "roomNumber": "301",
        "email": "buechel@wi.uni-muenster.de",
        "phone": "+49 251 83-38207",
        "chair": "Institut f\u00fcr Wirtschaftsinformatik - Mathematik f\u00fcr Wirtschaftswissenschaftler",
        "image": "56405434"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Michaela",
        "cfFamilyNames": "Meinert",
        "roomNumber": "027",
        "email": "meinert@wi.uni-muenster.de",
        "phone": "+49 251 83-38110",
        "chair": "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
        "image": "80513017"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Miriam",
        "cfFamilyNames": "M\u00f6llers",
        "roomNumber": "019a",
        "email": "miriam.moellers@ercis.uni-muenster.de",
        "phone": "+49 251 83-38302",
        "chair": "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
        "image": "80526028"
    },
    {
        "academicTitle": "Prof. Dr.",
        "cfFirstNames": "Benedikt",
        "cfFamilyNames": "Berger",
        "roomNumber": "018",
        "email": "benedikt.berger@ercis.uni-muenster.de",
        "phone": "+49 251 83-38301",
        "chair": "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
        "image": "80513809"
    },
    {
        "academicTitle": null,
        "cfFirstNames": "Valerie Li-Li",
        "cfFamilyNames": "Tan",
        "roomNumber": "019",
        "email": "valerie.tan@ercis.uni-muenster.de",
        "phone": "+49 251 83-38303",
        "chair": "Juniorprofessur f\u00fcr Wirtschaftsinformatik, insbesondere Digitale Transformation und Gesellschaft (Prof. Berger)",
        "image": "81745820"
    }
]

export const sampleEmployees = data.filter((person, i, data) => {
    return(i === 
        data.findIndex((e) => e.email === person.email && e.cfFamilyNames === person.cfFamilyNames))
})
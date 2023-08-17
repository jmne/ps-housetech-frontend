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
  chairs: string[];
  jobTitle: string[] | null;
  image: string | null;
  address: addressValue;
  searchResultRef?: RefObject<HTMLLIElement> | undefined;
}

export const sampleEmployees: Omit<Employee, "cfFullName">[] = [
  {
    academicTitle: "Dr.",
    jobTitle: ["TestTitel"],
    cfFirstNames: "Sebastian",
    cfFamilyNames: "Herwig",
    roomNumber: "302",
    emails: ["sebastian.herwig@uni-muenster.de"],
    phones: ["+49 251 83-30347"],
    chairs: [
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)"
    ],
    image: "71935843",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: "Prof. Dr. Dr. h.c.",
    jobTitle: ["TestTitel"],
    cfFirstNames: "J\u00f6rg",
    cfFamilyNames: "Becker",
    roomNumber: "133",
    emails: ["becker@ercis.uni-muenster.de", "prorektor-spq@uni-muenster.de"],
    phones: ["+49 251 83-38100", "+49 251 83-22214"],
    chairs: [
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)"
    ],
    image: "56362440",
    address: "Leonardo-Campus 3"
  },
  {
    academicTitle: null,
    jobTitle: ["TestTitel"],
    cfFirstNames: "Phillip",
    cfFamilyNames: "Gatzke",
    roomNumber: null,
    emails: ["phillip.gatzke@ercis.uni-muenster.de"],
    phones: [],
    chairs: [
      "Lehrstuhl f\u00fcr Wirtschaftsinformatik und Informationsmanagement (Prof. Becker)"
    ],
    image: "56369220",
    address: "Leonardo-Campus 3"
  }
];

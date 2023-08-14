import styles from "@/components/Dashboard/Busplan/BusCard/Bus.module.scss";

// Array used since 'index' is a number
export const getColumn = [styles.first, styles.second, styles.third];

// Dict to use 'direction' string as key
export const getRow = {
  inward: styles.inward,
  outward: styles.outward
};

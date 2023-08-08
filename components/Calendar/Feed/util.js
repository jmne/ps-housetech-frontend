export const parseDate = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const hour = date.substring(11, 13);
  const minute = date.substring(14, 16);

  switch (month) {
    case "01":
      return hour + ":" + minute + " | " + day + " Januar " + year;
    case "02":
      return hour + ":" + minute + " | " + day + " Februar " + year;
    case "03":
      return hour + ":" + minute + " | " + day + " März " + year;
    case "04":
      return hour + ":" + minute + " | " + day + " April " + year;
    case "05":
      return hour + ":" + minute + " | " + day + " Mai " + year;
    case "06":
      return hour + ":" + minute + " | " + day + " Juni " + year;
    case "07":
      return hour + ":" + minute + " | " + day + " Juli " + year;
    case "08":
      return hour + ":" + minute + " | " + day + " August " + year;
    case "09":
      return hour + ":" + minute + " | " + day + " September " + year;
    case "10":
      return hour + ":" + minute + " | " + day + " Oktober " + year;
    case "11":
      return hour + ":" + minute + " | " + day + " November " + year;
    case "12":
      return hour + ":" + minute + " | " + day + " Dezember " + year;
    default:
      return "Kein Veröffentlichungsdatum..";
  }
};

import { Employee } from "types/Employee";
import { useTranslation } from "next-i18next";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import { Fragment, useEffect, useRef } from "react";
import { handleClickOnPerson } from "utils/Wayfinder/personCardsTransformations";
import Image from "next/image";
import { fetchImage } from "requests/fetchImage";

interface props {
  person: Employee;
}

export const SEARCH_RESULT_COLLAPSED = styles.person;
export const SEARCH_RESULT_EXPANDED = [styles.person, styles.expanded].join(" ");
const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";
function PersonResult({ person }: props) {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();
  const phoneTranslation = t("wayfinder.search.phone");
  //const roomTranslation = t("wayfinder.search.room");

  const personRef = useRef(null);
  useEffect(() => {
    person.searchResultRef = personRef;
  }, [personRef, person]);

  return (
    <li
      className={SEARCH_RESULT_COLLAPSED}
      onClick={() => handleClickOnPerson(person, mapContext, selectedPersonContext)}
      ref={personRef}
    >
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          {person.image ? (
            <Image
              src={`${url}${person.image}`}
              alt="profile picture"
              sizes="100px"
              style={{ objectFit: "cover" }}
              fill
            />
          ) : undefined}
        </div>
        <div className={styles.shortInfo}>
          <span>{`${person.cfFirstNames} ${person.cfFamilyNames}`}</span>
          <span className={styles.caption}>{person.chair}</span>
        </div>
      </div>
      <div className={styles.hidden}>
        {person.phones.map((phoneNumer, index) => {
          return (
            <Fragment key={index}>
              <span className={styles.attribute}>{phoneTranslation}</span>
              <span className={styles.caption}>{phoneNumer}</span>
              <br />
            </Fragment>
          );
        })}
        {person.emails.map((mailAddress, index) => {
          return (
            <Fragment key={index}>
              <span className={styles.attribute}>Mail</span>
              <span className={styles.caption}>{mailAddress}</span>
              <br />
            </Fragment>
          );
        })}
        {person.roomNumber && (
          <>
            <span className={styles.attribute}>Room</span>
            <span className={styles.caption}>{person.roomNumber}</span>
            <br />
          </>
        )}
      </div>
    </li>
  );
}

PersonResult.displayName = "PersonResult";
export default PersonResult;

import { Employee } from "types/Employee";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import { Fragment, useEffect, useRef } from "react";
import { handleClickOnPerson } from "utils/Wayfinder/personCardsTransformations";
import Image from "next/image";
import IconAccount from "assets/images/icon_account.svg";
import IconPlus from "assets/images/icon_plus.svg";
import IconCall from "assets/images/icon_call.svg";
import IconMail from "assets/images/icon_mail.svg";
import IconLocation from "assets/images/icon_location.svg";

interface props {
  person: Employee;
}

export const SEARCH_RESULT_COLLAPSED = styles.person;
export const SEARCH_RESULT_EXPANDED = [styles.person, styles.expanded].join(" ");
const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";
function PersonResult({ person }: props) {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  const personRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    person.searchResultRef = personRef;
  }, [person, personRef]);

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
              sizes="250px"
              style={{ objectFit: "cover" }}
              fill
            />
          ) : (
            <IconAccount />
          )}
        </div>
        <div className={styles.shortInfo}>
          <span>{`${person.cfFirstNames} ${person.cfFamilyNames}`}</span>
          <span className={styles.caption}>{person.chair}</span>
        </div>
      </div>
      {person.phones.length > 0 || person.emails.length > 0 || person.roomNumber ? (
        <div className={styles.hidden}>
          {person.phones.map((phoneNumer, index) => {
            return (
              <Fragment key={index}>
                <IconCall className={styles.attribute} />
                <span className={styles.caption}>{phoneNumer}</span>
              </Fragment>
            );
          })}
          {person.emails.map((mailAddress, index) => {
            return (
              <Fragment key={index}>
                <IconMail className={styles.attribute} />
                <span className={styles.caption}>{mailAddress}</span>
              </Fragment>
            );
          })}
          {person.roomNumber && (
            <>
              <IconLocation className={styles.attribute} />
              <span className={styles.caption}>{person.roomNumber}</span>
            </>
          )}
        </div>
      ) : (
        <div className={styles.hidden}>
          <span className={styles.caption}>No more information available</span>
        </div>
      )}
      {(person.phones.length > 0 || person.emails.length > 0 || person.roomNumber) && (
        <div className={styles.toggleIcon}>
          <IconPlus />
        </div>
      )}
    </li>
  );
}

PersonResult.displayName = "PersonResult";
export default PersonResult;

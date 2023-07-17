import { Employee } from "types/Employee";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import { Fragment, useEffect, useRef, useState, memo, useCallback } from "react";
import { handleClickOnPerson } from "utils/Wayfinder/personCardsTransformations";
import Image from "next/image";
import IconAccount from "assets/images/icon_account.svg";
import IconPlus from "assets/images/icon_plus.svg";
import IconMinus from "assets/images/icon_minus.svg";
import IconCall from "assets/images/icon_call.svg";
import IconMail from "assets/images/icon_mail.svg";
import IconLocation from "assets/images/icon_location.svg";
import { animationAllowed } from "utils/Wayfinder/mapValidations";
import { useToastContext } from "context/ToastContext";

interface props {
  person: Employee;
}

export const SEARCH_RESULT_COLLAPSED = styles.person;
export const SEARCH_RESULT_EXPANDED = [styles.person, styles.expanded].join(" ");
const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";
const PersonResult = memo(({ person }: props) => {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();
  const toastContext = useToastContext();
  const [imageID, setImageID] = useState(person.image);

  const handleClick = useCallback(() => {
    animationAllowed(mapContext, toastContext) &&
      handleClickOnPerson(person, mapContext, selectedPersonContext);
  }, [mapContext]);

  const personRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    person.searchResultRef = personRef;
  }, [person, personRef]);

  return (
    <li className={SEARCH_RESULT_COLLAPSED} onClick={handleClick} ref={personRef}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          {imageID ? (
            <Image
              src={`${url}${imageID}`}
              alt="profile picture"
              sizes="250px"
              style={{ objectFit: "cover" }}
              onError={() => setImageID(null)}
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
          {person.address && person.roomNumber && (
            <>
              <IconLocation className={styles.attribute} />
              <div>
                <span className={styles.caption}>{person.address}</span>
                <span className={styles.caption}>, {person.roomNumber}</span>
              </div>
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
          {selectedPersonContext.current_person === person ? <IconMinus /> : <IconPlus />}
        </div>
      )}
    </li>
  );
});

PersonResult.displayName = "PersonResult";
export default PersonResult;

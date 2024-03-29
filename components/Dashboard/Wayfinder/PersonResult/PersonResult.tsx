import { REQUEST_URL } from "utils/constants";
import { Employee } from "types/Employee";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Dashboard/Wayfinder/Wayfinder.module.scss";
import { Fragment, memo, useCallback, useEffect, useRef, useState } from "react";
import { handleClickOnPerson } from "utils/wayfinderAnimation/personCardsTransformations";
import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";

import IconAccount from "assets/icons/account.svg";
import IconPlus from "assets/icons/plus.svg";
import IconMinus from "assets/icons/minus.svg";
import IconCall from "assets/icons/call.svg";
import IconMail from "assets/icons/mail.svg";
import IconLocation from "assets/icons/location.svg";
import IconSchoolHat from "assets/icons/school_hat.svg";

import * as Dialog from "@radix-ui/react-dialog";
import { PersonOverlay } from "./PersonOverlay";
import { useTranslation } from "next-i18next";

import { Button } from "@/components/UI/Button";
import { Info } from "@/components/UI/Info";

interface props {
  person: Employee;
}

export const SEARCH_RESULT_COLLAPSED = styles.person;
export const SEARCH_RESULT_EXPANDED = [styles.person, styles.expanded].join(" ");
const url =
  process.env.NODE_ENV === "development"
    ? `${REQUEST_URL}/api/picture/`
    : "https://ps-housetech.uni-muenster.de/api/picture/";
const PersonResult = memo(({ person }: props) => {
  const { t } = useTranslation("index");
  const [overlayOpen, setOverlayOpen] = useState(false);

  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();
  const [imageID, setImageID] = useState(person.image);

  const handleClick = useCallback(() => {
    handleClickOnPerson(person, mapContext, selectedPersonContext);
  }, [mapContext, person, selectedPersonContext]);

  const personRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    person.searchResultRef = personRef;
  }, [person, personRef]);

  return (
    <li className={SEARCH_RESULT_COLLAPSED} ref={personRef} onClick={handleClick}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          {imageID ? (
            <Image
              src={`${url}${imageID}`}
              alt="profile picture"
              sizes="250px"
              style={{ objectFit: "cover" }}
              onError={() => setImageID(null)}
              priority
              fill
            />
          ) : (
            <IconAccount />
          )}
        </div>
        <div className={styles.shortInfo}>
          <span>{`${person.cfFirstNames} ${person.cfFamilyNames}`}</span>
          {person.chairs.length > 0 && (
            <span className={styles.caption}>{person.chairs[0]}</span>
          )}
        </div>
      </div>
      <div className={styles.hidden}>
        {person.phones.length > 0 ||
        person.emails.length > 0 ||
        person.roomNumber ||
        person.chairs.length > 1 ? (
          <>
            {person.chairs.length > 1 && (
              <>
                {person.chairs.map(
                  (chair, index) =>
                    index > 0 && (
                      <Fragment key={index}>
                        <Info className={styles.attribute} type="text">
                          <IconSchoolHat className={styles.attribute} />
                        </Info>
                        <span className={styles.caption}>{chair}</span>
                      </Fragment>
                    )
                )}
                {(person.phones.length > 0 ||
                  person.emails.length > 0 ||
                  person.roomNumber) && (
                  <Separator.Root orientation="horizontal" className={styles.separator} />
                )}
              </>
            )}
            {person.phones.map((phoneNumer, index) => {
              return (
                <Fragment key={index}>
                  <Info className={styles.attribute} type="text">
                    <IconCall />
                  </Info>
                  <span className={styles.caption}>{phoneNumer}</span>
                </Fragment>
              );
            })}
            {person.emails.map((mailAddress, index) => {
              return (
                <Fragment key={index}>
                  <Info className={styles.attribute} type="text">
                    <IconMail className={styles.attribute} />
                  </Info>
                  <span className={styles.caption}>{mailAddress}</span>
                </Fragment>
              );
            })}
            {person.address && person.roomNumber && (
              <>
                <Info className={styles.attribute} type="text">
                  <IconLocation />
                </Info>
                <div>
                  <span className={styles.caption}>{person.address}</span>
                  <span className={styles.caption}>, {person.roomNumber}</span>
                </div>
              </>
            )}

            <Dialog.Root open={overlayOpen} onOpenChange={setOverlayOpen}>
              <Dialog.Trigger asChild>
                <Button
                  onMouseDown={(e) => {
                    setOverlayOpen(true);
                    e.preventDefault();
                  }}
                  className={styles.overlayTrigger}
                >
                  {t("wayfinder.search.contact_person")}
                </Button>
              </Dialog.Trigger>
              <PersonOverlay
                person={person}
                imageID={imageID}
                setOpen={setOverlayOpen}
                open={overlayOpen}
              />
            </Dialog.Root>
          </>
        ) : (
          <>
            <span className={styles.noMoreInfo}>
              {t("wayfinder.search.no_more_info")}
            </span>
          </>
        )}
      </div>
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
